/*:
 * @plugindesc Version: 1.00 | Simple plugin to help do math for blackjack
 * @author Hiro24
 */

// Actual values of cards
var BlackjackCardValues = [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

var hiro_interpreterCommand = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {

	hiro_interpreterCommand.apply(this);

	// getCardInfo Dealer 3 43    would be dealer's 3rd card. Variable 43. 

	if (command == 'getCardInfo') {
		var BlackjackTarget = args[0];
		var BlackjackCard = args[1];
		var BlackjackVarNum = args[2];
		var BlackjackMyCard = $gameVariables.value(BlackjackVarNum);
		$gameVariables.setValue(BlackjackVarNum, BlackjackCardValues[BlackjackMyCard]);
	};
	
	if (command == 'setEventToCharacter') {
		var Hiro_Event_Target = args[0];
		var Hiro_Party_Target = args[1];
		var my_char = $gameParty.members()[Hiro_Party_Target]._actorId; 
		var my_spritesheet = $gameActors.actor(my_char).characterName();
		var my_index = $gameActors.actor(my_char).characterIndex();
		$gameMap.event(Hiro_Event_Target).setImage(my_spritesheet, my_index);
	};
};

