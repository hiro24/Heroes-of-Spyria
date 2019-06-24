//=============================================================================
// Set Event to Character
// Hiro_SetEventImageToPartyMember.js
// Version: 1.0
// Author: Hiro24
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc v1.0 Easily set event images to the images of party members
 * @author Hiro24
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin is meant to help streamline cutscene creation. In my own game, 
 * I found that having a large stable of characters made it difficult to 
 * determine who should be on the screen at any given time. There would need 
 * to be a lot of "if character is in party, set image = this, else if etc etc"
 * And this would go on and on for every character that MIGHT be in my party 
 * at the time that I wanted to show them.
 *
 * This plugin seeks to streamline that by offering a single, simple command 
 * with a couple arguments. This will set the given event ID number's image 
 * to the image of the party member in the position you pass to the plugin.
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * To use this plugin, issue the following command with arguments
 *
 * setEventToCharacter EVENT_ID PARTY_POSITION
 *
 * EVENT_ID = the ID number of the event whose image will change 
 * PARTY_POSITION = The position in the party to change the event's image to
 *      0 - First position
 *      1 - Second Position
 *      2 - Third Position
 *      3 - Forth Position
 *
 * Special thanks to /u/Fuchsilein from Reddit for pointing me in the right 
 * direction with the JavaSCript.
 *
 */
//=============================================================================

var hiro24_interpreterCommand = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {

	hiro24_interpreterCommand.apply(this);

	if (command == 'setEventToCharacter') {
		var Hiro_Event_Target = args[0];
		var Hiro_Party_Target = args[1];
		var my_char = $gameParty.members()[Hiro_Party_Target]._actorId; 
		var my_spritesheet = $gameActors.actor(my_char).characterName();
		var my_index = $gameActors.actor(my_char).characterIndex();
		$gameMap.event(Hiro_Event_Target).setImage(my_spritesheet, my_index);
	};
};
