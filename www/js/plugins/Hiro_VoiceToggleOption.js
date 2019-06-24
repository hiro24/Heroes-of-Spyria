/*:
 * @plugindesc Adds a Voices Toggle to the Options Window
 * @author SumRndmDde - Edited all to hell by Hiro
 *
 * @param Option Name
 * @desc The name used by the Voice Toggle option.
 * @default Voice
 *
 * @param Position
 * @desc The position of the option in the Options Window.
 * Choices are: Top, Middle, Bottom
 * @default Middle
 *
 * @param Default Value
 * @desc The default value of the option first time playing.
 * true = on    false = off
 * @default true
 *
 * @param Persist Default?
 * @desc If set to true, then the game will always start with the Default Value.  (Choices are: true, false)
 * @default true
 *
 * @help
 *
 * Voice Toggle Option
 * Version 1.00
 * SumRndmDde (Edited by Hiro)
 *
 *
 * Important Notes:
 * This plugin does not have any plugin commands.
 * All functions are aliased.
 *
 *
 * How to Use:
 *
 * Adds a Voice Toggle to the Options Window.
 *
 * 
 * Plugin Commands:
 *
 * ToggleScreenType
 * Switches between Voice mode and windowed mode.
 *
 *
 * Thanks for reading!
 * If you have questions, please do not hesitate to ask on my YouTube channel:
 * https://www.youtube.com/SumRndmDde
 *
 * Until next time,
 *   ~ SumRndmDde
 */

(function() {

	var parameters = PluginManager.parameters('Hiro_VoiceToggleOption');

	var optionName = String(parameters['Option Name']);
	var defaultValue = String(parameters['Default Value']).trim().toLowerCase() === 'true';
	var position = String(parameters['Position']).toLowerCase();
	var persist = String(parameters['Persist Default?']).trim().toLowerCase() === 'true';

	ConfigManager.Voice = defaultValue;

	Object.defineProperty(ConfigManager, 'Voice', {
	    get: function() {
	        return defaultValue;
	    },
	    set: function(value) {
	        if (value) {
		        defaultValue = "false";
				// Graphics._requestVoice();
		    } else {
				defaultValue = "true";
		        // Graphics._cancelVoice();
		    }
	    },
	    configurable: true
	});

	var _ConfigManager_makeData = ConfigManager.makeData;
	ConfigManager.makeData = function() {
	    var config = _ConfigManager_makeData.call(this);
	    config.Voice = this.Voice;
	    return config;
	};

	var _ConfigManager_applyData = ConfigManager.applyData;
	ConfigManager.applyData = function(config) {
	    _ConfigManager_applyData.call(this, config);
	    this.Voice = this.readVoice(config, 'Voice');
	};

	ConfigManager.readVoice = function(config, name) {
	    var value = config[name];
	    if(!persist) {
		    if (value !== undefined) {
		        return value;
		    } else {
		        return defaultValue;
		    }
		} else {
			return defaultValue;
		}
	};

	var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
	Window_Options.prototype.addGeneralOptions = function() {
	    _Window_Options_addGeneralOptions.call(this);
	    if(position === 'middle') {
	    	this.addCommand(optionName, 'Voice');
	    }
	};

	var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function() {
		if(position === 'top') {
	    	this.addCommand(optionName, 'Voice');
	    }
	    _Window_Options_makeCommandList.call(this);
	};

	var _Window_Options_addVolumeOptions = Window_Options.prototype.addVolumeOptions;
	Window_Options.prototype.addVolumeOptions = function() {
	    _Window_Options_addVolumeOptions.call(this);
	    if(position === 'bottom') {
	    	this.addCommand(optionName, 'Voice');
	    }
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
	    _Game_Interpreter_pluginCommand.call(this, command, args);

	    if(command.toLowerCase() === 'togglescreentype') {
	    	// Graphics._switchVoice();
	    }
	};

})();