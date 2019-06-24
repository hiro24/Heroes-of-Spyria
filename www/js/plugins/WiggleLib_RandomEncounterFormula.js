//=============================================================================
// WiggleLib - Random Encounter Formula
// WiggleLib_RandomEncounterFormula.js
// Version: 1.00
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc This plugin allows you to write a custom random encounter formula.
 * @author JumbocactuarX27/Wiggle
 *
 * @param Formula
 * @desc Formula for deciding when random encounters will happen. 
 * For map's encounter step use "encounterStep".
 * @default Math.randomInt(encounterStep) + Math.randomInt(encounterStep) + 1
 */
 //=============================================================================
var WiggleLib = WiggleLib || {};

WiggleLib.EncounterFormulaParams = PluginManager.parameters('WiggleLib_RandomEncounterFormula');
 
Game_Player.prototype.makeEncounterCount = function() {
    var encounterStep = $gameMap.encounterStep();
    this._encounterCount = eval(String(WiggleLib.EncounterFormulaParams['Formula']));
};