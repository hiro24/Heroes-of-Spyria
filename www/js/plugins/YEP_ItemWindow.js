//=============================================================================
// Yanfly Engine Plugins - Template
// YEP_ItemWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ItemWindow = true;

var Yanfly = Yanfly || {};
Yanfly.Item = Yanfly.Item || {};

//=============================================================================
 /*:
 * @plugindesc v1.05 The Item Window functions as a window for random
 * jibber jabber that does not require a message window.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Item Font Name
 * @desc The font name used for the text of the Item Window.
 * Default: GameFont
 * @default GameFont
 *
 * @param Item Font Size
 * @desc The font size used for the text of the Item Window.
 * Default: 28
 * @default 28
 *
 * @param Character X Pos
 * @desc X position of the character.
 * Default: 36
 * @default 36
 *
 * @param Character Y Pos
 * @desc Y position of the character.
 * Default: 60
 * @default 60
 *
 * @param Base Wait Time
 * @desc Minimum frames the Item Window stays visible.
 * Default: 90
 * @default 90
 *
 * @param Time Per Character
 * @desc Frames added per Text Character.
 * Default: 4
 * @default 4
 *
 * @param Fade Rate
 * @desc Is is how fast the Item window fades away.
 * Default: 16
 * @default 16
 *
 * @param Anti-Repeat
 * @desc Stops Items of the same settings from being queued.
 * NO - false     YES - true
 * @default true
 *
 * @param ---Map---
 * @default
 *
 * @param Map Y Location
 * @desc This is the Y location of the Item Window.
 * Default: 72
 * @default 72
 *
 * @param Map Dim Color 1
 * @desc This is the dim color 1 used for maps.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param Map Dim Color 2
 * @desc This is the dim color 2 used for maps.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0.3)
 *
 * @param ---Battle---
 * @default
 *
 * @param Battle Y Location
 * @desc This is the Y location of the Item Window.
 * Default: 108
 * @default 108
 *
 * @param Battle Dim Color 1
 * @desc This is the dim color 1 used for battles.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param Battle Dim Color 2
 * @desc This is the dim color 2 used for battles.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes there's random jibber jabber that does not warrant a message box.
 * The Item Window fulfills that jibber jabber by placing such text outside of
 * the message window box and at the corner of the screen. The Item text will
 * appear briefly and then disappear, not showing up again until the Item text
 * is updated with something else.
 *
 * New to the MV version is the ability to play sounds for your Item Window in
 * addition to queueing multiple Items together to have them form a conversation
 * of sorts. When queued up, the currently playing Item will continue showing
 * until it fades out before loading up the next Item.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Using the Item Window is quite simple. By default, it can be used in either
 * the map scene or the battle scene. To call upon it, you will to use a few
 * Plugin Commands to set up what you wish for the Item Window to display.
 *
 * Plugin Commands:
 *
 * --- Setup Commands ---
 *
 * ItemText text
 * This will set the Item window to type out the above text. Text codes can be
 * used for the Item Window.
 *
 * ItemFaceName filename
 * If you wish to display a face graphic, use this plugin command to have it
 * display a face from the filename.
 *
 * ItemFaceIndex x
 * Used in combination with the above plugin command to define which index the
 * face will use.
 *
 * ItemSpriteName filename
 * If you wish to display a particular character sprite, use this plugin
 * command to have it display a sprite from the filename.
 *
 * ItemSpriteIndex x
 * Used in combination with the above plugin command to define which index the
 * sprite will use.
 *
 * ItemActor x
 * ItemActorFace x
 * This will display actor x's face graphic where x is the actor's ID.
 *
 * ItemActorSprite x
 * This will display actor x's sprite graphic where x is the actor's ID.
 *
 * ItemParty x
 * ItemPartyFace x
 * This will display party member x's face graphic where x is the position.
 *
 * ItemPartySprite x
 * This will display party member x's sprite graphic where x is the position.
 *
 * ItemSound filename
 * This will play a sound from the SE folder under that particular filename.
 *
 * ItemSwitch x
 * This will enable switch x when this Item finishes playing.
 *
 * WaitForItem
 * Causes the game to wait until all Items are finished playing.
 *
 * --- Display Commands ---
 *
 * ShowItem
 * Once the above settings are complete, use this Plugin Command to launch the
 * Item Window and display the above data. This will put the Item data into a
 * queue which means if there's another Item playing, this will be next in line.
 *
 * *Note If multiple ShowItems are used, they will be queued up. The current
 * playing Item will finish playing before moving onto the next. If it so
 * happens that the inputted Item would have the same exact settings as a
 * previously loaded Item within the same queue, it will not be inserted to
 * prevent any redundancy amongst the conversation.
 *
 * ForceItem
 * Once the above settings are complete, use this Plugin Command to clear all
 * the other Items in the Item Window and display the above data.
 *
 * ClearItem
 * This clears out the Item Window of the current Item and any Items queued.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Added 'WaitForItem' plugin command. This plugin command causes the game to
 * wait until all Items are finished playing.
 *
 * Version 1.04:
 * - Fixed an issue with ForceItem that didn't make it work properly with text
 * coded Items.
 *
 * Version 1.03a:
 * - Fixed a bug with ItemSound that didn't load the proper sound filenames.
 * - Fixed the time count for Items to not include text codes.
 *
 * Version 1.02a:
 * - Added functionality for battle Items to be saved when going into other
 * scenes and returning to battle.
 * - Added ItemSwitch x to enable switch x when the Item finishes playing.
 *
 * Version 1.01:
 * - Added 'ItemParty x' and 'ItemPartySprite x' plugin commands to help with
 * those without dynamic party setups.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ItemWindow');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ItemFontName = String(Yanfly.Parameters['Item Font Name']);
Yanfly.Param.ItemFontSize = Number(Yanfly.Parameters['Item Font Size']);
Yanfly.Param.ItemCharPosX = Number(Yanfly.Parameters['Character X Pos']);
Yanfly.Param.ItemCharPosY = Number(Yanfly.Parameters['Character Y Pos']);
Yanfly.Param.ItemBaseTime = Number(Yanfly.Parameters['Base Wait Time']);
Yanfly.Param.ItemTimePerChar = Number(Yanfly.Parameters['Time Per Character']);
Yanfly.Param.ItemFadeRate = Number(Yanfly.Parameters['Fade Rate']);
Yanfly.Param.ItemAntiRepeat = Boolean(Yanfly.Parameters['Anti-Repeat']);

Yanfly.Param.ItemMapYLoc = Number(Yanfly.Parameters['Map Y Location']);
Yanfly.Param.ItemMapDim1 = String(Yanfly.Parameters['Map Dim Color 1']);
Yanfly.Param.ItemMapDim2 = String(Yanfly.Parameters['Map Dim Color 2']);

Yanfly.Param.ItemBattleYLoc = Number(Yanfly.Parameters['Battle Y Location']);
Yanfly.Param.ItemBattleDim1 = String(Yanfly.Parameters['Battle Dim Color 1']);
Yanfly.Param.ItemBattleDim2 = String(Yanfly.Parameters['Battle Dim Color 2']);

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Item.Game_Interpreter_clear = Game_Interpreter.prototype.clear;
Game_Interpreter.prototype.clear = function() {
    Yanfly.Item.Game_Interpreter_clear.call(this);
    this.clearItemInformation();
};

Yanfly.Item.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Item.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'ItemText') this.setItemText(args);
    if (command === 'ItemSpriteName') this.setItemSpriteName(args);
    if (command === 'ItemSpriteIndex') this.setItemSpriteIndex(args);
    if (command === 'ItemFaceName') this.setItemFaceName(args);
    if (command === 'ItemFaceIndex') this.setItemFaceIndex(args);
    if (command === 'ItemActorSprite') this.setItemActorSprite(args);
    if (command === 'ItemActor') this.setItemActorFace(args);
    if (command === 'ItemActorFace') this.setItemActorFace(args);
    if (command === 'ItemPartySprite') this.setItemPartySprite(args);
    if (command === 'ItemParty') this.setItemPartyFace(args);
    if (command === 'ItemPartyFace') this.setItemPartyFace(args);
    if (command === 'ItemSound') this.setItemSound(args);
    if (command === 'ItemSwitch') this.setItemSwitch(args);
    if (command === 'ShowItem') this.showItem();
    if (command === 'ForceItem') this.forceItem();
    if (command === 'ClearItem') this.clearItem();
    if (command === 'WaitForItem') this.waitForItem();
};

Game_Interpreter.prototype.clearItemInformation = function() {
    this._ItemText = '';
    this._ItemGraphicType = 'none';
    this._ItemGraphicName = '';
    this._ItemGraphicIndex = 0;
    this._ItemSoundName = '';
    this._ItemSwitch = 0;
};

Game_Interpreter.prototype.setItemText = function(args) {
    var text = '';
    for (var i = 0; i < args.length; ++i) {
      text = text + args[i] + ' ';
    }
    this._ItemText = text;
};

Game_Interpreter.prototype.setItemSpriteName = function(args) {
    this._ItemGraphicType = 'character';
    var text = '';
    if (args.length === 1) return this._ItemGraphicName = String(args[0]);
    for (var i = 0; i < args.length; ++i) {
      text = text + ' ' + args[i];
    }
    this._ItemGraphicName = text;
};

Game_Interpreter.prototype.setItemSpriteIndex = function(args) {
    this._ItemGraphicType = 'character';
    this._ItemGraphicIndex = parseInt(args[0]);
};

Game_Interpreter.prototype.setItemFaceName = function(args) {
    this._ItemGraphicType = 'face';
    var text = '';
    if (args.length === 1) return this._ItemGraphicName = String(args[0]);
    for (var i = 0; i < args.length; ++i) {
      text = text + ' ' + args[i];
    }
    this._ItemGraphicName = text;
};

Game_Interpreter.prototype.setItemFaceIndex = function(args) {
    this._ItemGraphicType = 'face';
    this._ItemGraphicIndex = parseInt(args[0]);
};

Game_Interpreter.prototype.setItemActorSprite = function(args) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    this._ItemGraphicType = 'character';
    this._ItemGraphicName = actor.characterName();
    this._ItemGraphicIndex = actor.characterIndex();
};

Game_Interpreter.prototype.setItemPartySprite = function(args) {
    var position = parseInt(args[0]);
    if (position <= 0) return;
    position -= 1;
    var actor = $gameParty.members()[position];
    if (!actor) return;
    var actorId = actor._actorId;
    this.setItemActorSprite([actorId]);
};

Game_Interpreter.prototype.setItemActorFace = function(args) {
    var actorId = parseInt(args[0]);
    var actor = $gameActors.actor(actorId);
    if (!actor) return;
    this._ItemGraphicType = 'face';
    this._ItemGraphicName = actor.faceName();
    this._ItemGraphicIndex = actor.faceIndex();
};

Game_Interpreter.prototype.setItemPartyFace = function(args) {
    var position = parseInt(args[0]);
    if (position <= 0) return;
    position -= 1;
    var actor = $gameParty.members()[position];
    if (!actor) return;
    var actorId = actor._actorId;
    this.setItemActorFace([actorId]);
};

Game_Interpreter.prototype.setItemSound = function(args) {
    var text = '';
    if (args.length === 1) return this._ItemSoundName = String(args[0]);
    for (var i = 0; i < args.length; ++i) {
      if (i === 0) {
        text = args[0];
        continue;
      }
      text = text + ' ' + args[i];
    }
    this._ItemSoundName = text;
};

Game_Interpreter.prototype.setItemSwitch = function(args) {
    this._ItemSwitch = parseInt(args[0]);
};

Game_Interpreter.prototype.showItem = function() {
    if (!this._ItemText) return;
    var ItemData = [
        this._ItemText,
        this._ItemGraphicType,
        this._ItemGraphicName,
        this._ItemGraphicIndex,
        this._ItemSoundName,
        this._ItemSwitch
    ];
    var scene = SceneManager._scene;
    if (scene._ItemWindow) scene.startItemWindow(ItemData);
    this.clearItemInformation();
};

Game_Interpreter.prototype.forceItem = function() {
    if (!this._ItemText) return;
    var ItemData = [
        this._ItemText,
        this._ItemGraphicType,
        this._ItemGraphicName,
        this._ItemGraphicIndex,
        this._ItemSoundName,
        this._ItemSwitch
    ];
    var scene = SceneManager._scene;
    if (scene._ItemWindow) scene.forceItemWindow(ItemData);
    this.clearItemInformation();
};

Game_Interpreter.prototype.clearItem = function() {
    var scene = SceneManager._scene;
    if (scene._ItemWindow) scene.clearItemWindow();
    this.clearItemInformation();
};

Game_Interpreter.prototype.waitForItem = function() {
    this.setWaitMode('Item');
};

Yanfly.Item.Game_Interpreter_updateWaitMode =
  Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
  if (this._waitMode === 'Item') {
    return this.isItemRunning();
  } else {
    return Yanfly.Item.Game_Interpreter_updateWaitMode.call(this);
  }
};

Game_Interpreter.prototype.isItemRunning = function() {
  var scene = SceneManager._scene;
  var win = SceneManager._scene._ItemWindow;
  if (win) {
    return win._ItemQueue.length > 0 || win._ItemRunning;
  } else {
    return false;
  }
};

//=============================================================================
// Window_Item
//=============================================================================

function Window_Item() {
    this.initialize.apply(this, arguments);
}

Window_Item.prototype = Object.create(Window_Base.prototype);
Window_Item.prototype.constructor = Window_Item;

Window_Item.prototype.initialize = function(battle) {
    this._battle = battle;
    var wx = this.standardPadding() * -1;
    if (battle) {
      var wy = Yanfly.Param.ItemBattleYLoc - this.standardPadding();
    } else {
      var wy = Yanfly.Param.ItemMapYLoc - this.standardPadding();
    }
    var ww = Graphics.boxWidth + this.standardPadding() * 2;
    var wh = this.fittingHeight(2);
    this._ItemSwitch = 0;
    this._showCount = 0;
    this._ignoreMask = true;
    this._ItemQueue = [];
    this._currentItem = [];
    this._ItemSwitchedOn = false;
    this._ItemRunning = false;
    Window_Base.prototype.initialize.call(this, wx, wy, ww, wh);
    this.restoreItems();
    this.clear();
};

Window_Item.prototype.clear = function() {
    this._ItemLoaded = false;
    this._graphicLoading = false;
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._text = '';
    this._graphicType = 'none';
    this._graphicName = '';
    this._graphicIndex = 0;
    this._soundName = '';
    this._graphicBitmap = undefined;
};

Window_Item.prototype.standardFontFace = function() {
    return Yanfly.Param.ItemFontName;
};

Window_Item.prototype.standardFontSize = function() {
    return Yanfly.Param.ItemFontSize;
};

Window_Item.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.isHideItemWindow()) {
      this.hide();
    } else if (this._ItemLoaded) {
      if (this._graphicLoading && this._graphicBitmap.width <= 0) return;
      this.refresh();
    } else if (this._showCount > 0) {
      this.updateFadeIn();
      --this._showCount;
    } else if (this.contentsOpacity > 0) {
      this.updateFadeOut();
    } else if (this._ItemQueue.length > 0) {
      this.processNewItemData()
    } else {
      this._ItemRunning = false;
    }
};

Window_Item.prototype.isHideItemWindow = function() {
    if ($gameParty.inBattle() && BattleManager._victoryPhase) return true;
    return false;
};

Window_Item.prototype.updateFadeIn = function() {
    this.contentsOpacity += Yanfly.Param.ItemFadeRate;
};

Window_Item.prototype.updateFadeOut = function() {
    this.contentsOpacity -= Yanfly.Param.ItemFadeRate;
    if (this.contentsOpacity > 0) return;
    if (this._ItemSwitchedOn) return;
    if (this._ItemSwitch) {
      $gameSwitches.setValue(this._ItemSwitch, true);
      this._ItemSwitchedOn = true;
    }
};

Window_Item.prototype.addItemData = function(ItemData) {
    if (!ItemData) return;
    if (this.checkDuplicateItem(ItemData)) return;
    this._ItemQueue.push(ItemData);
};

Window_Item.prototype.forceItemData = function(ItemData) {
    if (!ItemData) return;
    this.clearItemData();
    this._ItemQueue.push(ItemData);
};

Window_Item.prototype.clearItemData = function() {
    this._ItemQueue = [];
    this._currentItem = [];
    this._showCount = 0;
};

Window_Item.prototype.checkDuplicateItem = function(ItemData) {
    if (!Yanfly.Param.ItemAntiRepeat) return false;
    if (this.checkCurrentItem(ItemData)) return true;
    if (this.checkQueuedItems(ItemData)) return true;
    return false;
};

Window_Item.prototype.checkCurrentItem = function(ItemData) {
    var iteration = this._currentItem;
    if (iteration[0] !== ItemData[0]) return false;
    if (iteration[1] !== ItemData[1]) return false;
    if (iteration[2] !== ItemData[2]) return false;
    if (iteration[3] !== ItemData[3]) return false;
    if (iteration[4] !== ItemData[4]) return false;
    if (iteration[5] !== ItemData[5]) return false;
    return true;
};

Window_Item.prototype.checkQueuedItems = function(ItemData) {
    for (var i = 0; i < this._ItemQueue.length; ++i) {
      var iteration = this._ItemQueue[i];
      if (iteration[0] !== ItemData[0]) continue;
      if (iteration[1] !== ItemData[1]) continue;
      if (iteration[2] !== ItemData[2]) continue;
      if (iteration[3] !== ItemData[3]) continue;
      if (iteration[4] !== ItemData[4]) continue;
      if (iteration[5] !== ItemData[5]) continue;
      return true;
    }
    return false;
};

Window_Item.prototype.processNewItemData = function() {
    this._ItemRunning = true;
    var ItemData = this._ItemQueue.shift();
    this._ItemSwitchedOn = false;
    this._currentItem = ItemData;
    this._text = ItemData[0] || '';
    this._graphicType = ItemData[1] || 'none';
    this._graphicName = ItemData[2] || '';
    this._graphicIndex = ItemData[3] || 0;
    this._soundName = ItemData[4] || 0;
    this._ItemSwitch = ItemData[5] || 0;
    this.setupLoadGraphic();
    this._ItemLoaded = true;
};

Window_Item.prototype.setupLoadGraphic = function() {
    this._graphicLoading = false;
    if (this._graphicType === 'character') {
      this._graphicBitmap = ImageManager.loadCharacter(this._graphicName);
      this._graphicLoading = true;
    } else if (this._graphicType === 'face') {
      this._graphicBitmap = ImageManager.loadFace(this._graphicName);
      this._graphicLoading = true;
    }
};

Window_Item.prototype.refresh = function() {
    this.contents.clear();
    this.startCountdown();
    this.drawItemBackground();
    this.drawItemCharacter();
    this.drawItemText();
    this.playSound();
    this.clear();
};

Yanfly.Item.WindowLayer_webglMaskWindow =
    WindowLayer.prototype._webglMaskWindow;
WindowLayer.prototype._webglMaskWindow = function(renderSession, win) {
    if (win._ignoreMask) return;
    Yanfly.Item.WindowLayer_webglMaskWindow.call(this, renderSession, win);
};

Window_Item.prototype.startCountdown = function() {
    this._graphicLoading = false;
    this.contentsOpacity = 255;
    this._showCount = Yanfly.Param.ItemBaseTime;
    var text = this._text.replace(/\\(.*?)\[(.*?)\]/gi, '');
    this._showCount += text.length * Yanfly.Param.ItemTimePerChar;
};

Window_Item.prototype.drawItemBackground = function() {
    var width = this.contentsWidth();
    this.drawBackground(0, 0, width, this.lineHeight() * 1.4);
};

Window_Item.prototype.dimColor1 = function() {
    if ($gameParty.inBattle()) {
      return Yanfly.Param.ItemBattleDim1;
    } else {
      return Yanfly.Param.ItemMapDim1;
    }
};

Window_Item.prototype.dimColor2 = function() {
    if ($gameParty.inBattle()) {
      return Yanfly.Param.ItemBattleDim2;
    } else {
      return Yanfly.Param.ItemMapDim2;
    }
};

Window_Item.prototype.drawBackground = function(wx, wy, ww, wh) {
    var color1 = this.dimColor1();
    var color2 = this.dimColor2();
    var ww1 = Math.ceil(ww * 0.25)
    var ww2 = Math.ceil(ww * 0.75)
    this.contents.gradientFillRect(wx, wy, ww1, wh, color1, color1);
    this.contents.gradientFillRect(ww1, wy, ww2, wh, color1, color2);
};

Window_Item.prototype.drawItemCharacter = function() {
    if (this._graphicName === '') return;
    if (this._graphicType === 'character') {
      var wx = Yanfly.Param.ItemCharPosX;
      var wy = Yanfly.Param.ItemCharPosY;
      this.drawCharacter(this._graphicName, this._graphicIndex, wx, wy);
    } else if (this._graphicType === 'face') {
      var wx = 0;
      var wy = 0;
      var ww = Window_Base._faceWidth;
      var wh = this.lineHeight() * 2;
      this.drawFace(this._graphicName, this._graphicIndex, wx, wy, ww, wh);
    }
};

Window_Item.prototype.drawItemText = function() {
    var text = this._text;
    if (this._graphicType === 'character') {
      var wx = Yanfly.Param.ItemCharPosX * 2;
    } else if (this._graphicType === 'face') {
      var wx = Window_Base._faceWidth + this.standardPadding();
    } else {
      var wx = this.standardPadding();
    }
    var wy = this.contents.height / 2 - this.lineHeight() / 1.2;
    this.drawTextEx(text, wx, wy);
};

Window_Item.prototype.playSound = function() {
    var sound = {
      name:   this._soundName,
      volume: 90,
      pitch:  100,
      pan:    0
    };
    AudioManager.playSe(sound);
};

Window_Item.prototype.storeItems = function() {
    if (this._battle) {
      this.storeBattleItems();
    } else {
      this.storeMapItems();
    }
};

Window_Item.prototype.storeBattleItems = function() {
    $gameTemp._storedBattleItems = this._ItemQueue.slice();
    if (this.contentsOpacity > 0) {
      $gameTemp._currentBattleItem = this._currentItem.slice();
    } else {
      $gameTemp._currentBattleItem = [];
    }
};

Window_Item.prototype.storeMapItems = function() {
    $gameTemp._storedMapItems = this._ItemQueue.slice();
    if (this.contentsOpacity > 0) {
      $gameTemp._currentMapItem = this._currentItem.slice();
    } else {
      $gameTemp._currentMapItem = [];
    }
};

Window_Item.prototype.restoreItems = function() {
    if (this._battle) {
      this.restoreBattleItems();
    } else {
      this.restoreMapItems();
    }
};

Window_Item.prototype.restoreBattleItems = function() {
    if ($gameTemp._storedBattleItems) {
      this._ItemQueue = $gameTemp._storedBattleItems;
      $gameTemp._storedBattleItems = undefined;
    }
    if ($gameTemp._currentBattleItem && $gameTemp._currentBattleItem.length > 0) {
      this._ItemQueue.unshift($gameTemp._currentBattleItem);
      $gameTemp._currentBattleItem = undefined;
    }
};

Window_Item.prototype.restoreMapItems = function() {
    if ($gameTemp._storedMapItems) {
      this._ItemQueue = $gameTemp._storedMapItems;
      $gameTemp._storedMapItems = undefined;
    }
    if ($gameTemp._currentMapItem && $gameTemp._currentMapItem.length > 0) {
      this._ItemQueue.unshift($gameTemp._currentMapItem);
      $gameTemp._currentMapItem = undefined;
    }
};

//=============================================================================
// SceneManager
//=============================================================================

Yanfly.Item.SceneManager_push = SceneManager.push;
SceneManager.push = function(sceneClass) {
    if (this.isStoreItems(sceneClass)) {
      this._scene._ItemWindow.storeItems();
    }
    Yanfly.Item.SceneManager_push.call(this, sceneClass);
};

SceneManager.isStoreItems = function(sceneClass) {
    if (!this.isSceneMap() && !this.isSceneBattle()) return false;
    if (sceneClass === Scene_Map) {
      if (this.isSceneMap()) return false;
    } else if (sceneClass === Scene_Battle) {
      if (this.isSceneMap()) return true;
    }
    return true;
};

SceneManager.isSceneMap = function() {
    return this._scene instanceof Scene_Map;
};

SceneManager.isSceneBattle = function() {
    return this._scene instanceof Scene_Battle;
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.createItemWindow = function(battle) {
    this._ItemWindow = new Window_Item(battle);
    this.addChild(this._ItemWindow);
};

Scene_Base.prototype.startItemWindow = function(ItemData) {
    this._ItemWindow.addItemData(ItemData);
};

Scene_Base.prototype.forceItemWindow = function(ItemData) {
    this._ItemWindow.forceItemData(ItemData);
};

Scene_Base.prototype.clearItemWindow = function() {
    this._ItemWindow.clearItemData();
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.Item.Scene_Battle_createAllWindows =
    Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
    Yanfly.Item.Scene_Battle_createAllWindows.call(this);
    this.createItemWindow(true);
};
//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.Item.Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
    Yanfly.Item.Scene_Map_createAllWindows.call(this);
    this.createItemWindow(false);
};

//=============================================================================
// End of File
//=============================================================================
