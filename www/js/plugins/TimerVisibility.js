// TimerVisibility.js
/*:
 * @plugindesc Lets you toggle the timer's visibility even when it's active
 * @author gameus
 *
 * @param Switch ID
 * @desc Switch ID that toggles the visibility.
 * @default 1
 *
 * @help This plugin does not provide plugin commands.
 */
(function() {
	
	var parameters = PluginManager.parameters('TimerVisibility');
	var switch_id = Number(parameters['Switch ID'] || 1);
	var gameus_override_timer = Sprite_Timer.prototype.updateVisibility;
	
	Sprite_Timer.prototype.updateVisibility = function() {
		gameus_override_timer.call(this);
		this.visible = $gameSwitches.value(switch_id);
	};
})();