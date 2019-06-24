//=============================================================================
// EventTouch.js
//=============================================================================

/*:
 * @plugindesc Adds an "event touch event" trigger. Read "Help" for details on creating this trigger.
 * @author Felix "Xilefian" Jones
 *
 * @param Note Name
 * @desc String to search for in event Notes to register an event as touchable.
 * @default event_touch
 *
 * @param JSON Name
 * @desc String the indicates an event comment is a touch JSON definition.
 * @default Event Touch
 *
 * @param Touched By Event Name
 * @desc Name of the "Touched by x" JSON parameter.
 * @default touched by
 *
 * @param Touching Event Name
 * @desc Name of the "Touching x" JSON parameter.
 * @default touching
 *
 * @param Page Target Name
 * @desc Name of the "Page target" JSON parameter.
 * @default page
 *
 * @help
 *
 * To activate an event for receiving event touches you must give it the Note of the Note Name parameter.
 * To set touch events make a comment on an event page with the first line being the JSON Name.
 * Each touch even is a separate JSON object with optional touched by, touching and target.
 *
 * "Touched By" is triggered when another event hits this one.
 * "Touching" is triggered when this event hits another one.
 * "Page Target" is the event page that is ran when the touch occurs.
 *
 * The Page Target parameter will default to the event page that the touch definition is written on.
 * The Touched By and Touching parameters can take either an event ID number or an event Name.
 *
 * Example
 * #    Event Touch
 * #    { "touching" : "EV001" }
 * #    { "touching" : 2, "page" : 3 }
 * #    { "touched by" : 3 }
 *
 * Version 1.0
 * Website http://www.hbgames.org
 *
 * Change log:
 *   Version 1.0:
 *     Initial version.
 *
 */

 (function() {
    var CMD_COMMENT = 108;
    var CMD_COMMENT_NEXT = 408;

    var parameters = PluginManager.parameters( "EventTouch" );

    var eventTouch = {
        note :  new RegExp( "\\b" + ( parameters["Note Name"] || "event_touch" ) + "\\b", "g" ),
        json :  parameters["JSON Name"] || "Event Touch",
        key :   {
                    touchedBy : parameters["Touched By Event Name"] || "touched by",
                    touching :  parameters["Touching Event Name"] || "touching",
                    page :      parameters["Page Target Name"] || "page"
                }
    };

    function EventTouch() {
        throw new Error( "This is a static class" );
    };

    /**
     * EventTouch.keyToEvent
     */
    EventTouch.keyToEvent = function( key ) {
        if ( typeof( key ) == "string" ) {
            for ( var ii = 0; ii < $dataMap.events.length; ii++ ) {
                if ( $dataMap.events[ii] && $dataMap.events[ii].name == key ) {
                    return $dataMap.events[ii];
                }
            }
        }
        return $dataMap.events[key];
    };

    /**
     * DataManager.onLoad
     */
    var _DataManager_onLoad = DataManager.onLoad;
    DataManager.onLoad = function( object ) {
        _DataManager_onLoad.call( this, object );
        if ( object === $dataMap ) {
            for ( var ii = 0; ii < object.events.length; ii++ ) {
                var eventData = object.events[ii];
                if ( eventData && eventData.note !== undefined && eventTouch.note.test( eventData.note ) ) {
                    // Loop through pages, checking for comments
                    eventData.touchData = {};
                    for ( var jj = 0; jj < eventData.pages.length; jj++ ) {
                        var page = eventData.pages[jj];
                        var jsonParams = [];
                        for ( var kk = 0; kk < page.list.length; kk++ ) {
                            var command = page.list[kk];
                            if ( command.code == CMD_COMMENT ) {
                                if ( eventTouch.json == command.parameters[0] ) {
                                    while ( page.list[kk + 1].code == CMD_COMMENT_NEXT ) {
                                        kk++;
                                        jsonParams.push( page.list[kk].parameters[0] );
                                    }
                                }
                            }
                        }

                        if ( jsonParams.length > 0 ) {
                            for ( var kk = 0; kk < jsonParams.length; kk++ ) {
                                var json = JSON.parse( jsonParams[kk] );
                                if ( json[eventTouch.key.page] !== undefined ) {
                                    pageTarget = Number( json[eventTouch.key.page] ) - 1; // Pages start at 1
                                } else {
                                    pageTarget = jj;
                                }

                                if ( !eventData.pages[pageTarget].interpreter ) {
                                    eventData.pages[pageTarget].interpreter = new Game_Interpreter();
                                }

                                if ( eventData.touchData[pageTarget] === undefined ) {
                                    eventData.touchData[pageTarget] = {
                                        triggers : {
                                            touching : [],
                                            touchedBy : []
                                        }
                                    };
                                }

                                if ( json[eventTouch.key.touching] !== undefined ) {
                                    eventData.touchData[pageTarget].triggers.touching.push( EventTouch.keyToEvent( json[eventTouch.key.touching] ) );
                                } else if ( json[eventTouch.key.touchedBy] !== undefined ) {
                                    eventData.touchData[pageTarget].triggers.touchedBy.push( EventTouch.keyToEvent( json[eventTouch.key.touchedBy] ) );
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    /**
     * Game_Event.isTouchingEvent
     */
    Game_Event.prototype.isTouchingEvent = function( touchData ) {
        if ( this.isMovementSucceeded() ) {
            return false;
        }
        var d = this._direction;
        var x2 = $gameMap.roundXWithDirection( this._x, d );
        var y2 = $gameMap.roundYWithDirection( this._y, d );
        for ( var ii = 0; ii < touchData.triggers.touching.length; ii++ ) {
            var otherEvent = $gameMap._events[touchData.triggers.touching[ii].id];
            if ( x2 == otherEvent._x && y2 == otherEvent._y ) {
                return true;
            }
        }
        return false;
    };

    /**
     * Game_Event.isTouchedByEvent
     */
    Game_Event.prototype.isTouchedByEvent = function( touchData ) {
        for ( var ii = 0; ii < touchData.triggers.touchedBy.length; ii++ ) {
            var otherEvent = $gameMap._events[touchData.triggers.touchedBy[ii].id];
            var d = otherEvent._direction;
            if ( this._x == $gameMap.roundXWithDirection( otherEvent._x, d ) && this._y == $gameMap.roundYWithDirection( otherEvent._y, d ) ) {
                return true;
            }
        }
        return false;
    };

    /**
     * Game_Event.update
     */
    var _Game_Event_update = Game_Event.prototype.update;
    Game_Event.prototype.update = function() {
        _Game_Event_update.call( this );
        var eventData = this.event();
        if ( eventData.touchData !== undefined ) {
            for ( var pageId in eventData.touchData ) {
                var page = eventData.pages[pageId];
                page.interpreter.update();
                if ( !page.interpreter.isRunning() && this.meetsConditions( page ) ) {
                    if ( this.isTouchingEvent( eventData.touchData[pageId] ) || this.isTouchedByEvent( eventData.touchData[pageId] ) ) {
                        page.interpreter.setup( page.list, this._eventId );
                    }
                }
            }
        }
    };

 })();
