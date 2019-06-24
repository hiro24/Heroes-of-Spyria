//=============================================================================
// Yanfly Engine Plugins - Help Journal System
// YEP_HelpJournal.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_HelpJournal = true;

var Yanfly = Yanfly || {};
Yanfly.Help = Yanfly.Help || {};
Yanfly.Help.version = 1.01;

//=============================================================================
 /*:
 * @plugindesc v1.01 Insert a Help journal system into your game!
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * WARNING: This plugin is to be used with RPG Maker MV 1.5.0 or above! This is
 * because the MV 1.5.0 editor allows for this plugin to be made in an orderly
 * and efficient manner. Please make sure your RPG Maker MV software is up to
 * date before using this plugin.
 *
 * ---
 *
 * A Help journal is a very important tool provided by game developers for the
 * players. It lists various Helps, missions, and objectives that the player
 * can pursue in order to progress further into the game. This can be helpful
 * in reminding the player what needs to be done in the event the player can
 * forget what things there are to do in a vast and large RPG world.
 *
 * This plugin places a Help journal system into your RPG Maker MV game. You
 * can set up how the Help journal appears, move its windows around and/or
 * reshape them to fit your game. There are 100 Help slots provided by this
 * plugin (more can be obtained through extension plugins) and each one of them
 * requires your attention in constructing individually.
 *
 * You can adjust the Help's title, display a difficulty level, remind the
 * player who the Help is from, where that Help is from, various dynamic
 * descriptions explaining the Help, a list of objectives to make, a list of
 * rewards that will be given to the player once the Help is complete, and any
 * subtext footnotes you may wish to insert into each Help.
 *
 * ---
 *
 * Keep in mind that while this plugin does enable a Help journal system into
 * your game, this plugin will NOT automate it. If you have a Help enabled, it
 * is still up to you to add the Help properly into the journal, set its many
 * objectives, when the other objectives appear, what the rewards are, and then
 * giving out the rewards yourself manually. The purpose of this plugin is to
 * simply serve as a visual record for your player to see what Helps have been
 * handed down to him or her.
 *
 * ============================================================================
 * Instructions - Setting Up the Help Category Window
 * ============================================================================
 *
 * The plugin parameter 'Help Category Window' can actually be left as is by
 * default, but should you wish to customize it, here's what there is to know.
 *
 * ---
 *
 * Category Order
 * - This is the order in which the following categories appear in the menu:
 * available, completed, failed, all, cancel. Moving these around will let you
 * adjust how the menu is structured. If you do move them around, by default,
 * the first item will be selected at the start.
 * Default: ["available","completed","failed","all"]
 *
 * Available Text
 * - How the entry for the 'available' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many available Helps there are.
 * Default: \i[192]Available (%1)
 *
 * Completed Text
 * - How the entry for the 'completed' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many completed Helps there are.
 * Default: \i[191]Completed (%1)
 *
 * Failed Text
 * - How the entry for the 'failed' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many failed Helps there are.
 * Default: \i[194]Failed (%1)
 *
 * All Text
 * - How the entry for the 'all' category appears. You can use text codes
 * here to give the appearance of icons and/or color. The %1 is a format option
 * that will allow you to display how many Helps there are in total.
 * Default: \i[189]All Helps (%1)
 *
 * Cancel Text
 * - How the entry for the 'cancel' option appears. You can use text codes
 * here to give the appearance of icons and/or color. There is no format option
 * to be used with this text.
 * Default: \i[161]Close
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * Default: 
 *
 * X: 0
 * Y: 0
 * Width: Graphics.boxWidth / 3
 * Height: this.fittingHeight(this.numVisibleRows())
 * Rows: 4
 * Columns: 1
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: left
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Help List Window
 * ============================================================================
 *
 * The plugin parameter 'Help List Window' can be modified to show the various
 * Help types. By default, the plugin will have the following Help types:
 * Main Helps, Side Helps, Character Helps, and Tutorial Helps. Here's what
 * there is to know about the Help List Window.
 *
 * ---
 *
 * Show Types
 * - If this is enabled, it will allow for the Help List Window to display the
 * various Help types. If this is disabled, then those Help types will not
 * appear and all Helps will be displayed without their Help type as their
 * individual header.
 * Default: true
 *
 * Type Order
 * - This is the order for the Help list types and it also enables which types
 * will be available in the Help journal to display. You can use text codes
 * here to add icons and/or colors to the Help types. When you are typing out
 * the Help type names for the individual Help types to fall under, you can
 * omit the \i[x] and \c[x] codes, but everything else must be in tact.
 * Default: ["\\c[6]Main Helps","\\c[4]Side Helps","\\c[3]Character Helps",
 *           "\\c[5]Tutorial Helps"]
 *
 * List Open Symbol
 * - The symbol used to display to show a Help type is opened (showing all of
 * the Helps listed under it) and not closed (not showing any of the Helps
 * listed under it).
 * Default: -
 *
 * List Closed Symbol
 * - The symbol used to display to show a Help type is closed (not showing any
 * of the Helps listed under it) and not opened (showing all of the Helps
 * listed under it).
 * Default: +
 *
 * Type Text Format
 * - The text formating type display the Help types in the Help List Window.
 * %1 will refer to the Open/Closed Symbol. %2 will be the Help type's name.
 * %3 will reveal the number of Helps that are listed under this Help type.
 * Default: %1%2 (%3)
 *
 * Help Indent
 * - This is how much to indent the regular Helps if Help types are shown.
 * This is to help players distinguish Help types from regular Helps, though
 * it isn't necessary if you plan on using icons for your Helps and none for
 * your Help types.
 * Default: 0
 *
 * Show Empty
 * - If enabled, this will show Help types that are empty and have no Helps
 * under them. Otherwise, if it is disabled, Help types that have no Helps
 * will not appear in the Help list and can help reduce clutter.
 * Default: false
 *
 * Read Help
 * - This is how the text appears for the 'Read Help' command. This command
 * will only appear in the List Window if an extension plugin prompting the
 * extra actions list to appear.
 * Default: \i[121]Read Help
 *
 * Cancel
 * - This is how the text appears for the 'Cancel' command. This command will
 * only appear in the List Window if an extension plugin prompting the extra
 * actions list to appear.
 * Default: \i[16]Cancel
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 * 
 * Default: 
 *
 * X: 0
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth / 3
 * Height: Graphics.boxHeight - this.fittingHeight(4)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Type Alignment: left
 * Help Alignment: left
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Help Title Window
 * ============================================================================
 *
 * The plugin parameter 'Help Title Window' can also be left alone by default,
 * but should you wish to alter it to fit your game's settings, here's what you
 * need to know.
 *
 * ---
 *
 * No Help Title
 * - When there's no Help selected in the Help list window, this text will
 * appear in the Help title window. Otherwise, the selected Help's name will
 * appear above the data window. Text codes may be used here.
 * Default: \c[4]Help Journal
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * X: Graphics.boxWidth - width
 * Y: 0
 * Width: Graphics.boxWidth * 2 / 3
 * Height: this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Text Alignment: center
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 *
 * ============================================================================
 * Instructions - Setting Up the Help Data Window
 * ============================================================================
 *
 * The plugin parameter 'Help Data Window' can be modified to show the various
 * information contained inside of a Help. This data is used by the player to
 * understand just what is required of the player to do in order to fulfill and
 * complete the Help. This window's settings can be left as is, but should you
 * wish to alter it to fit your game, read below:
 *
 * ---
 *
 * No Data Text
 * - This is the text to be displayed in the data window when there is no Help
 * currently selected by the Help list window. You can use text codes here to
 * make the text appear more vivid to your players.
 *
 * Default:
 * Welcome to the \c[4]Help Journal\c[0].
 * 
 * Here, you can review over the various
 * Helps given to you by people from all
 * over the world.
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>Welcome to the \c[4]Help Journal\c[0].
 * <br>
 * <br>Here, you can review over the various
 * Helps given to you by people from all
 * over the world.
 *
 * Help Data Format
 * - This format is how the data in the Help data window is shown to your
 * players. You can use various text codes to make your Help data window more
 * vivid to your players. %1 will reference the title without any icons or
 * color text codes. %2 will reference the Help's difficulty level. %3 will be
 * who the Help is from. %4 will display where the Help is from. %5 will show
 * the Help's current description, which can change midway through the Help.
 * %6 will show the various objectives the player needs to achieve. %7 will
 * show any rewards the player can earn. And if there are any, %8 will show the
 * subtext for the Help.
 *
 * Default:
 * \{%1\}
 * \c[4]Level:\c[0] %2
 * \c[4]From:\c[0] %3
 * \c[4]Location:\c[0] %4
 * 
 * \c[4]Description:\c[0]
 * %5
 * 
 * \c[4]Objectives:\c[0]
 * %6
 * 
 * \c[4]Rewards:\c[0]
 * %7
 * 
 * %8
 *
 * Word Wrap Version (Requires YEP_MessageCore.js):
 * <WordWrap>\{%1\}
 * <br>\c[4]Level:\c[0] %2
 * <br>\c[4]From:\c[0] %3
 * <br>\c[4]Location:\c[0] %4
 * <br>
 * <br>\c[4]Description:\c[0]
 * <br>%5
 * <br>
 * <br>\c[4]Objectives:\c[0]
 * <br>%6
 * <br>
 * <br>\c[4]Rewards:\c[0]
 * <br>%7
 * <br>
 * <br>%8
 *
 * Uncleared Objective
 * - This is the text format that appears for each objective that is neither
 * completed nor failed. %1 will be replaced with the objective's text.
 * Default: \i[160]%1
 * 
 * Completed Objective
 * - If an objective is completed, this text format will be used instead.
 * %1 will be replaced with the objective's text.
 * Default: \i[165]%1
 *
 * Failed Objective
 * - If an objective is failed, this text format will be used instead.
 * %1 will be replaced with the objective's text.
 * Default: \i[162]%1
 *
 * Unclaimed Reward
 * - This is the text format that appears for each reward item that is neither
 * claimed nor denied. %1 will be replaced with the reward's text.
 * Default: \i[160]%1
 *
 * Claimed Reward
 * - If a reward has been claimed, this text format will be used instead.
 * %1 will be replaced with the reward's text.
 * Default: \i[163]%1
 *
 * Denied Reward
 * - If a reward has been denied, this text format will be used instead.
 * %1 will be replaced with the reward's text.
 * Default: \i[161]%1
 *
 * Load Delay
 * - This is the amount of frames the data window will wait before loading a
 * Help's data onto the window itself. This is to prevent overburdening the
 * game engine by loading every single Help that the cursor passes through,
 * and instead, waits until the cursor has settled on a particular Help entry
 * for x amount of frames before loading it.
 * Default: 30
 *
 * ---
 *
 * Window Settings
 * - If you wish to customize the category window, you can adjust the various
 * settings here to adjust its properties. However, keep in mind that unless
 * you are familiar with JavaScript, you can make errors here that can make the
 * windows not work in your game.
 *
 * X: Graphics.boxWidth - width
 * Y: Graphics.boxHeight - height
 * Width: Graphics.boxWidth * 2 / 3
 * Height: Graphics.boxHeight - this.fittingHeight(1)
 * Line Height: 36
 * Font Face: GameFont
 * Font Size: 28
 * Standard Padding: 18
 * Text Padding: 6
 * Standard Opacity: 255
 * Back Opacity: 192
 * Window Skin: Window
 * Scroll Speed: 4
 * 
 * ============================================================================
 * Instructions - Setting Up New Helps
 * ============================================================================
 *
 * By default, there aren't any Helps made for you. You must set each one up
 * manually. Go into the plugin parameters for YEP_HelpJournal.js and look for
 * the ---Help List--- section. Each of those entries starts off empty.
 * However, if you decide to modify it, you'll be greeted with a template that
 * explains how to set up your Helps. Here is what each parameter does:
 *
 * ---
 *
 * Title
 * - This is the title of your Help. It will show up in three places: the
 * Help list, the Help title window, and if you format it to show in the data
 * window, it will appear there as well. You can use text codes to change the
 * color of the Help or to give the Help icons.
 *
 * Type
 * - This is the Help type. If you decide to show Help types from the list
 * window, this will be where this Help will be listed under. The template has
 * a drop down window for a few of the popular Help types, but you can enter
 * in your own Help type. Keep in mind that this is case sensitive and will
 * require you to type out the Help type correctly. You can, however, omit any
 * \i[x] or \c[x] text codes.
 *
 * Difficulty
 * - No mechanical purpose. It's just there to label a certain difficulty level
 * for the Help. You can insert any kind of text you wish here and it will be
 * displayed in the Help data window if you decide to keep it in there.
 *
 * From
 * - No mechanical purpose. This can be used to state which character in your
 * game issued this Help so the player can have a reference point in knowing
 * who to return to when it becomes time to deliver the Help results.
 *
 * Location
 * - No mechanical purpose. This can be used to state where the Help has
 * originated from, and can reduce the amount of effort the player needs to in
 * order to figure out where the Help came from.
 *
 * Description
 * - No mechanical purpose. This is often used to describe the contents of the
 * Help to the player and provide a set of general instructions as to what the
 * player has to actually do. You can provide multiple descriptions. However,
 * only the first description will be visible by default. If you do provide
 * multiple descriptions, you can change the entry using the plugin command:
 * 'Help x Change Description Entry To y' to alter the description entry to
 * display something else midway through a Help.
 *
 * Objectives List
 * - No mechanical purpose to the game but does have mechanical aspects. The
 * objectives list is commonly used to display a specific set of instructions
 * the player needs to do in order to complete the Help. Multiple sets of
 * objectives can be displayed to indicate multiple objectives that need to be
 * fulfilled by the player.
 *
 * Visible Objectives
 * - This is a list of the set of objectives that will be visible by default
 * when the Help is added to the game's Help journal. Each number entry in
 * there refers to the objective ID (their order position) found in the
 * 'Objectives List' plugin parameter.
 *
 * Rewards List
 * - No mechanical purpose to the game but does have mechanical aspects. The
 * rewards list is to show what the player has to gain as a result of finishing
 * the Help. Multiple sets of rewards can be displayed to indicate the player
 * will receive more than just one type of reward.
 *
 * Visible Rewards
 * - This is a list of the set of rewards that will be visible by default when
 * the Help is added to the game's Help journal. Each number entry in there
 * refers to the reward ID (their order position) found in the 'Rewards List'
 * plugin parameter.
 *
 * Subtext
 * - No mechanical purpose. This is usually used as a footer to provide the
 * player a message that doesn't fit elsewhere in the data window. You can use
 * this however you like or don't use it at all. Multiple sets of subtexts can
 * be used here in case you wish to update the subtext midway through a Help.
 *
 * ============================================================================
 * Main Menu Manager - Positioning the Help Journal Command
 * ============================================================================
 *
 * For those using the Main Menu Manager and would like to position the Help
 * command in a place you'd like, use the following format:
 *
 *       Name: Yanfly.Param.HelpCmdName
 *     Symbol: Help
 *       Show: $gameSystem.isShowHelp()
 *    Enabled: $gameSystem.isEnableHelp()
 *        Ext: 
 *  Main Bind: this.commandHelp.bind(this)
 * Actor Bind: 
 *
 * Insert the above setup within a Main Menu Manager slot. Provided you copy
 * the exact settings to where you need it, it will appear there while using
 * all of the naming, enabling, disabling, hiding, and showing effects done by
 * the plugin parameters.
 *
 * Remember to turn off 'Auto Place Command' from the plugin parameters.
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * For this plugin, you can use various script calls for certain events to make
 * checks on a Help's progress. Here are the different event types and the
 * various script calls you can use with them:
 *
 *
 * --- Control Variables Event's Script Calls ---
 *
 *
 * $gameSystem.totalHelpsAvailable()
 * - Sets the variable's value to the number of available Helps.
 *
 * $gameSystem.totalHelpsCompleted()
 * - Sets the variable's value to the number of completed Helps.
 *
 * $gameSystem.totalHelpsFailed()
 * - Sets the variable's value to the number of failed Helps.
 *
 * $gameSystem.totalHelpsKnown()
 * - Sets the variable's value to the total number of Helps known.
 *
 * $gameSystem.totalHelpsInGame()
 * - Sets the variable's value to the total number of Helps in the game.
 *
 * $gameSystem.totalHelpTypes(category, type)
 * - Replace 'category' with either 'available', 'completed', 'failed', or
 * 'all' to designate the category. Replace 'type' with the Help type
 * (ie. 'Main Helps', 'Side Helps', 'Character Helps', etc). Include the
 * quotes around the category and type
 * Example: $gameSystem.totalHelpTypes('all', 'Main Helps')
 *
 * $gameSystem.getHelpDescriptionIndex(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show which description is being used currently.
 * Example: $gameSystem.getHelpDescriptionIndex(50)
 *
 * $gameSystem.totalVisibleHelpObjectives(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show how many Help objectives are visible currently for
 * the selected Help.
 * Example: $gameSystem.totalVisibleHelpObjectives(50)
 *
 * $gameSystem.totalHelpObjectives(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show how many Help objectives are total for the
 * selected Help's settings.
 * Example: $gameSystem.totalHelpObjectives(50)
 *
 * $gameSystem.totalVisibleHelpRewards(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show how many Help rewards are visible currently for
 * the selected Help.
 * Example: $gameSystem.totalVisibleHelpRewards(50)
 *
 * $gameSystem.totalHelpRewards(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show how many Help rewards are total for the selected
 * Help's settings.
 * Example: $gameSystem.totalHelpRewards(50)
 *
 * $gameSystem.getHelpSubtextIndex(HelpId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. This will
 * set the variable to show which subtext is being used currently.
 * Example: $gameSystem.getHelpSubtextIndex(50)
 *
 *
 * --- Conditional Branch Event's Script Calls ---
 *
 * 
 * $gameSystem.isHelpObjectiveCompleted(HelpId, objectiveId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is completed (true) or not (false).
 * Example: $gameSystem.isHelpObjectiveCompleted(50, 1)
 *
 * $gameSystem.isHelpObjectiveFailed(HelpId, objectiveId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is failed (true) or not (false).
 * Example: $gameSystem.isHelpObjectiveFailed(50, 1)
 *
 * $gameSystem.isHelpObjectiveUncleared(HelpId, objectiveId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'objectiveId' with the ID of the objective you're intending to check. This
 * will make a check in the conditional branch's script call to see if an
 * objective's status is neither completed nor failed (true) or either (false).
 * Example: $gameSystem.isHelpObjectiveUncleared(50, 1)
 * 
 * $gameSystem.isHelpRewardClaimed(HelpId, rewardId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is claimed (true) or not (false).
 * Example: $gameSystem.isHelpRewardClaimed(50, 1)
 * 
 * $gameSystem.isHelpRewardDenied(HelpId, rewardId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is denied (true) or not (false).
 * Example: $gameSystem.isHelpRewardDenied(50, 1)
 * 
 * $gameSystem.isHelpRewardUnclaimed(HelpId, rewardId)
 * - Replace 'HelpId' with the ID of the Help you're looking for. Replace
 * 'rewardId' with the ID of the reward you're intending to check. This will
 * make a check in the conditional branch's script call to see if a reward's
 * status is neither claimed nor denied (true) or either (false).
 * Example: $gameSystem.isHelpRewardUnclaimed(50, 1)
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * There are various plugin commands you can use to control the Help journal
 * system in your game.
 *
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * Plugin Commands:
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 *
 *   Help Journal Open
 *   - Opens the Help journal system menu with no Help selected.
 *
 *   Help Journal Open To x
 *   - Replace 'x' with the Help ID you wish to open the Help journal system
 *   to. If the Help isn't known to the player at the time this plugin command
 *   takes place, then the Help will be added to the player's Help journal.
 *
 *   ---
 *
 *   Help Journal Show
 *   Help Journal Hide
 *   - Show or hide the Help Journal option from the main menu.
 *
 *   Help Journal Enable
 *   Help Journal Disable
 *   - Enable or disable the Help Journal option in the main menu.
 *
 *   ---
 *
 *   Help Add x
 *   - Replace 'x' with an integer. Adds Help ID 'x' to the Help journal as
 *   an available Help. This will make it viewable from the in-game Help
 *   journal system menu.
 *
 *   Help Add x to y
 *   - Replace 'x' and 'y' with integer values determining the Help ID range
 *   you wish to add in mass amounts to the Help journal.
 *
 *   Help Add x, x, x
 *   - Replace 'x' values with integer values representing the Help ID's you
 *   wish to add to the Help journal.
 *
 *   ---
 *
 *   Help Remove x
 *   - Replace 'x' with an integer. This will remove Help ID 'x' from the
 *   Help journal.
 *
 *   Help Remove x to y
 *   - Replace 'x' and 'y' with integer values determining the Help ID range
 *   you wish to remove in mass amounts from the Help journal.
 *
 *   Help Remove x, x, x
 *   - Replace 'x' values with integer values representing the Help ID's you
 *   wish to remove from the Help journal.
 *
 *   ---
 *
 *   Help Set Completed x
 *   Help Set Failed x
 *   Help Set Available x
 *   - Replace 'x' with the Help ID you wish to change the Help status to
 *   'completed', 'failed', or 'available'.
 *
 *   Help Set Completed x to y
 *   Help Set Failed x to y
 *   Help Set Available x to y
 *   - Replace 'x' and 'y' with integer values determining the Help ID range
 *   you wish to set as completed, failed, or available.
 *
 *   Help Set Completed x, x, x
 *   Help Set Failed x, x, x
 *   Help Set Available x, x, x
 *   - Replace 'x' values with integer values representing the Help ID's you
 *   wish to set as completed, failed, or available.
 *
 *   ---
 *
 *   Help x Change Description Entry To y
 *   - Replace 'x' with the Help ID you want to modify the description of.
 *   Replace 'y' with the description entry ID you wish to change the Help to.
 *   This will make the description, when viewed in-game in the Help journal,
 *   to display the description entry ID 'y' found in the plugin parameters for
 *   Help 'x'. This is used for times you wish to update the description text
 *   midway through a Help.
 *
 *   ---
 *
 *   Help x Show Objective y
 *   Help x Hide Objective y
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' with the objective ID you wish to make visible/hidden. Helps
 *   can show multiple objectives at once.
 *
 *   Help x Show Objective y to z
 *   Help x Hide Objective y to z
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' and 'z' with the objective ID range you wish to make
 *   visible/hidden. Helps can show multiple objectives at once.
 *
 *   Help x Show Objective y, y, y
 *   Help x Hide Objective y, y, y
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' values with integer values representing the objective ID's you
 *   wish to make visible/hidden. Helps can show multiple objectives at once.
 *
 *   Help X Show All Objectives
 *   Help X Hide All Objectives
 *   - Replace 'x' with the Help ID you wish to alter the objectives of.
 *   This will show/hide all of the Help's objectives.
 *
 *   Help x Complete Objective y
 *   Help x Fail Objective y
 *   Help x Normalize Objective y
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' with the objective ID you wish to change the status of.
 *   Using 'Complete' will mark the objective as completed. Using 'Fail' will
 *   mark the objective as failed. Using 'Normalize' will set the objective's
 *   status to neither completed or failed.
 *
 *   Help x Complete Objective y to z
 *   Help x Fail Objective y to z
 *   Help x Normalize Objective y to z
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' and 'z' with the objective ID range you wish to change the
 *   status of. Using 'Complete' will mark the objective as completed. Using
 *   'Fail' will mark the objective as failed. Using 'Normalize' will set the
 *   objective's status to neither completed or failed.
 *
 *   Help x Complete Objective y, y, y
 *   Help x Fail Objective y, y, y
 *   Help x Normalize Objective y, y, y
 *   - Replace 'x' with the Help ID you wish to alter the objective of.
 *   Replace 'y' values with integer values representing the objective ID's you
 *   wish to change the status of. Using 'Complete' will mark the objective as
 *   completed. Using 'Fail' will mark the objective as failed. Using
 *   'Normalize' will set the objective's status to neither completed or
 *   failed.
 *
 *   Help x Complete All Objectives
 *   Help x Fail All Objectives
 *   Help x Normalize All Objectives
 *   - Replace 'x' with the Help ID you wish to alter the objectives of.
 *   This will complete/fail/normalize all of the Help's objectives.
 *
 *   ---
 *
 *   Help x Show Reward y
 *   Help x Hide Reward y
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' with the reward ID you wish to make visible/hidden. Helps can show
 *   multiple reward at once.
 *
 *   Help x Show Reward y to z
 *   Help x Hide Reward y to z
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' and 'z' with the reward ID range you wish to make visible/hidden.
 *   Helps can show multiple reward at once.
 *
 *   Help x Show Reward y, y, y
 *   Help x Hide Reward y, y, y
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' values with integer values representing the reward ID's you wish to
 *   make visible/hidden. Helps can show multiple reward at once.
 *
 *   Help x Show All Rewards
 *   Help x Hide All Rewards
 *   - Replace 'x' with the Help ID you wish to alter the rewards of. This
 *   will show/hide all of the Help's rewards.
 *
 *   Help x Claim Reward y
 *   Help x Deny Reward y
 *   Help x Normalize Reward y
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' with the reward ID you wish to change the status of. Using 'Claim'
 *   will mark the reward as claimed. Using 'Deny' will mark the reward as
 *   denied. Using 'Normalize' will set the reward's status to neither claimed
 *   or denied.
 *
 *   Help x Claim Reward y to z
 *   Help x Deny Reward y to z
 *   Help x Normalize Reward y to z
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' and 'z' with the reward ID range you wish to change the status of.
 *   Using 'Claim' will mark the reward as claimed. Using 'Deny' will mark the
 *   reward as denied. Using 'Normalize' will set the reward's status to
 *   neither claimed or denied.
 *
 *   Help x Claim Reward y, y, y
 *   Help x Deny Reward y, y, y
 *   Help x Normalize Reward y, y, y
 *   - Replace 'x' with the Help ID you wish to alter the reward of. Replace
 *   'y' values with integer values representing the reward ID you wish to
 *   change the status of. Using 'Claim' will mark the reward as claimed. Using
 *   'Deny' will mark the reward as denied. Using 'Normalize' will set the
 *   reward's status to neither claimed or denied.
 *
 *   Help x Claim All Rewards
 *   Help x Deny All Rewards
 *   Help x Normalize All Rewards
 *   - Replace 'x' with the Help ID you wish to alter the rewards of. This
 *   will claim/deny/normalize all of the Help's rewards.
 *
 *   ---
 *
 *   Help x Change Subtext Entry To y
 *   - Replace 'x' with the Help ID you want to modify the subtext of. Replace
 *   'y' with the subtext entry ID you wish to change the Help to. This will
 *   make the subtext, when viewed in-game in the Help journal, to display the
 *   subtext entry ID 'y' found in the plugin parameters for Help 'x'. This is
 *   used for times you wish to update the subtext text midway through a Help.
 *
 *   ---
 *
 * ============================================================================
 * Instructions - Lunatic Mode
 * ============================================================================
 *
 * The plugin parameter 'Lunatic Mode' is made for users who are familiar with
 * JavaScript. These parameters allow you to add additional lines of code to
 * their respective functions whenever the respective Help journal function
 * occurs in-game. The timing for them will occur after the function occurred
 * and only if it was successful in delivering a change.
 *
 *   ---
 *
 *   Before Create Windows
 *   After Create Windows
 *   Close Help Menu
 *
 *   ---
 *
 *   Help Add
 *   Help Remove
 *   Help Complete
 *   Help Fail
 *   Help Available
 *
 *   ---
 *
 *   Change Description
 *
 *   ---
 *
 *   Show Objective
 *   Hide Objective
 *   Complete Objective
 *   Fail Objective
 *   Normalize Objective
 *
 *   ---
 *
 *   Show Reward
 *   Hide Reward
 *   Claim Reward
 *   Deny Reward
 *   Normalize Reward
 *
 *   ---
 *
 *   Change Subtext
 *
 *   ---
 *
 * There are a few rules to note. The code for each of those plugin functions
 * will only run if it meets these rules:
 *
 *   1. The code will run for each Help or Help property changed. This means
 *      that if you used a plugin command that alters a group of Helps or
 *      Help properties at once, the code will run multiple times individually
 *      for each Help or Help property.
 *
 *   2. The code will only run if there has been successful changes to a Help
 *      or Help property. For example, if a Help is already set to 'Failed',
 *      running the plugin command to fail that Help again will not trigger
 *      the Lunatic Mode code to run again.
 *
 *   3. When a Help is first added, any default properties added to the Help
 *      will not trigger the Lunatic Mode to run. For example, if the Help
 *      being added has objectives 1 and 2 already visible from the start, then
 *      the Lunatic Mode code will not run for 1 and 2.
 *
 * Make sure you understand these rules so that you know what governs whether
 * or not the custom code runs.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Fixed some bugs regarding certain plugin commands not working properly.
 *
 * Version 1.00:
 * - Finished Plugin!
 *
 * ============================================================================
 * End of Help
 * ============================================================================
 *
 * @param ---Main Menu---
 * @default
 *
 * @param Help Command
 * @parent ---Main Menu---
 * @desc This is the text used for the main menu command
 * @default Help
 *
 * @param Show Command
 * @parent ---Main Menu---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the Help command in the main menu by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Enable Command
 * @parent ---Main Menu---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Synthesis command in the main menu by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Auto Place Command
 * @parent ---Main Menu---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Allow this plugin to decide the menu placement position?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Help Menu---
 * @default
 *
 * @param Help Category Window
 * @parent ---Help Menu---
 * @type struct<CategoryWindow>
 * @desc Adjust the properties for the Help category window here.
 * @default {"---Categories---":"","Category Order":"[\"available\",\"completed\",\"failed\",\"all\"]","Available Text":"\\i[192]Available (%1)","Completed Text":"\\i[191]Completed (%1)","Failed Text":"\\i[194]Failed (%1)","All Text":"\\i[189]All Helps (%1)","Cancel Text":"\\i[161]Close","---Window Settings---":"","X":"0","Y":"0","Width":"Graphics.boxWidth / 3","Height":"this.fittingHeight(this.numVisibleRows())","Rows":"4","Columns":"1","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"left","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Help List Window
 * @parent ---Help Menu---
 * @type struct<ListWindow>
 * @desc Adjust the properties for the Help list window here.
 * @default {"---Types---":"","Show Types":"true","Type Order":"[\"\\\\c[6]Main Helps\",\"\\\\c[4]Side Helps\",\"\\\\c[3]Character Helps\",\"\\\\c[5]Tutorial Helps\"]","List Open Symbol":"-","List Closed Symbol":"+","Type Text Format":"%1%2 (%3)","Help Indent":"0","Show Empty":"false","Read Help":"\\i[121]Read Help","Cancel":"\\i[16]Cancel","---Window Settings---":"","X":"0","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth / 3","Height":"Graphics.boxHeight - this.fittingHeight(4)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Type Alignment":"left","Help Alignment":"left","Window Skin":"Window"}
 *
 * @param Help Title Window
 * @parent ---Help Menu---
 * @type struct<TitleWindow>
 * @desc Adjust the properties for the Help title window here.
 * @default {"---Window Settings---":"","No Help Title":"\\c[4]Help Journal","X":"Graphics.boxWidth - width","Y":"0","Width":"Graphics.boxWidth * 2 / 3","Height":"this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"center","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
 *
 * @param Help Data Window
 * @parent ---Help Menu---
 * @type struct<DataWindow>
 * @desc Adjust the properties for the Help data window here.
 * @default {"---Data Settings---":"","No Data Text":"\"Welcome to the \\\\c[4]Help Journal\\\\c[0].\\n\\nHere, you can review over the various\\nHelps given to you by people from all\\nover the world.\"","Help Data Format":"\"<WordWrap>\\\\{%1\\\\}\\n<br>\\\\c[4]Level:\\\\c[0] %2\\n<br>\\\\c[4]From:\\\\c[0] %3\\n<br>\\\\c[4]Location:\\\\c[0] %4\\n<br>\\n<br>\\\\c[4]Description:\\\\c[0]\\n<br>%5\\n<br>\\n<br>\\\\c[4]Objectives:\\\\c[0]\\n<br>%6\\n<br>\\n<br>\\\\c[4]Rewards:\\\\c[0]\\n<br>%7\\n<br>\\n<br>%8\"","Uncleared Objective":"\\i[160]%1","Completed Objective":"\\i[165]%1","Failed Objective":"\\i[162]%1","Unclaimed Reward":"\\i[160]%1","Claimed Reward":"\\i[163]%1","Denied Reward":"\\i[161]%1","Load Delay":"30","---Window Settings---":"","X":"Graphics.boxWidth - width","Y":"Graphics.boxHeight - height","Width":"Graphics.boxWidth * 2 / 3","Height":"Graphics.boxHeight - this.fittingHeight(1)","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window","Scroll Speed":"4"}
 *
 * @param Lunatic Mode
 * @parent ---Help Menu---
 * @type struct<LunaticMode>
 * @desc Add custom code to each of the plugin's major functions.
 * @default {"---Help Menu---":"","Before Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\\n//\\n// background.bitmap = ImageManager.loadTitle1(\\\"Book\\\");\\n// this.fitScreen(background);\"","After Create Windows":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","Close Help Menu":"\"// Variables\\n//   background - background image used for the menu\\n//   windowLayer - sprite layer that contains all windows\"","---Help Status---":"","Help Add":"\"// Variables:\\n//   HelpId - ID of the Help being added\\n//\\n// console.log('Help ' + HelpId + ' successfully added!')\"","Help Remove":"\"// Variables:\\n//   HelpId - ID of the Help being removed\\n//\\n// console.log('Help ' + HelpId + ' successfully removed!')\"","Help Complete":"\"// Variables:\\n//   HelpId - ID of the Help set to completed\\n//\\n// console.log('Help ' + HelpId + ' status changed to Completed!')\"","Help Fail":"\"// Variables:\\n//   HelpId - ID of the Help set to failed\\n//\\n// console.log('Help ' + HelpId + ' status changed to Failed!')\"","Help Available":"\"// Variables:\\n//   HelpId - ID of the Help set to available\\n//\\n// console.log('Help ' + HelpId + ' status changed to Available!')\"","---Description---":"","Change Description":"\"// Variables:\\n//   HelpId - ID of the Help whose description is changed\\n//   index - Description index being changed to\\n//\\n// console.log('Help ' + HelpId + ' description index changed to ' + index)\"","---Objectives---":"","Show Objective":"\"// Variables:\\n//   HelpId - ID of the Help whose objectives are altered\\n//   objectiveId - ID of the objective being shown\\n//\\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to shown!')\"","Hide Objective":"\"// Variables:\\n//   HelpId - ID of the Help whose objectives are altered\\n//   objectiveId - ID of the objective being hidden\\n//\\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to hidden!')\"","Complete Objective":"\"// Variables:\\n//   HelpId - ID of the Help whose objectives are altered\\n//   objectiveId - ID of the objective being completed\\n//\\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to completed!')\"","Fail Objective":"\"// Variables:\\n//   HelpId - ID of the Help whose objectives are altered\\n//   objectiveId - ID of the objective having failed\\n//\\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to failed!')\"","Normalize Objective":"\"// Variables:\\n//   HelpId - ID of the Help whose objectives are altered\\n//   objectiveId - ID of the objective normalized\\n//\\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to normal!')\"","---Rewards---":"","Show Reward":"\"// Variables:\\n//   HelpId - ID of the Help whose rewards are altered\\n//   rewardId - ID of the reward being shown\\n//\\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' becomes shown!')\"","Hide Reward":"\"// Variables:\\n//   HelpId - ID of the Help whose rewards are altered\\n//   rewardId - ID of the reward being hidden\\n//\\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' becomes hidden!')\"","Claim Reward":"\"// Variables:\\n//   HelpId - ID of the Help whose rewards are altered\\n//   rewardId - ID of the reward becoming claimed\\n//\\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is now claimed!')\"","Deny Reward":"\"// Variables:\\n//   HelpId - ID of the Help whose rewards are altered\\n//   rewardId - ID of the reward becoming denied\\n//\\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is now denied!')\"","Normalize Reward":"\"// Variables:\\n//   HelpId - ID of the Help whose rewards are altered\\n//   rewardId - ID of the reward normalized\\n//\\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is normalized!')\"","---Subtext---":"","Change Subtext":"\"// Variables:\\n//   HelpId - ID of the Help whose subtext is changed\\n//   index - Subtext index being changed to\\n//\\n// console.log('Help ' + HelpId + ' subtext index changed to ' + index)\""}
 *
 * @param ---Help List---
 * @default
 *
 * @param Help 1
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 2
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 3
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 4
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 5
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 6
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 7
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 8
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 9
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 10
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 11
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 12
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 13
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 14
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 15
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 16
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 17
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 18
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 19
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 * 
 * @param Help 20
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 21
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 22
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 23
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 24
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 25
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 26
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 27
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 28
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 29
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 30
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 31
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 32
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 33
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 34
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 35
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 36
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 37
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 38
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 39
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 40
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 41
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 42
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 43
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 44
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 45
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 46
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 47
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 48
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 49
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 50
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 51
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 52
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 53
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 54
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 55
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 56
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 57
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 58
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 59
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 60
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 61
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 62
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 63
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 64
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 65
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 66
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 67
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 68
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 69
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 70
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 71
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 72
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 73
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 74
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 75
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 76
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 77
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 78
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 79
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 80
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 81
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 82
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 83
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 84
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 85
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 86
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 87
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 88
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 89
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 90
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 91
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 92
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 93
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 94
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 95
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 96
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 97
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 98
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 99
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 *
 * @param Help 100
 * @parent ---Help List---
 * @type struct<Help>
 * @desc Modify the data used by this Help entry.
 * Refer to Help for more information about each setting.
 * @default
 */
//=============================================================================
/* Plugin Parameter Structure Settings
 *=============================================================================
 */
/* ----------------------------------------------------------------------------
 * CategoryWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~CategoryWindow:
 * @param ---Categories---
 * @default
 *
 * @param Category Order
 * @parent ---Categories---
 * @type string[]
 * @desc Order list for the Help type categories.
 * Options: available, completed, failed, all, cancel
 * @default ["available","completed","failed","all"]
 *
 * @param Available Text
 * @parent ---Categories---
 * @desc The text used for available Helps.
 * Text codes allowed. %1 - Help Number
 * @default \i[192]Available (%1)
 *
 * @param Completed Text
 * @parent ---Categories---
 * @desc The text used for completed Helps.
 * Text codes allowed. %1 - Help Number
 * @default \i[191]Completed (%1)
 *
 * @param Failed Text
 * @parent ---Categories---
 * @desc The text used for failed Helps.
 * Text codes allowed. %1 - Help Number
 * @default \i[194]Failed (%1)
 *
 * @param All Text
 * @parent ---Categories---
 * @desc The text used for all Helps.
 * Text codes allowed. %1 - Help Number
 * @default \i[189]All Helps (%1)
 *
 * @param Cancel Text
 * @parent ---Categories---
 * @desc The text used for the Close option.
 * Text codes allowed.
 * @default \i[161]Close
 * 
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default 0
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default 0
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @option this.fittingHeight(this.numVisibleRows())
 * @desc Formula for the window height.
 * @default this.fittingHeight(this.numVisibleRows())
 *
 * @param Rows
 * @parent ---Window Settings---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc Formula for the number of window rows.
 * @default 4
 *
 * @param Columns
 * @parent ---Window Settings---
 * @type combo
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @desc Formula for the number of window columns.
 * @default 1
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Text Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the window's text.
 * left     center     right
 * @default left
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * ListWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~ListWindow:
 * @param ---Types---
 * @default
 *
 * @param Show Types
 * @parent ---Types---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Help types in the Help list?
 * @default true
 *
 * @param Type Order
 * @parent ---Types---
 * @type string[]
 * @desc Order list for the Help list types.
 * Name these however you want. Text codes are allowed.
 * @default ["\\c[6]Main Helps","\\c[4]Side Helps","\\c[3]Character Helps","\\c[5]Tutorial Helps"]
 *
 * @param List Open Symbol
 * @parent ---Types---
 * @desc Text indicator to show if a type is opened.
 * Opened types will show all Helps within that Help type.
 * @default -
 *
 * @param List Closed Symbol
 * @parent ---Types---
 * @desc Text indicator to show if a type is closed.
 * Closed types will not show all Helps within that Help type.
 * @default +
 *
 * @param Type Text Format
 * @parent ---Types---
 * @desc Format used to display Help types. Text codes allowed.
 * %1 - Open/Closed   %2 - Type Name   %3 - Help Number
 * @default %1%2 (%3)
 *
 * @param Help Indent
 * @parent ---Types---
 * @number
 * @number 0
 * @desc How many pixels much to indent Helps by.
 * @default 0
 *
 * @param Show Empty
 * @parent ---Types---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Help types that are empty? If not, types
 * without any Helps will be hidden from the list.
 * @default false
 *
 * @param Read Help
 * @parent ---Types---
 * @desc Vocabulary used for the 'Read Help' option.
 * You can use text codes.
 * @default \\i[121]Read Help
 *
 * @param Cancel
 * @parent ---Types---
 * @desc Vocabulary used for the 'Cancel' option.
 * @default \\i[16]Cancel
 * 
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default 0
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default Graphics.boxHeight - this.fittingHeight(4)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Type Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the Help types.
 * left     center     right
 * @default left
 *
 * @param Help Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the Helps themselves.
 * left     center     right
 * @default left
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * TitleWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~TitleWindow:
 * @param ---Window Settings---
 * @default
 *
 * @param No Help Title
 * @parent ---Window Settings---
 * @desc Display this when there's no Help selected.
 * Text codes allowed.
 * @default \\c[4]Help Journal
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default 0
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option this.fittingHeight(1)
 * @option this.fittingHeight(2)
 * @option this.fittingHeight(3)
 * @option this.fittingHeight(4)
 * @option this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default this.fittingHeight(1)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Text Alignment
 * @parent ---Window Settings---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Choose what type of alignment to use for the window's text.
 * left     center     right
 * @default center
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 * 
 */
/* ----------------------------------------------------------------------------
 * DataWindow Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~DataWindow:
 * @param ---Data Settings---
 * @default
 *
 * @param No Data Text
 * @parent ---Data Settings---
 * @type note
 * @desc Text to display when no Help data is available.
 * @default "Welcome to the \\c[4]Help Journal\\c[0].\n\nHere, you can review over the various\nHelps given to you by people from all\nover the world."
 *
 * @param Help Data Format
 * @parent ---Data Settings---
 * @type note
 * @desc %1 - Title, %2 - Difficulty, %3 - From, %4 - Location
 * %5 - Desc, %6 - Objectives, %7 - Rewards, %8 - Subtext
 * @default "\\{%1\\}\n\\c[4]Level:\\c[0] %2\n\\c[4]From:\\c[0] %3\n\\c[4]Location:\\c[0] %4\n\n\\c[4]Description:\\c[0]\n%5\n\n\\c[4]Objectives:\\c[0]\n%6\n\n\\c[4]Rewards:\\c[0]\n%7\n\n%8"
 *
 * @param Uncleared Objective
 * @parent ---Data Settings---
 * @desc Text format for uncleared Help objectives.
 * %1 - Objective Text
 * @default \i[160]%1
 *
 * @param Completed Objective
 * @parent ---Data Settings---
 * @desc Text format for completed Help objectives.
 * %1 - Objective Text
 * @default \i[165]%1
 *
 * @param Failed Objective
 * @parent ---Data Settings---
 * @desc Text format for failed Help objectives.
 * %1 - Objective Text
 * @default \i[162]%1
 *
 * @param Unclaimed Reward
 * @parent ---Data Settings---
 * @desc Text format for unclaimed Help rewards.
 * %1 - Reward Text
 * @default \i[160]%1
 *
 * @param Claimed Reward
 * @parent ---Data Settings---
 * @desc Text format for claimed Help rewards.
 * %1 - Reward Text
 * @default \i[163]%1
 *
 * @param Denied Reward
 * @parent ---Data Settings---
 * @desc Text format for denied Help rewards.
 * %1 - Reward Text
 * @default \i[161]%1
 *
 * @param Load Delay
 * @parent ---Data Settings---
 * @type number
 * @desc Loading time delay for data in frames.
 * This is to prevent overburdening the engine.
 * @default 30
 *
 * @param ---Window Settings---
 * @default
 *
 * @param X
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxWidth - width
 * @desc Formula for the window's X position.
 * @default Graphics.boxWidth - width
 *
 * @param Y
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option Graphics.boxHeight - height
 * @desc Formula for the window's Y position.
 * @default Graphics.boxHeight - height
 *
 * @param Width
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxWidth
 * @option Graphics.boxWidth / 2
 * @option Graphics.boxWidth / 3
 * @option Graphics.boxWidth * 2 / 3
 * @option Graphics.boxWidth / 4
 * @option Graphics.boxWidth * 3 / 4
 * @option Graphics.boxWidth / 5
 * @option Graphics.boxWidth * 4 / 5
 * @desc Formula for the window width.
 * @default Graphics.boxWidth * 2 / 3
 *
 * @param Height
 * @parent ---Window Settings---
 * @type combo
 * @option Graphics.boxHeight - this.fittingHeight(1)
 * @option Graphics.boxHeight - this.fittingHeight(2)
 * @option Graphics.boxHeight - this.fittingHeight(3)
 * @option Graphics.boxHeight - this.fittingHeight(4)
 * @option Graphics.boxHeight - this.fittingHeight(5)
 * @desc Formula for the window height.
 * @default Graphics.boxHeight - this.fittingHeight(1)
 *
 * @param Line Height
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The height used for each line entry.
 * @default 36
 *
 * @param Font Face
 * @parent ---Window Settings---
 * @type combo
 * @option GameFont
 * @option Arial
 * @option Courier New
 * @option SimHei
 * @option Heiti TC
 * @option Dotum
 * @option AppleGothic
 * @desc The font face used for your game.
 * @default GameFont
 *
 * @param Font Size
 * @parent ---Window Settings---
 * @type combo
 * @option 20
 * @option 28
 * @option Window_Base.prototype.standardFontSize.call(this);
 * @desc Formula for the standard font size.
 * @default 28
 *
 * @param Standard Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 10
 * @option 18
 * @option 24
 * @desc Formula for the window's padding.
 * @default 18
 *
 * @param Text Padding
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 6
 * @option 12
 * @desc Formula for the padding used before displaying text.
 * @default 6
 *
 * @param Standard Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the standard opacity used by the window.
 * @default 255
 *
 * @param Back Opacity
 * @parent ---Window Settings---
 * @type combo
 * @option 0
 * @option 128
 * @option 192
 * @option 255
 * @desc Formula for the opacity used by the window.
 * @default 192
 *
 * @param Window Skin
 * @parent ---Window Settings---
 * @type file
 * @dir img/system/
 * @desc Window skin used.
 * @default Window
 *
 * @param Scroll Speed
 * @parent ---Window Settings---
 * @type number
 * @min 1
 * @desc The speed at which the window scrolls when pressing up/down.
 * @default 4
 * 
 */
/* ----------------------------------------------------------------------------
 * LunaticMode Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~LunaticMode:
 * @param ---Help Menu---
 * @default
 *
 * @param Before Create Windows
 * @parent ---Help Menu---
 * @type note
 * @desc This code will run before any of the Help menus
 * are created for the scene.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows\n//\n// background.bitmap = ImageManager.loadTitle1(\"Book\");\n// this.fitScreen(background);"
 *
 * @param After Create Windows
 * @parent ---Help Menu---
 * @type note
 * @desc This code will run after all of the Help menus
 * are created for the scene.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param Close Help Menu
 * @parent ---Help Menu---
 * @type note
 * @desc This code will run when the Help menu is closed.
 * @default "// Variables\n//   background - background image used for the menu\n//   windowLayer - sprite layer that contains all windows"
 *
 * @param ---Help Status---
 * @default 
 * 
 * @param Help Add
 * @parent ---Help Status---
 * @type note
 * @desc This code will run any time a Help is successfully
 * added to the Help Journal.
 * @default "// Variables:\n//   HelpId - ID of the Help being added\n//\n// console.log('Help ' + HelpId + ' successfully added!')"
 *
 * @param Help Remove
 * @parent ---Help Status---
 * @type note
 * @desc This code will run any time a Help is successfully
 * removed the Help Journal.
 * @default "// Variables:\n//   HelpId - ID of the Help being removed\n//\n// console.log('Help ' + HelpId + ' successfully removed!')"
 *
 * @param Help Complete
 * @parent ---Help Status---
 * @type note
 * @desc This code will run any time a Help's status is
 * changed to completed.
 * @default "// Variables:\n//   HelpId - ID of the Help set to completed\n//\n// console.log('Help ' + HelpId + ' status changed to Completed!')"
 *
 * @param Help Fail
 * @parent ---Help Status---
 * @type note
 * @desc This code will run any time a Help's status is
 * changed to failed.
 * @default "// Variables:\n//   HelpId - ID of the Help set to failed\n//\n// console.log('Help ' + HelpId + ' status changed to Failed!')"
 *
 * @param Help Available
 * @parent ---Help Status---
 * @type note
 * @desc This code will run any time a Help's status is
 * changed to available.
 * @default "// Variables:\n//   HelpId - ID of the Help set to available\n//\n// console.log('Help ' + HelpId + ' status changed to Available!')"
 *
 * @param ---Description---
 * @default
 *
 * @param Change Description
 * @parent ---Description---
 * @type note
 * @desc This code will run any time a Help's description
 * has been changed to a particular index.
 * @default "// Variables:\n//   HelpId - ID of the Help whose description is changed\n//   index - Description index being changed to\n//\n// console.log('Help ' + HelpId + ' description index changed to ' + index)"
 *
 * @param ---Objectives---
 * @default
 *
 * @param Show Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a Help's objectives
 * becomes shown.
 * @default "// Variables:\n//   HelpId - ID of the Help whose objectives are altered\n//   objectiveId - ID of the objective being shown\n//\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to shown!')"
 *
 * @param Hide Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a Help's objectives
 * becomes hidden.
 * @default "// Variables:\n//   HelpId - ID of the Help whose objectives are altered\n//   objectiveId - ID of the objective being hidden\n//\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to hidden!')"
 *
 * @param Complete Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a Help's objectives
 * becomes completed.
 * @default "// Variables:\n//   HelpId - ID of the Help whose objectives are altered\n//   objectiveId - ID of the objective being completed\n//\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to completed!')"
 *
 * @param Fail Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a Help's objectives
 * becomes failed.
 * @default "// Variables:\n//   HelpId - ID of the Help whose objectives are altered\n//   objectiveId - ID of the objective having failed\n//\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to failed!')"
 *
 * @param Normalize Objective
 * @parent ---Objectives---
 * @type note
 * @desc This code will run any time a Help's objectives
 * becomes normalized.
 * @default "// Variables:\n//   HelpId - ID of the Help whose objectives are altered\n//   objectiveId - ID of the objective normalized\n//\n// console.log('Help ' + HelpId + ' objective ' + objectiveId + ' changed to normal!')"
 *
 * @param ---Rewards---
 * @default
 *
 * @param Show Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a Help's rewards
 * becomes shown.
 * @default "// Variables:\n//   HelpId - ID of the Help whose rewards are altered\n//   rewardId - ID of the reward being shown\n//\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' becomes shown!')"
 *
 * @param Hide Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a Help's rewards
 * becomes hidden.
 * @default "// Variables:\n//   HelpId - ID of the Help whose rewards are altered\n//   rewardId - ID of the reward being hidden\n//\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' becomes hidden!')"
 *
 * @param Claim Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a Help's rewards
 * is claimed.
 * @default "// Variables:\n//   HelpId - ID of the Help whose rewards are altered\n//   rewardId - ID of the reward becoming claimed\n//\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is now claimed!')"
 *
 * @param Deny Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a Help's rewards
 * is denied.
 * @default "// Variables:\n//   HelpId - ID of the Help whose rewards are altered\n//   rewardId - ID of the reward becoming denied\n//\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is now denied!')"
 *
 * @param Normalize Reward
 * @parent ---Rewards---
 * @type note
 * @desc This code will run any time a Help's rewards
 * is normalized.
 * @default "// Variables:\n//   HelpId - ID of the Help whose rewards are altered\n//   rewardId - ID of the reward normalized\n//\n// console.log('Help ' + HelpId + ' reward ' + rewardId + ' is normalized!')"
 *
 * @param ---Subtext---
 * @default
 *
 * @param Change Subtext
 * @parent ---Subtext---
 * @type note
 * @desc This code will run any time a Help's subtext
 * has been changed to a particular index.
 * @default "// Variables:\n//   HelpId - ID of the Help whose subtext is changed\n//   index - Subtext index being changed to\n//\n// console.log('Help ' + HelpId + ' subtext index changed to ' + index)"
 * 
 */
/* ----------------------------------------------------------------------------
 * Help Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~Help:
 *
 * @param Title
 * @desc Title of the Help.
 * Text codes allowed.
 * @default \i[87]Untitled Help
 *
 * @param Type
 * @parent Title
 * @type combo
 * @option General
 * @option Characters
 * @option Ability Points
 * @option Skills/Magic
 * @desc What type of Help is this?
 * @default Main Helps
 *
 * @param Difficulty
 * @parent Title
 * @desc Difficulty level for this Help.
 * Text codes allowed.
 * @default Easy Peasy
 *
 * @param From
 * @parent Title
 * @desc Insert the name of the NPC who issued this Help.
 * Text codes allowed.
 * @default NPC Name
 *
 * @param Location
 * @parent Title
 * @desc Insert the location of the NPC who issued this Help.
 * Text codes allowed.
 * @default Location Name
 *
 * @param Description
 * @parent Title
 * @type note[]
 * @desc Type out the description used for this Help.
 * Text codes allowed.
 * @default ["\"This is the \\\\c[4]default\\\\c[0] Help description.\"","\"This is the \\\\c[4]default\\\\c[0] Help description.\\n\\nYou can insert multiple description entries in case you\\never want to update the Help description midway while the\\nHelp is in progress.\""]
 *
 * @param Objectives List
 * @type note[]
 * @desc The objectives to be completed for this Help.
 * Text codes allowed.
 * @default ["\"\\\\c[4]First\\\\c[0] objective to be cleared.\"","\"\\\\c[4]Second\\\\c[0] objective, but it's hidden.\"","\"To make other objectives appear,\\nenable them through the \\\\c[4]'Visible\\nObjectives'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param Visible Objectives
 * @parent Objectives List
 * @type number[]
 * @min 1
 * @desc The objectives that are visible from the start.
 * @default ["1"]
 *
 * @param Rewards List
 * @type note[]
 * @desc The reward list for this Help.
 * Text codes allowed.
 * @default ["\"\\\\i[176]Potion x5\"","\"\\\\i[178]Ether x3\"","\"To make other rewards appear,\\nenable them through the \\\\c[4]'Visible\\nRewards'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 * 
 * @param Visible Rewards
 * @parent Rewards List
 * @type number[]
 * @min 1
 * @desc The rewards that are visible from the start.
 * @default ["1"]
 *
 * @param Subtext
 * @type note[]
 * @desc Subtext to be displayed with the Help.
 * @default ["\"\"","\"This is a subtext. It is used as\\nextra text that you may want to\\nplace on your Help journal that\\ndiffers from the description.\""]
 */
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.3.5") {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_HelpJournal');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.HelpCmdName = String(Yanfly.Parameters['Help Command']);
Yanfly.Param.HelpCmdShow = eval(Yanfly.Parameters['Show Command']);
Yanfly.Param.HelpCmdEnable = eval(Yanfly.Parameters['Enable Command']);
Yanfly.Param.HelpCmdPlace = eval(Yanfly.Parameters['Auto Place Command']);

Yanfly.Param.HelpCategoryWindow = 
  JSON.parse(Yanfly.Parameters['Help Category Window']);
Yanfly.Param.HelpListWindow = 
  JSON.parse(Yanfly.Parameters['Help List Window']);
Yanfly.Param.HelpTitleWindow = 
  JSON.parse(Yanfly.Parameters['Help Title Window']);
Yanfly.Param.HelpDataWindow = 
  JSON.parse(Yanfly.Parameters['Help Data Window']);
Yanfly.Help.LunaticMode = 
  JSON.parse(Yanfly.Parameters['Lunatic Mode']);

//=============================================================================
// TouchInput
//=============================================================================

Yanfly.Help.TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
  Yanfly.Help.TouchInput_onMouseMove.call(this, event);
  this._mouseOverX = Graphics.pageToCanvasX(event.pageX);
  this._mouseOverY = Graphics.pageToCanvasY(event.pageY);
};

//=============================================================================
// DataManager
//=============================================================================

var $dataHelps = [null];
Yanfly.Help.totalCount = 0;

DataManager.HelpDatabaseAdd = function(id, data) {
  if (!data) return $dataHelps.push(null);
  data = this.HelpDataFailsafe(id, data);
  var visibleObjectives = JSON.parse(data['Visible Objectives']);
  for (var i = 0; i < visibleObjectives.length; ++i) {
    visibleObjectives[i] = parseInt(visibleObjectives[i]);
  };
  var visibleRewards = JSON.parse(data['Visible Rewards']);
  for (var i = 0; i < visibleRewards.length; ++i) {
    visibleRewards[i] = parseInt(visibleRewards[i]);
  };
  var description = JSON.parse(data['Description']);
  description.unshift('');
  var objectives = JSON.parse(data['Objectives List']);
  objectives.unshift('');
  var rewards = JSON.parse(data['Rewards List']);
  rewards.unshift('');
  var subtext = JSON.parse(data['Subtext']);
  subtext.unshift('');
  var type = data['Type'];
  type = type.replace(/\\I\[(\d+)\]/gi, '').trim();
  type = type.replace(/\\C\[(\d+)\]/gi, '').trim();
  var Help = {
    name: data['Title'],
    id: id,
    type: type,
    difficulty: data['Difficulty'],
    from: data['From'],
    location: data['Location'],
    description: description,
    objectives: objectives,
    visibleObjectives: visibleObjectives,
    rewards: rewards,
    visibleRewards: visibleRewards,
    subtext: subtext,
    note: ''
  };
  $dataHelps[id] = Help;
  Yanfly.Help.totalCount += 1;
};

DataManager.HelpDataFailsafe = function(id, data) {
  if (!data['Title']) data['Title'] = "\\i[87]Unfinished Help";
  if (!data['Type']) data['Type'] = "Main Helps";
  if (!data['Difficulty']) data['Difficulty'] = "Easy Peasy";
  if (!data['From']) data['From'] = "NPC Name";
  if (!data['Location']) data['Location'] = "Location Name";
  if (!data['Description']) data['Description'] = "[\"\\\"\\\"\"]";
  if (data['Description'] === '[]') data['Description'] = "[\"\\\"\\\"\"]";
  if (!data['Objectives List']) data['Objectives List'] = "[\"\\\"\\\"\"]";
  if (data['Objectives List'] === '[]') data['Objectives List'] =
    "[\"\\\"\\\"\"]";
  if (!data['Visible Objectives']) data['Visible Objectives'] = "[\"1\"]";
  if (!data['Rewards List']) data['Rewards List'] = "[\"\\\"\\\"\"]";
  if (data['Rewards List'] === '[]') data['Rewards List'] = "[\"\\\"\\\"\"]";
  if (!data['Visible Rewards']) data['Visible Rewards'] = "[\"1\"]";
  if (!data['Subtext']) data['Subtext'] = "[\"\\\"\\\"\"]";
  if (data['Subtext'] === '[]') data['Subtext'] = "[\"\\\"\\\"\"]";
  return data;
};

DataManager.HelpDatabaseCreate = function() {
  $dataHelps = [null];
  for (var i = 1; i <= 100; ++i) {
    var HelpData = JSON.parse(Yanfly.Parameters['Help ' + i] || 'null');
    if (!HelpData) continue;
    this.HelpDatabaseAdd(i, HelpData);
  };
};

DataManager.HelpDatabaseCreate();

//=============================================================================
// Game_Temp
//=============================================================================

Game_Temp.prototype.reservedHelpOpen = function(HelpId) {
  this._HelpOpen = HelpId;
};

Game_Temp.prototype.getHelpOpen = function() {
  return this._HelpOpen;
};

Game_Temp.prototype.clearHelpOpen = function() {
  this._HelpOpen = undefined;
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.Help.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.Help.Game_System_initialize.call(this);
  this.initHelpSettings();
};

Game_System.prototype.initHelpSettings = function() {
  this._showHelp = this._showHelp || Yanfly.Param.HelpCmdShow;
  this._enableHelp = this._enableHelp || Yanfly.Param.HelpCmdEnable;
  this._HelpsKnown = this._HelpsKnown || [];
  this._HelpsCompleted = this._HelpsCompleted || [];
  this._HelpsFailed = this._HelpsFailed || [];
  this._HelpsDescription = this._HelpsDescription || {};
  this._HelpsObjectives = this._HelpsObjectives || {};
  this._HelpsObjectivesCompleted = this._HelpsObjectivesCompleted || {};
  this._HelpsObjectivesFailed = this._HelpsObjectivesFailed || {};
  this._HelpsRewards = this._HelpsRewards || {};
  this._HelpsRewardsClaimed = this._HelpsRewardsClaimed || {};
  this._HelpsRewardsDenied = this._HelpsRewardsDenied || {};
  this._HelpsSubtext = this._HelpsSubtext || {};
};

Game_System.prototype.isShowHelp = function() {
  this.initHelpSettings();
  return this._showHelp;
};

Game_System.prototype.setShowHelp = function(value) {
  this.initHelpSettings();
  this._showHelp = value;
};

Game_System.prototype.isEnableHelp = function() {
  this.initHelpSettings();
  return this._enableHelp;
};

Game_System.prototype.setEnableHelp = function(value) {
  this.initHelpSettings();
  this._enableHelp = value;
};

Game_System.prototype.getHelpsAvailable = function() {
  this.initHelpSettings();
  var result = [];
  var length = this._HelpsKnown.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = this._HelpsKnown[i];
    if (this._HelpsCompleted.contains(HelpId)) continue;
    if (this._HelpsFailed.contains(HelpId)) continue;
    result.push(HelpId);
  }
  return result;
};

Game_System.prototype.getHelpsCompleted = function() {
  this.initHelpSettings();
  var result = [];
  var length = this._HelpsKnown.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = this._HelpsKnown[i];
    if (this._HelpsCompleted.contains(HelpId)) result.push(HelpId);
  }
  return result;
};

Game_System.prototype.getHelpsFailed = function() {
  this.initHelpSettings();
  var result = [];
  var length = this._HelpsKnown.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = this._HelpsKnown[i];
    if (this._HelpsFailed.contains(HelpId)) result.push(HelpId);
  }
  return result;
};

Game_System.prototype.getAllHelps = function() {
  this.initHelpSettings();
  return this._HelpsKnown;
};

Game_System.prototype.getTypeHelps = function(category, type) {
  this.initHelpSettings();
  category = category || 'all';
  type = type || '';
  var result = [];
  if (category === 'available') {
    var Helps = this.getHelpsAvailable();
  } else if (category === 'completed') {
    var Helps = this.getHelpsCompleted();
  } else if (category === 'failed') {
    var Helps = this.getHelpsFailed();
  } else {
    var Helps = this.getAllHelps();
  }
  var length = Helps.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = Helps[i];
    var HelpData = $dataHelps[HelpId];
    if (!HelpData) continue;
    if (HelpData.type === type) result.push(HelpId);
  }
  return result;
};

Game_System.prototype.getHelpDescriptionIndex = function(HelpId) {
  this.initHelpSettings();
  return this._HelpsDescription[HelpId] || 0;
};

Game_System.prototype.getHelpObjectives = function(HelpId) {
  this.initHelpSettings();
  return this._HelpsObjectives[HelpId] || ['1'];
};

Game_System.prototype.getHelpObjectiveStatus = function(HelpId, objId) {
  this.initHelpSettings();
  this._HelpsObjectivesCompleted[HelpId] =
    this._HelpsObjectivesCompleted[HelpId] || [];
  this._HelpsObjectivesFailed[HelpId] =
    this._HelpsObjectivesFailed[HelpId] || [];
  if (this._HelpsObjectivesCompleted[HelpId].contains(objId)) {
    return 'Completed Objective';
  } else if (this._HelpsObjectivesFailed[HelpId].contains(objId)) {
    return 'Failed Objective';
  } else {
    return 'Uncleared Objective';
  }
};

Game_System.prototype.getHelpRewards = function(HelpId) {
  this.initHelpSettings();
  return this._HelpsRewards[HelpId] || ['1'];
};

Game_System.prototype.getHelpRewardStatus = function(HelpId, objId) {
  this.initHelpSettings();
  if (this._HelpsRewardsClaimed[HelpId].contains(objId)) {
    return 'Claimed Reward';
  } else if (this._HelpsRewardsDenied[HelpId].contains(objId)) {
    return 'Denied Reward';
  } else {
    return 'Unclaimed Reward';
  }
};

Game_System.prototype.getHelpSubtextIndex = function(HelpId) {
  this.initHelpSettings();
  return this._HelpsSubtext[HelpId] || 0;
};

Game_System.prototype.HelpAdd = function(HelpId) {
  this.initHelpSettings();
  if (this._HelpsKnown.contains(HelpId)) return;
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  this._HelpsKnown.push(HelpId);
  this._HelpsKnown.sort(function(a, b) {
    return a - b;
  });
  this._HelpsDescription[HelpId] = 1;
  this._HelpsObjectives[HelpId] = [];
  for (var i = 0; i < HelpData['visibleObjectives'].length; ++i) {
    var value = HelpData['visibleObjectives'][i];
    this._HelpsObjectives[HelpId].push(value);
  }
  this._HelpsObjectivesCompleted[HelpId] = [];
  this._HelpsObjectivesFailed[HelpId] = [];
  this._HelpsRewards[HelpId] = [];
  for (var i = 0; i < HelpData['visibleRewards'].length; ++i) {
    var value = HelpData['visibleRewards'][i];
    this._HelpsRewards[HelpId].push(value);
  }
  this._HelpsRewardsClaimed[HelpId] = [];
  this._HelpsRewardsDenied[HelpId] = [];
  this._HelpsSubtext[HelpId] = 1;
  this.HelpAddCustomEval(HelpId);
};

Yanfly.Help.HelpAdd = 
  JSON.parse(Yanfly.Help.LunaticMode['Help Add']);
Game_System.prototype.HelpAddCustomEval = function(HelpId) {
  eval(Yanfly.Help.HelpAdd);
};

Game_System.prototype.HelpAddRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = range[i];
    this.HelpAdd(HelpId);
  }
};

Game_System.prototype.HelpRemove = function(HelpId) {
  this.initHelpSettings();
  if (!this._HelpsKnown.contains(HelpId)) return;
  var index = this._HelpsKnown.indexOf(HelpId);
  this._HelpsKnown.splice(index, 1);
  this.HelpRemoveCustomEval(HelpId);
};

Yanfly.Help.HelpRemove = 
  JSON.parse(Yanfly.Help.LunaticMode['Help Remove']);
Game_System.prototype.HelpRemoveCustomEval = function(HelpId) {
  eval(Yanfly.Help.HelpRemove);
};

Game_System.prototype.HelpRemoveRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = range[i];
    this.HelpRemove(HelpId);
  }
};

Game_System.prototype.HelpSetCompleted = function(HelpId) {
  this.initHelpSettings();
  var changed = false;
  if (!this._HelpsKnown.contains(HelpId)) this.HelpAdd(HelpId);
  if (!this._HelpsCompleted.contains(HelpId)) {
    changed = true;
    this._HelpsCompleted.push(HelpId);
    this._HelpsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._HelpsFailed.contains(HelpId)) {
    var index = this._HelpsFailed.indexOf(HelpId);
    this._HelpsFailed.splice(index, 1);
    this._HelpsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpSetCompletedEval(HelpId);
};

Yanfly.Help.HelpSetCompleted = 
  JSON.parse(Yanfly.Help.LunaticMode['Help Complete']);
Game_System.prototype.HelpSetCompletedEval = function(HelpId) {
  eval(Yanfly.Help.HelpSetCompleted);
};

Game_System.prototype.HelpSetCompletedRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = range[i];
    this.HelpSetCompleted(HelpId);
  }
};

Game_System.prototype.HelpSetFailed = function(HelpId) {
  this.initHelpSettings();
  var changed = false;
  if (!this._HelpsKnown.contains(HelpId)) this.HelpAdd(HelpId);
  if (!this._HelpsFailed.contains(HelpId)) {
    changed = true;
    this._HelpsFailed.push(HelpId);
    this._HelpsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._HelpsCompleted.contains(HelpId)) {
    var index = this._HelpsCompleted.indexOf(HelpId);
    this._HelpsCompleted.splice(index, 1);
    this._HelpsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpSetFailedEval(HelpId);
};

Yanfly.Help.HelpSetFailed = 
  JSON.parse(Yanfly.Help.LunaticMode['Help Fail']);
Game_System.prototype.HelpSetFailedEval = function(HelpId) {
  eval(Yanfly.Help.HelpSetFailed);
};

Game_System.prototype.HelpSetFailedRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = range[i];
    this.HelpSetFailed(HelpId);
  }
};

Game_System.prototype.HelpSetAvailable = function(HelpId) {
  this.initHelpSettings();
  var changed = false;
  if (!this._HelpsKnown.contains(HelpId)) this.HelpAdd(HelpId);
  if (this._HelpsCompleted.contains(HelpId)) {
    changed = true;
    var index = this._HelpsCompleted.indexOf(HelpId);
    this._HelpsCompleted.splice(index, 1);
    this._HelpsCompleted.sort(function(a, b) {
      return a - b;
    });
  }
  if (this._HelpsFailed.contains(HelpId)) {
    changed = true;
    var index = this._HelpsFailed.indexOf(HelpId);
    this._HelpsFailed.splice(index, 1);
    this._HelpsFailed.sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpSetAvailableEval(HelpId);
};

Yanfly.Help.HelpSetAvailable = 
  JSON.parse(Yanfly.Help.LunaticMode['Help Available']);
Game_System.prototype.HelpSetAvailableEval = function(HelpId) {
  eval(Yanfly.Help.HelpSetAvailable);
};

Game_System.prototype.HelpSetAvailableRange = function(range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = range[i];
    this.HelpSetAvailable(HelpId);
  }
};

Game_System.prototype.HelpChangeDescriptionIndex = function(HelpId, index) {
  this.initHelpSettings();
  this._HelpsDescription[HelpId] = index;
  this.HelpChangeDescIndexEval(HelpId, index);
};

Yanfly.Help.HelpChangeDescriptionIndex = 
  JSON.parse(Yanfly.Help.LunaticMode['Change Description']);
Game_System.prototype.HelpChangeDescIndexEval = function(HelpId, index) {
  eval(Yanfly.Help.HelpChangeDescriptionIndex);
};

Game_System.prototype.HelpObjectivesShow = function(HelpId, objectiveId) {
  this.initHelpSettings();
  this._HelpsObjectives[HelpId] = this._HelpsObjectives[HelpId] || [];
  if (this._HelpsObjectives[HelpId].contains(objectiveId)) return;
  this._HelpsObjectives[HelpId].push(objectiveId);
  this._HelpsObjectives[HelpId].sort(function(a, b) {
    return a - b;
  });
  this.HelpObjectivesShowEval(HelpId, objectiveId);
};

Yanfly.Help.HelpObjectivesShow = 
  JSON.parse(Yanfly.Help.LunaticMode['Show Objective']);
Game_System.prototype.HelpObjectivesShowEval = function(HelpId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Help.HelpObjectivesShow);
};

Game_System.prototype.HelpObjectivesShowRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.HelpObjectivesShow(HelpId, objId);
  }
};

Game_System.prototype.HelpObjectivesShowAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.HelpObjectivesShow(HelpId, i);
  }
};

Game_System.prototype.HelpObjectivesHide = function(HelpId, objectiveId) {
  this.initHelpSettings();
  this._HelpsObjectives[HelpId] = this._HelpsObjectives[HelpId] || [];
  if (!this._HelpsObjectives[HelpId].contains(objectiveId)) return;
  var index = this._HelpsObjectives[HelpId].indexOf(objectiveId);
  this._HelpsObjectives[HelpId].splice(index, 1);
  this._HelpsObjectives[HelpId].sort(function(a, b) {
    return a - b;
  });
  this.HelpObjectivesHideEval(HelpId, objectiveId);
};

Yanfly.Help.HelpObjectivesHide = 
  JSON.parse(Yanfly.Help.LunaticMode['Hide Objective']);
Game_System.prototype.HelpObjectivesHideEval = function(HelpId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Help.HelpObjectivesHide);
};

Game_System.prototype.HelpObjectivesHideRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.HelpObjectivesHide(HelpId, objId);
  }
};

Game_System.prototype.HelpObjectivesHideAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.HelpObjectivesHide(HelpId, i);
  }
};

Game_System.prototype.HelpObjectivesNormal = function(HelpId, objectiveId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsObjectivesCompleted[HelpId] = 
    this._HelpsObjectivesCompleted[HelpId] || [];
  if (this._HelpsObjectivesCompleted[HelpId].contains(objectiveId)) {
    changed = true;
    var index = this._HelpsObjectivesCompleted[HelpId].indexOf(objectiveId);
    this._HelpsObjectivesCompleted[HelpId].splice(index, 1);
    this._HelpsObjectivesCompleted[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  if (this._HelpsObjectivesFailed[HelpId].contains(objectiveId)) {
    changed = true;
    var index = this._HelpsObjectivesFailed[HelpId].indexOf(objectiveId);
    this._HelpsObjectivesFailed[HelpId].splice(index, 1);
    this._HelpsObjectivesFailed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this.HelpObjectivesNormalEval(HelpId, objectiveId);
};

Yanfly.Help.HelpObjectivesNormal = 
  JSON.parse(Yanfly.Help.LunaticMode['Normalize Objective']);
Game_System.prototype.HelpObjectivesNormalEval = function(HelpId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Help.HelpObjectivesNormal);
};

Game_System.prototype.HelpObjectivesNormalRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.HelpObjectivesNormal(HelpId, objId);
  }
};

Game_System.prototype.HelpObjectivesNormalAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.HelpObjectivesNormal(HelpId, i);
  }
};

Game_System.prototype.HelpObjectivesComplete = function(HelpId, objectiveId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsObjectivesCompleted[HelpId] = 
    this._HelpsObjectivesCompleted[HelpId] || [];
  if (!this._HelpsObjectivesCompleted[HelpId].contains(objectiveId)) {
    changed = true;
    this._HelpsObjectivesCompleted[HelpId].push(objectiveId);
    this._HelpsObjectivesCompleted[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this._HelpsObjectivesFailed[HelpId] = 
    this._HelpsObjectivesFailed[HelpId] || [];
  if (this._HelpsObjectivesFailed[HelpId].contains(objectiveId)) {
    var index = this._HelpsObjectivesFailed[HelpId].indexOf(objectiveId);
    this._HelpsObjectivesFailed[HelpId].splice(index, 1);
    this._HelpsObjectivesFailed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this.HelpObjectivesCompleteEval(HelpId, objectiveId);
};

Yanfly.Help.HelpObjectivesComplete = 
  JSON.parse(Yanfly.Help.LunaticMode['Complete Objective']);
Game_System.prototype.HelpObjectivesCompleteEval = function(HelpId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Help.HelpObjectivesComplete);
};

Game_System.prototype.HelpObjectivesCompleteRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.HelpObjectivesComplete(HelpId, objId);
  }
};

Game_System.prototype.HelpObjectivesCompleteAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.HelpObjectivesComplete(HelpId, i);
  }
};

Game_System.prototype.HelpObjectivesFail = function(HelpId, objectiveId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsObjectivesFailed[HelpId] = 
    this._HelpsObjectivesFailed[HelpId] || [];
  if (!this._HelpsObjectivesFailed[HelpId].contains(objectiveId)) {
    changed = true;
    this._HelpsObjectivesFailed[HelpId].push(objectiveId);
    this._HelpsObjectivesFailed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this._HelpsObjectivesCompleted[HelpId] = 
    this._HelpsObjectivesCompleted[HelpId] || [];
  if (this._HelpsObjectivesCompleted[HelpId].contains(objectiveId)) {
    var index = this._HelpsObjectivesCompleted[HelpId].indexOf(objectiveId);
    this._HelpsObjectivesCompleted[HelpId].splice(index, 1);
    this._HelpsObjectivesCompleted[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpObjectivesFailEval(HelpId, objectiveId);
};

Yanfly.Help.HelpObjectivesFail = 
  JSON.parse(Yanfly.Help.LunaticMode['Fail Objective']);
Game_System.prototype.HelpObjectivesFailEval = function(HelpId, obj) {
  var objectiveId = obj;
  eval(Yanfly.Help.HelpObjectivesFail);
};

Game_System.prototype.HelpObjectivesFailRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var objId = parseInt(range[i]);
    this.HelpObjectivesFail(HelpId, objId);
  }
};

Game_System.prototype.HelpObjectivesFailAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.objectives.length;
  for (var i = 1; i < length; ++i) {
    this.HelpObjectivesFail(HelpId, i);
  }
};

Game_System.prototype.HelpRewardsShow = function(HelpId, rewardId) {
  this.initHelpSettings();
  this._HelpsRewards[HelpId] = this._HelpsRewards[HelpId] || [];
  if (this._HelpsRewards[HelpId].contains(rewardId)) return;
  this._HelpsRewards[HelpId].push(rewardId);
  this._HelpsRewards[HelpId].sort(function(a, b) {
    return a - b;
  });
  this.HelpRewardsShowEval(HelpId, rewardId);
};

Yanfly.Help.HelpRewardsShow = 
  JSON.parse(Yanfly.Help.LunaticMode['Show Reward']);
Game_System.prototype.HelpRewardsShowEval = function(HelpId, rewardId) {
  eval(Yanfly.Help.HelpRewardsShow);
};

Game_System.prototype.HelpRewardsShowRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.HelpRewardsShow(HelpId, rewardId);
  }
};

Game_System.prototype.HelpRewardsShowAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.HelpRewardsShow(HelpId, i);
  }
};

Game_System.prototype.HelpRewardsHide = function(HelpId, rewardId) {
  this.initHelpSettings();
  this._HelpsRewards[HelpId] = this._HelpsRewards[HelpId] || [];
  if (!this._HelpsRewards[HelpId].contains(rewardId)) return;
  var index = this._HelpsRewards[HelpId].indexOf(rewardId);
  this._HelpsRewards[HelpId].splice(index, 1);
  this._HelpsRewards[HelpId].sort(function(a, b) {
    return a - b;
  });
  this.HelpRewardsHideEval(HelpId, rewardId);
};

Yanfly.Help.HelpRewardsHide = 
  JSON.parse(Yanfly.Help.LunaticMode['Hide Reward']);
Game_System.prototype.HelpRewardsHideEval = function(HelpId, rewardId) {
  eval(Yanfly.Help.HelpRewardsHide);
};

Game_System.prototype.HelpRewardsHideRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.HelpRewardsHide(HelpId, rewardId);
  }
};

Game_System.prototype.HelpRewardsHideAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.HelpRewardsHide(HelpId, i);
  }
};

Game_System.prototype.HelpRewardsNormal = function(HelpId, rewardId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsRewardsClaimed[HelpId] = 
    this._HelpsRewardsClaimed[HelpId] || [];
  if (this._HelpsRewardsClaimed[HelpId].contains(rewardId)) {
    changed = true;
    var index = this._HelpsRewardsClaimed[HelpId].indexOf(rewardId);
    this._HelpsRewardsClaimed[HelpId].splice(index, 1);
    this._HelpsRewardsClaimed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this._HelpsRewardsDenied[HelpId] = 
    this._HelpsRewardsDenied[HelpId] || [];
  if (this._HelpsRewardsDenied[HelpId].contains(rewardId)) {
    changed = true;
    var index = this._HelpsRewardsDenied[HelpId].indexOf(rewardId);
    this._HelpsRewardsDenied[HelpId].splice(index, 1);
    this._HelpsRewardsDenied[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpRewardsNormalEval(HelpId, rewardId);
};

Yanfly.Help.HelpRewardsNormal = 
  JSON.parse(Yanfly.Help.LunaticMode['Normalize Reward']);
Game_System.prototype.HelpRewardsNormalEval = function(HelpId, rewardId) {
  eval(Yanfly.Help.HelpRewardsNormal);
};

Game_System.prototype.HelpRewardsNormalRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.HelpRewardsNormal(HelpId, rewardId);
  }
};

Game_System.prototype.HelpRewardsNormalAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.HelpRewardsNormal(HelpId, i);
  }
};

Game_System.prototype.HelpRewardsClaim = function(HelpId, rewardId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsRewardsClaimed[HelpId] = 
    this._HelpsRewardsClaimed[HelpId] || [];
  if (!this._HelpsRewardsClaimed[HelpId].contains(rewardId)) {
    changed = true;
    this._HelpsRewardsClaimed[HelpId].push(rewardId);
    this._HelpsRewardsClaimed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this._HelpsRewardsDenied[HelpId] = 
    this._HelpsRewardsDenied[HelpId] || [];
  if (this._HelpsRewardsDenied[HelpId].contains(rewardId)) {
    var index = this._HelpsRewardsDenied[HelpId].indexOf(rewardId);
    this._HelpsRewardsDenied[HelpId].splice(index, 1);
    this._HelpsRewardsDenied[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpRewardsClaimEval(HelpId, rewardId);
};

Yanfly.Help.HelpRewardsClaim = 
  JSON.parse(Yanfly.Help.LunaticMode['Claim Reward']);
Game_System.prototype.HelpRewardsClaimEval = function(HelpId, rewardId) {
  eval(Yanfly.Help.HelpRewardsClaim);
};

Game_System.prototype.HelpRewardsClaimRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.HelpRewardsClaim(HelpId, rewardId);
  }
};

Game_System.prototype.HelpRewardsClaimAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.HelpRewardsClaim(HelpId, i);
  }
};

Game_System.prototype.HelpRewardsDeny = function(HelpId, rewardId) {
  this.initHelpSettings();
  var changed = false;
  this._HelpsRewardsDenied[HelpId] = 
    this._HelpsRewardsDenied[HelpId] || [];
  if (!this._HelpsRewardsDenied[HelpId].contains(rewardId)) {
    changed = true;
    this._HelpsRewardsDenied[HelpId].push(rewardId);
    this._HelpsRewardsDenied[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  this._HelpsRewardsClaimed[HelpId] = 
    this._HelpsRewardsClaimed[HelpId] || [];
  if (this._HelpsRewardsClaimed[HelpId].contains(rewardId)) {
    var index = this._HelpsRewardsClaimed[HelpId].indexOf(rewardId);
    this._HelpsRewardsClaimed[HelpId].splice(index, 1);
    this._HelpsRewardsClaimed[HelpId].sort(function(a, b) {
      return a - b;
    });
  }
  if (changed) this.HelpRewardsDenyEval(HelpId, rewardId);
};

Yanfly.Help.HelpRewardsDeny = 
  JSON.parse(Yanfly.Help.LunaticMode['Deny Reward']);
Game_System.prototype.HelpRewardsDenyEval = function(HelpId, rewardId) {
  eval(Yanfly.Help.HelpRewardsDeny);
};

Game_System.prototype.HelpRewardsDenyRange = function(HelpId, range) {
  var length = range.length;
  for (var i = 0; i < length; ++i) {
    var rewardId = parseInt(range[i]);
    this.HelpRewardsDeny(HelpId, rewardId);
  }
};

Game_System.prototype.HelpRewardsDenyAll = function(HelpId) {
  this.initHelpSettings();
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return;
  var length = HelpData.rewards.length;
  for (var i = 1; i < length; ++i) {
    this.HelpRewardsDeny(HelpId, i);
  }
};

Game_System.prototype.HelpChangeSubtextIndex = function(HelpId, index) {
  this.initHelpSettings();
  this._HelpsSubtext[HelpId] = index;
  this.HelpChangeSubtextIndexEval(HelpId, index);
};

Yanfly.Help.HelpChangeSubtextIndexEval = 
  JSON.parse(Yanfly.Help.LunaticMode['Change Subtext']);
Game_System.prototype.HelpChangeSubtextIndexEval = function(HelpId, index) {
  eval(Yanfly.Help.HelpChangeSubtextIndexEval);
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Game_System Script Calls
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Game_System.prototype.totalHelpsAvailable = function() {
  return this.getHelpsAvailable().length;
};

Game_System.prototype.totalHelpsCompleted = function() {
  return this.getHelpsCompleted().length;
};

Game_System.prototype.totalHelpsFailed = function() {
  return this.getHelpsFailed().length;
};

Game_System.prototype.totalHelpsKnown = function() {
  return this.getAllHelps().length;
};

Game_System.prototype.totalHelpsInGame = function() {
  return Yanfly.Help.totalCount;
};

Game_System.prototype.totalHelpTypes = function(category, type) {
  return this.getTypeHelps(category, type).length;
};

Game_System.prototype.totalVisibleHelpObjectives = function(HelpId) {
  return this.getHelpObjectives(HelpId).length;
};

Game_System.prototype.totalHelpObjectives = function(HelpId) {
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return 0;
  return HelpData.objectives.length;
};

Game_System.prototype.totalVisibleHelpRewards = function(HelpId) {
  return this.getHelpRewards(HelpId).length;
};

Game_System.prototype.totalHelpRewards = function(HelpId) {
  var HelpData = $dataHelps[HelpId];
  if (!HelpData) return 0;
  return HelpData.rewards.length;
};

Game_System.prototype.isHelpObjectiveCompleted = function(HelpId, objId) {
  if (this._HelpsObjectivesCompleted[HelpId]) {
    return this._HelpsObjectivesCompleted[HelpId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isHelpObjectiveFailed = function(HelpId, objId) {
  if (this._HelpsObjectivesFailed[HelpId]) {
    return this._HelpsObjectivesFailed[HelpId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isHelpObjectiveUncleared = function(HelpId, objId) {
  if (this._HelpsKnown.contains(HelpId)) {
    return !this.isHelpObjectiveCompleted(HelpId, objId) &&
      !this.isHelpObjectiveFailed(HelpId, objId)
  } else {
    return false;
  }
};

Game_System.prototype.isHelpRewardClaimed = function(HelpId, objId) {
  if (this._HelpsRewardsClaimed[HelpId]) {
    return this._HelpsRewardsClaimed[HelpId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isHelpRewardDenied = function(HelpId, objId) {
  if (this._HelpsRewardsDenied[HelpId]) {
    return this._HelpsRewardsDenied[HelpId].contains(objId);
  } else {
    return false;
  }
};

Game_System.prototype.isHelpRewardUnclaimed = function(HelpId, objId) {
  if (this._HelpsKnown.contains(HelpId)) {
    return !this.isHelpRewardClaimed(HelpId, objId) &&
      !this.isHelpRewardDenied(HelpId, objId)
  } else {
    return false;
  }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.Help.Game_Interpreter_pluginCommand =
  Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.Help.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'OpenHelpJournal') {
    SceneManager.push(Scene_Help);
  } else if (command === 'Help') {
    this.processHelpPluginCommands(this.argsToString(args));
  }
};

Game_Interpreter.prototype.argsToString = function(args) {
  var str = '';
  var length = args.length;
  for (var i = 0; i < length; ++i) {
    str += args[i] + ' ';
  }
  return str.trim();
};

Game_Interpreter.prototype.parseNumericRange = function(str) {
  if (str.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
    var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
      parseInt(RegExp.$2));
  } else {
    var range = str.split(',');
    var length = range.length;
    for (var i = 0; i < length; ++i) {
      range[i] = parseInt(range[i]);
    }
  }
  return range;
};

Game_Interpreter.prototype.processHelpPluginCommands = function(line) {
  if (line.match(/EVAL[ ](.*)/i)) {
    eval(RegExp.$1);

  } else if (line.match(/JOURNAL OPEN TO[ ](\d+)/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpAdd(HelpId);
    $gameTemp.reservedHelpOpen(HelpId);
    SceneManager.push(Scene_Help);
  } else if (line.match(/JOURNAL OPEN/i)) {
    SceneManager.push(Scene_Help);

  } else if (line.match(/JOURNAL SHOW/i)) {
    $gameSystem.setShowHelp(true);
  } else if (line.match(/JOURNAL HIDE/i)) {
    $gameSystem.setShowHelp(false);
  } else if (line.match(/JOURNAL ENABLE/i)) {
    $gameSystem.setEnableHelp(true);
  } else if (line.match(/JOURNAL DISABLE/i)) {
    $gameSystem.setEnableHelp(false);

  } else if (line.match(/SET COMPLETED[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.HelpSetCompletedRange(range);
  } else if (line.match(/SET FAILED[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.HelpSetFailedRange(range);
  } else if (line.match(/SET AVAILABLE[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.HelpSetAvailableRange(range);

  } else if (line.match(/(\d+)[ ]CHANGE DESCRIPTION ENTRY TO[ ](\d+)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var value = parseInt(RegExp.$2);
    $gameSystem.HelpChangeDescriptionIndex(HelpId, value);

  } else if (line.match(/(\d+)[ ]SHOW OBJECTIVE[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpObjectivesShowRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]SHOW ALL OBJECTIVE/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpObjectivesShowAll(HelpId);
  } else if (line.match(/(\d+)[ ]HIDE OBJECTIVE[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpObjectivesHideRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]HIDE ALL OBJECTIVE/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpObjectivesHideAll(HelpId);
  } else if (line.match(/(\d+)[ ]NORMALIZE OBJECTIVE[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpObjectivesNormalRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]NORMALIZE ALL OBJECTIVE/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpObjectivesNormalAll(HelpId);
  } else if (line.match(/(\d+)[ ]COMPLETE OBJECTIVE[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpObjectivesCompleteRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]COMPLETE ALL OBJECTIVE/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpObjectivesCompleteAll(HelpId);
  } else if (line.match(/(\d+)[ ]FAIL OBJECTIVE[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpObjectivesFailRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]FAIL ALL OBJECTIVE/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpObjectivesFailAll(HelpId);

  } else if (line.match(/(\d+)[ ]SHOW REWARD[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpRewardsShowRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]SHOW ALL REWARD/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpRewardsShowAll(HelpId);
  } else if (line.match(/(\d+)[ ]HIDE REWARD[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpRewardsHideRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]HIDE ALL REWARD/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpRewardsHideAll(HelpId);
  } else if (line.match(/(\d+)[ ]NORMALIZE REWARD[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpRewardsNormalRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]NORMALIZE ALL REWARD/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpRewardsNormalAll(HelpId);
  } else if (line.match(/(\d+)[ ]CLAIM REWARD[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpRewardsClaimRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]CLAIM ALL REWARD/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpRewardsClaimAll(HelpId);
  } else if (line.match(/(\d+)[ ]DENY REWARD[ ](.*)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var range = this.parseNumericRange(String(RegExp.$2));
    $gameSystem.HelpRewardsDenyRange(HelpId, range);
  } else if (line.match(/(\d+)[ ]DENY ALL REWARD/i)) {
    var HelpId = parseInt(RegExp.$1);
    $gameSystem.HelpRewardsDenyAll(HelpId);

  } else if (line.match(/(\d+)[ ]CHANGE SUBTEXT ENTRY TO[ ](\d+)/i)) {
    var HelpId = parseInt(RegExp.$1);
    var value = parseInt(RegExp.$2);
    $gameSystem.HelpChangeSubtextIndex(HelpId, value);

  } else if (line.match(/ADD[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.HelpAddRange(range);

  } else if (line.match(/REMOVE[ ](.*)/i)) {
    var range = this.parseNumericRange(String(RegExp.$1));
    $gameSystem.HelpRemoveRange(range);

  }
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Yanfly.Help.Window_MenuCommand_addOriginalCommands =
  Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
  Yanfly.Help.Window_MenuCommand_addOriginalCommands.call(this);
  this.addHelpCommand();
};

Window_MenuCommand.prototype.addHelpCommand = function() {
  if (!Yanfly.Param.HelpCmdPlace) return;
  if (!$gameSystem.isShowHelp()) return;
  if (this.findSymbol('Help') > -1) return;
  var text = Yanfly.Param.HelpCmdName;
  var enabled = $gameSystem.isEnableHelp();
  this.addCommand(text, 'Help', enabled);
};

//=============================================================================
// Window_HelpData
//=============================================================================

function Window_HelpData() {
  this.initialize.apply(this, arguments);
};

Window_HelpData.prototype = Object.create(Window_Selectable.prototype);
Window_HelpData.prototype.constructor = Window_HelpData;

Window_HelpData.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  this._allTextHeight = 0;
  this._countdown = 0;
  this._arrowBlinkTimer = 0;
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this.setHelpId(0);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_HelpData.prototype.settings = function(key) {
  return Yanfly.Param.HelpDataWindow[key];
};

Window_HelpData.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_HelpData.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_HelpData.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_HelpData.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_HelpData.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_HelpData.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_HelpData.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_HelpData.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_HelpData.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_HelpData.prototype.delayLoadFrames = function() {
  if (this._delayLoad === undefined) {
    this._delayLoad = Math.round(eval(this.settings('Load Delay')));
  }
  return this._delayLoad;
};

Window_HelpData.prototype.setHelpId = function(id) {
  if (this._HelpId !== id) {
    this._HelpId = id;
    this._countdown = 30;
    this.refresh();
  }
};

Window_HelpData.prototype.refresh = function() {
  if (this._countdown > 0) return;
  this.contents.clear();
  this._lastOriginY = -200;
  this.origin.y = 0;
  this._allTextHeight = 0;
  if (this._HelpId > 0) {
    this.drawHelpData();
  } else {
    this.drawEmpty();
  }
};

Window_HelpData._HelpNoDataFmt = 
  JSON.parse(Yanfly.Param.HelpDataWindow['No Data Text'] || "");

Window_HelpData.prototype.drawEmpty = function() {
  var fmt = Window_HelpData._HelpNoDataFmt;
  var wordwrap = fmt.match(/<(?:WordWrap)>/i);
  var text = fmt.format();
  var textState = { index: 0 };
  textState.originalText = text;
  textState.text = this.convertEscapeCharacters(text);
  this.resetFontSettings();
  this._allTextHeight = this.calcTextHeight(textState, true);
  this._allTextHeight *= (wordwrap) ? 10 : 1;
  this.createContents();
  this.drawHelpTextEx(text, 0, 0);
};

Window_HelpData.prototype.drawHelpData = function() {
  Window_HelpData._HelpDataFmt = 
    JSON.parse(Yanfly.Param.HelpDataWindow['Help Data Format'] || "");
  var HelpData = $dataHelps[this._HelpId];
  if (!HelpData) return;
  var fmt = Window_HelpData._HelpDataFmt;
  var wordwrap = fmt.match(/<(?:WordWrap)>/i);
  var title = HelpData.name;
  title = title.replace(/\\I\[(\d+)\]/gi, '').trim();
  title = title.replace(/\\C\[(\d+)\]/gi, '').trim();
  var difficulty = HelpData.difficulty;
  var from = HelpData.from;
  var location = HelpData.location;
  var description = this.getHelpDescription();
  var objectives = this.getHelpObjectives(wordwrap);
  var rewards = this.getHelpRewards(wordwrap);
  var subtext = this.getHelpSubtext();
  var text = fmt.format(title, difficulty, from, location, description,
    objectives, rewards, subtext);
  var textState = { index: 0 };
  textState.originalText = text;
  textState.text = this.convertEscapeCharacters(text);
  this.resetFontSettings();
  this._allTextHeight = this.calcTextHeight(textState, true);
  this._allTextHeight *= (wordwrap) ? 10 : 1;
  this.createContents();
  this.drawHelpTextEx(text, 0, 0);
};

Window_HelpData.prototype.drawHelpTextEx = function(text, x, y) {
  if (text) {
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    this.resetFontSettings();
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    this._allTextHeight = textState.y - y + this.lineHeight();
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_HelpData.prototype.getHelpDescription = function() {
  var HelpData = $dataHelps[this._HelpId];
  var index = $gameSystem.getHelpDescriptionIndex(this._HelpId);
  return JSON.parse(HelpData.description[index]);
};

Window_HelpData.prototype.getHelpObjectives = function(wordwrap) {
  var HelpData = $dataHelps[this._HelpId];
  var lineData = HelpData.objectives;
  var visibleObjectives = $gameSystem.getHelpObjectives(this._HelpId);
  var length = visibleObjectives.length;
  var text = '';
  for (var i = 0; i < length; ++i) {
    if (i > 0) text += wordwrap ? '<br>' : '\n';
    var objectiveId = visibleObjectives[i];
    var key = $gameSystem.getHelpObjectiveStatus(this._HelpId, objectiveId);
    var fmt = this.settings(key);
    text += fmt.format(JSON.parse(lineData[objectiveId]));
  }
  return text;
};

Window_HelpData.prototype.getHelpRewards = function(wordwrap) {
  var HelpData = $dataHelps[this._HelpId];
  var lineData = HelpData.rewards;
  var visibleRewards = $gameSystem.getHelpRewards(this._HelpId);
  var length = visibleRewards.length;
  var text = '';
  for (var i = 0; i < length; ++i) {
    if (i > 0) text += wordwrap ? '<br>' : '\n';
    var rewardId = visibleRewards[i];
    var key = $gameSystem.getHelpRewardStatus(this._HelpId, rewardId);
    var fmt = this.settings(key);
    text += fmt.format(JSON.parse(lineData[rewardId]));
  }
  return text;
};

Window_HelpData.prototype.getHelpSubtext = function() {
  var HelpData = $dataHelps[this._HelpId];
  var index = $gameSystem.getHelpSubtextIndex(this._HelpId);
  return JSON.parse(HelpData.subtext[index]);
};

Window_HelpData.prototype.select = function(index) {
};

Window_HelpData.prototype.contentsHeight = function() {
  var standard = this.height - this.standardPadding() * 2;
  return Math.max(standard, this._allTextHeight);
};

Window_HelpData.prototype.update = function() {
  Window_Selectable.prototype.update.call(this);
  this.updateCountdown();
  if (this.isOpenAndActive()) this.updateKeyScrolling();
};

Window_HelpData.prototype.updateCountdown = function() {
  if (this._countdown > 0) {
    this._countdown -= 1;
    if (this._countdown <= 0) this.refresh();
  }
};

Window_HelpData.prototype.scrollSpeed = function() {
  if (this._scrollSpeed === undefined) {
    this._scrollSpeed = Number(this.settings('Scroll Speed'));
  }
  return this._scrollSpeed;
};

Window_HelpData.prototype.scrollOriginDown = function(speed) {
  var value = this.contentsHeight() - this.height + 
    this.standardPadding() * 2;
  this.origin.y = Math.min(value, this.origin.y + speed);
};

Window_HelpData.prototype.scrollOriginUp = function(speed) {
  this.origin.y = Math.max(0, this.origin.y - speed);
};

Window_HelpData.prototype.updateKeyScrolling = function() {
  if (Input.isPressed('up')) {
    this.scrollOriginUp(this.scrollSpeed());
  } else if (Input.isPressed('down')) {
    this.scrollOriginDown(this.scrollSpeed());
  } else if (Input.isPressed('pageup')) {
    this.scrollOriginUp(this.scrollSpeed() * 4);
  } else if (Input.isPressed('pagedown')) {
    this.scrollOriginDown(this.scrollSpeed() * 4);
  }
};

Window_HelpData.prototype.updateArrows = function() {
  if (this._lastOriginY === this.origin.y) return;
  this.showArrows();
};

Window_HelpData.prototype.showArrows = function() {
  this._lastOriginY = this.origin.y;
  this.upArrowVisible = this.origin.y !== 0;
  this.downArrowVisible = this.origin.y !== this.contentsHeight() -
    this.height + this.standardPadding() * 2;
};

Window_HelpData.prototype.hideArrows = function() {
  this.upArrowVisible = false;
  this.downArrowVisible = false;
};

Window_HelpData.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_HelpData.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) {
    this.scrollOriginDown(this.scrollSpeed() * 4);
  }
  if (TouchInput.wheelY <= -threshold) {
    this.scrollOriginUp(this.scrollSpeed() * 4);
  }
};

//=============================================================================
// Window_HelpTitle
//=============================================================================

function Window_HelpTitle() {
  this.initialize.apply(this, arguments);
};

Window_HelpTitle.prototype = Object.create(Window_Base.prototype);
Window_HelpTitle.prototype.constructor = Window_HelpTitle;

Window_HelpTitle.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  Window_Base.prototype.initialize.call(this, x, y, width, height);
  this.setText(this.settings('No Help Title'));
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_HelpTitle.prototype.settings = function(key) {
  return Yanfly.Param.HelpTitleWindow[key];
};

Window_HelpTitle.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_HelpTitle.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_HelpTitle.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_HelpTitle.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_HelpTitle.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_HelpTitle.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_HelpTitle.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_HelpTitle.prototype.itemTextAlign = function() {
    return this.settings('Text Alignment')
};

Window_HelpTitle.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_HelpTitle.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_HelpTitle.prototype.setText = function(text) {
  if (this._text !== text) {
    this._text = text;
    this.refresh();
  }
};

Window_HelpTitle.prototype.refresh = function() {
  this.contents.clear();
  var align = this.settings('Text Alignment');
  var wx = 0;
  var ww = this.contents.width;
  if (align === 'left') {
    wx = this.textPadding();
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(this._text)) / 2;
  } else {
    wx += ww - this.textWidthEx(this._text) - this.textPadding();
  }
  this.drawTextEx(this._text, wx, 0);
};

Window_HelpTitle.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

//=============================================================================
// Window_HelpCategories
//=============================================================================

function Window_HelpCategories() {
  this.initialize.apply(this, arguments);
};

Window_HelpCategories.prototype = Object.create(Window_Command.prototype);
Window_HelpCategories.prototype.constructor = Window_HelpCategories;

Window_HelpCategories.prototype.initialize = function() {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  Window_Command.prototype.initialize.call(this, x, y);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
};

Window_HelpCategories.prototype.settings = function(key) {
  return Yanfly.Param.HelpCategoryWindow[key];
};

Window_HelpCategories.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_HelpCategories.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_HelpCategories.prototype.numVisibleRows = function() {
  if (this._windowRows === undefined) {
    this._windowRows = Math.round(eval(this.settings('Rows')));
  }
  return this._windowRows;
};

Window_HelpCategories.prototype.maxCols = function() {
  if (this._windowColumns === undefined) {
    this._windowColumns = Math.round(eval(this.settings('Columns')));
  }
  return this._windowColumns;
};

Window_HelpCategories.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_HelpCategories.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_HelpCategories.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_HelpCategories.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_HelpCategories.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_HelpCategories.prototype.itemTextAlign = function() {
    return this.settings('Text Alignment')
};

Window_HelpCategories.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_HelpCategories.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_HelpCategories.prototype.makeCommandList = function() {
  var list = JSON.parse(this.settings('Category Order'));
  var length = list.length;
  for (var i = 0; i < length; ++i) {
    var listItem = list[i];
    switch (listItem) {
    case 'available':
      var fmt = this.settings('Available Text');
      var number = $gameSystem.totalHelpsAvailable();
      break;
    case 'completed':
      var fmt = this.settings('Completed Text');
      var number = $gameSystem.totalHelpsCompleted();
      break;
    case 'failed':
      var fmt = this.settings('Failed Text');
      var number = $gameSystem.totalHelpsFailed();
      break;
    case 'all':
      var fmt = this.settings('All Text');
      var number = $gameSystem.totalHelpsKnown();
      break;
    case 'cancel':
      var text = this.settings('Cancel Text');
      this.addCommand(text, 'cancel');
      continue;
      break;
    }
    number = Yanfly.Util.toGroup(number);
    var text = fmt.format(number);
    this.addCommand(text, 'category', true, listItem);
  }
};

Window_HelpCategories.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var text = this.commandName(index);
  var align = this.settings('Text Alignment');
  var wx = 0;
  var ww = rect.width;
  if (align === 'left') {
    wx = rect.x;
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(text)) / 2;
  } else {
    wx += ww - this.textWidthEx(text) - this.textPadding();
  }
  this.drawTextEx(text, wx, rect.y);
};

Window_HelpCategories.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

Window_HelpCategories.prototype.setListWindow = function(win) {
  this._listWindow = win;
};

Window_HelpCategories.prototype.update = function() {
  Window_Command.prototype.update.call(this);
  if (this._listWindow) this._listWindow.setCategoryType(this.currentExt());
};

Window_HelpCategories.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_HelpCategories.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) this.scrollDown();
  if (TouchInput.wheelY <= -threshold) this.scrollUp();
};

//=============================================================================
// Window_HelpList
//=============================================================================

function Window_HelpList() {
  this.initialize.apply(this, arguments);
};

Window_HelpList.prototype = Object.create(Window_Command.prototype);
Window_HelpList.prototype.constructor = Window_HelpList;

Window_HelpList.prototype.initialize = function(cw, dw, tw) {
  this._currentCategory =
    JSON.parse(Yanfly.Param.HelpCategoryWindow['Category Order'])[0];
  this._closedHelpTypes = [];
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = Math.round(eval(this.settings('X')));
  var y = Math.round(eval(this.settings('Y')));
  this._dataWindow = dw;
  this._titleWindow = tw;
  this._mode = 'Help';
  Window_Command.prototype.initialize.call(this, x, y);
  cw.setListWindow(this);
  this.opacity = Math.round(eval(this.settings('Standard Opacity')));
  this.deselect();
  this.deactivate();
};

Window_HelpList.prototype.settings = function(key) {
  return Yanfly.Param.HelpListWindow[key];
};

Window_HelpList.prototype.windowWidth = function() {
  if (this._windowWidth === undefined) {
    this._windowWidth = Math.round(eval(this.settings('Width')));
  }
  return this._windowWidth;
};

Window_HelpList.prototype.windowHeight = function() {
  if (this._windowHeight === undefined) {
    this._windowHeight = Math.round(eval(this.settings('Height')));
  }
  return this._windowHeight;
};

Window_HelpList.prototype.maxCols = function() {
  return 1;
};

Window_HelpList.prototype.lineHeight = function() {
  if (this._windowLineHeight === undefined) {
    this._windowLineHeight = parseInt(this.settings('Line Height'));
  }
  return this._windowLineHeight;
};

Window_HelpList.prototype.standardFontFace = function() {
  if (this._windowFontFace === undefined) {
    this._windowFontFace = this.settings('Font Face');
  }
  return this._windowFontFace;
};

Window_HelpList.prototype.standardFontSize = function() {
  if (this._windowFontSize === undefined) {
    this._windowFontSize = Math.round(eval(this.settings('Font Size')));
  }
  return this._windowFontSize;
};

Window_HelpList.prototype.standardPadding = function() {
  if (this._windowStandardPadding === undefined) {
    this._windowStandardPadding = 
      Math.round(eval(this.settings('Standard Padding')));
  }
  return this._windowStandardPadding;
};

Window_HelpList.prototype.textPadding = function() {
  if (this._windowTextPadding === undefined) {
    this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
  }
  return this._windowTextPadding;
};

Window_HelpList.prototype.standardBackOpacity = function() {
  if (this._windowBackOpacity === undefined) {
    this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
  }
  return this._windowBackOpacity;
};

Window_HelpList.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
};

Window_HelpList.prototype.itemTextAlign = function() {
    return this.settings('Help Alignment')
};

Window_HelpList.prototype.drawItem = function(index) {
  var rect = this.itemRectForText(index);
  var text = this.commandName(index);
  var symbol = this.commandSymbol(index);
  this.changePaintOpacity(this.isCommandEnabled(index));
  if (symbol === 'type') {
    var align = this.settings('Type Alignment');
  } else {
    var align = this.settings('Help Alignment');
    var indent = parseInt(this.settings('Help Indent'));
    rect.x += indent;
    rect.width -= indent;
  }
  var wx = 0;
  var ww = rect.width;
  if (align === 'left') {
    wx = rect.x;
  } else if (align === 'center') {
    wx += (ww - this.textWidthEx(text)) / 2;
  } else {
    wx += ww - this.textWidthEx(text) - this.textPadding();
  }
  this.drawTextEx(text, wx, rect.y);
};

Window_HelpList.prototype.textWidthEx = function(text) {
  return this.drawTextEx(text, 0, this.contents.height);
};

Window_HelpList.prototype.setCategoryType = function(category) {
  if (this._currentCategory !== category) {
    this._currentCategory = category;
    this.refresh();
    this.resetScroll();
    this.deselect();
    this.update();
  }
};

Window_HelpList.prototype.showType = function() {
  if (this._settingsShowType === undefined) {
    this._settingsShowType = Math.round(eval(this.settings('Show Types')));
  }
  return this._settingsShowType;
};

Window_HelpList.prototype.showEmptyTypes = function() {
  if (this._showEmpty === undefined) {
    this._showEmpty = eval(this.settings('Show Empty'));
  }
  return this._showEmpty;
};

Window_HelpList.prototype.setMode = function(mode) {
  if (mode === 'Extra') {
    this._prevTopRow = this.topRow();
    this._prevIndex = this.index();
    this._forcedExt = this.currentExt();
    this.setTopRow(0);
  } else {
    this._forcedExt = undefined;
  }
  this._mode = mode;
  this.refresh();
  this.activate();
  if (mode === 'Extra') {
    this.select(0);
  } else {
    this.select(this._prevIndex);
    this.setTopRow(this._prevTopRow);
  }
};

Window_HelpList.prototype.currentExt = function() {
  return this._forcedExt || Window_Command.prototype.currentExt.call(this);
};

Window_HelpList.prototype.makeCommandList = function() {
  if (this._mode === 'Help') {
    this.makeHelpList();
  } else {
    this.makeExtraList();
  }
};

Window_HelpList.prototype.makeHelpList = function() {
  if (this.showType()) {
    var list = JSON.parse(this.settings('Type Order'));
    var length = list.length;
    for (var i = 0; i < length; ++i) {
      var listItem = list[i];
      var fmt = this.settings('Type Text Format');
      var type = listItem.replace(/\\I\[(\d+)\]/gi, '').trim();
      var type = listItem.replace(/\\C\[(\d+)\]/gi, '').trim();
      if (this._closedHelpTypes.contains(type)) {
        var closed = this.settings('List Closed Symbol');
      } else {
        var closed = this.settings('List Open Symbol');
      }
      var number = $gameSystem.getTypeHelps(this._currentCategory,
        type).length;
      if (!this.showEmptyTypes() && number <= 0) continue;
      number = Yanfly.Util.toGroup(number);
      var text = fmt.format(closed, listItem, number);
      this.addCommand(text, 'type', true, type);
      if (!this._closedHelpTypes.contains(type)) {
        this.addHelpCommands(this._currentCategory, type);
      }
    }
  } else {
    this.addHelpCommands(this._currentCategory)
  }
};

Window_HelpList.prototype.makeExtraList = function() {
  this.addReadHelpCommand();
  this.makeExtraListA();
  this.makeExtraListB();
  this.makeExtraListC();
  this.makeExtraListD();
  this.makeExtraListE();
  this.makeExtraListF();
  this.addCancelCommand();
};

Window_HelpList.prototype.addReadHelpCommand = function() {
  var text = this.settings('Read Help') || '\\i[121]Read Help';
  this.addCommand(text, 'readHelp');
};

Window_HelpList.prototype.addCancelCommand = function() {
  var text = this.settings('Cancel') || '\\i[16]Cancel';
  this.addCommand(text, 'cancel');
};

Window_HelpList.prototype.makeExtraListA = function() {
};

Window_HelpList.prototype.makeExtraListB = function() {
};

Window_HelpList.prototype.makeExtraListC = function() {
};

Window_HelpList.prototype.makeExtraListD = function() {
};

Window_HelpList.prototype.makeExtraListE = function() {
};

Window_HelpList.prototype.makeExtraListF = function() {
};

Window_HelpList.prototype.addHelpCommands = function(category, type) {
  category = category || this._currentCategory;
  type = type || '';
  var list = $gameSystem.getTypeHelps(category, type);
  var length = list.length;
  for (var i = 0; i < length; ++i) {
    var HelpId = list[i];
    var HelpData = $dataHelps[HelpId];
    if (!HelpData) continue;
    var text = HelpData.name;
    this.addCommand(text, 'Help', true, HelpId);
  }
};

Window_HelpList.prototype.update = function() {
  Window_Command.prototype.update.call(this);
  if (this._dataWindow) {
    if (this.currentSymbol() === 'Help' || this._mode === 'Extra') {
      this._dataWindow.setHelpId(this.currentExt());
    } else {
      this._dataWindow.setHelpId(0);
    }
  }
  if (this._titleWindow) {
    if (this.currentSymbol() === 'Help' || this._mode === 'Extra') {
      this._titleWindow.setText($dataHelps[this.currentExt()].name);
    } else {
      this._titleWindow.setText(this._titleWindow.settings('No Help Title'));
    }
  }
};

Window_HelpList.prototype.typeToggle = function(type) {
  if (this._closedHelpTypes.contains(type)) {
    var index = this._closedHelpTypes.indexOf(type);
    this._closedHelpTypes.splice(index, 1);
  } else {
    this._closedHelpTypes.push(type);
  }
  this.refresh();
};

Window_HelpList.prototype.getVisibleRows = function() {
  var value = this.height - (this.standardPadding() * 2);
  value = Math.floor(value / this.lineHeight());
  return value;
};

Window_HelpList.prototype.isInsideFrame = function() {
  var x = this.canvasToLocalX(TouchInput._mouseOverX);
  var y = this.canvasToLocalY(TouchInput._mouseOverY);
  return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_HelpList.prototype.processWheel = function() {
  if (!this.isInsideFrame()) return;
  var threshold = 20;
  if (TouchInput.wheelY >= threshold) this.scrollDown();
  if (TouchInput.wheelY <= -threshold) this.scrollUp();
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.Help.Scene_Menu_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
  Yanfly.Help.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('Help', this.commandHelp.bind(this));
};

Scene_Menu.prototype.commandHelp = function() {
  SceneManager.push(Scene_Help);
};

//=============================================================================
// Scene_Help
//=============================================================================

function Scene_Help() {
  this.initialize.apply(this, arguments);
};

Scene_Help.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Help.prototype.constructor = Scene_Help;

Scene_Help.prototype.initialize = function() {
  Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Help.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this.runCustomCode(Yanfly.Help.createBefore);
  this.createDataWindow();
  this.createTitleWindow();
  this.createCategoryWindow();
  this.createListWindow();
  this.processHelpOpen();
  this.runCustomCode(Yanfly.Help.createAfter);
};

Yanfly.Help.createBefore = 
  JSON.parse(Yanfly.Help.LunaticMode['Before Create Windows']);
Yanfly.Help.createAfter = 
  JSON.parse(Yanfly.Help.LunaticMode['After Create Windows']);
Yanfly.Help.terminateMenu = 
  JSON.parse(Yanfly.Help.LunaticMode['Close Help Menu']);

Scene_Help.prototype.runCustomCode = function(code) {
  var background = this._backgroundSprite;
  var windowLayer = this._windowLayer;
  eval(code);
};

Scene_Help.prototype.createDataWindow = function() {
  this._dataWindow = new Window_HelpData();
  this._dataWindow.setHandler('cancel', this.onDataCancel.bind(this));
  this.addWindow(this._dataWindow);
};

Scene_Help.prototype.createTitleWindow = function() {
  this._titleWindow = new Window_HelpTitle();
  this.addWindow(this._titleWindow);
};

Scene_Help.prototype.createCategoryWindow = function() {
  this._categoryWindow = new Window_HelpCategories();
  this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
  this._categoryWindow.setHandler('category', this.onCategoryOk.bind(this));
  this.addWindow(this._categoryWindow);
};

Scene_Help.prototype.createListWindow = function() {
  this._listWindow = new Window_HelpList(this._categoryWindow, 
    this._dataWindow, this._titleWindow);
  this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
  this._listWindow.setHandler('type', this.onListTypeToggle.bind(this));
  this._listWindow.setHandler('Help', this.onListHelp.bind(this));
  this._listWindow.setHandler('readHelp', this.dataWindowActivate.bind(this));
  this.addWindow(this._listWindow);
};

Scene_Help.prototype.onCategoryCancel = function() {
  this.runCustomCode(Yanfly.Help.terminateMenu);
  this.popScene();
};

Scene_Help.prototype.onCategoryOk = function() {
  this._listWindow.activate();
  if (this._listWindow.index() < 0) this._listWindow.select(0);
};

Scene_Help.prototype.isHelpExtraCommand = function() {
  return false;
};

Scene_Help.prototype.onListCancel = function() {
  if (this._listWindow._mode === 'Extra') {
    this._listWindow.setMode('Help');
  } else {
    this._categoryWindow.activate();
  }
};

Scene_Help.prototype.onListTypeToggle = function() {
  this._listWindow.activate();
  this._listWindow.typeToggle(this._listWindow.currentExt());
};

Scene_Help.prototype.onListHelp = function() {
  if (this.isHelpExtraCommand()) {
    this._listWindow.setMode('Extra');
  } else {
    this.dataWindowActivate();
  }
};

Scene_Help.prototype.dataWindowActivate = function() {
  this._dataWindow.activate();
};

Scene_Help.prototype.onDataCancel = function() {
  if (this._dataWindow._mode === 'Extra') {
    this._listWindow.setMode('Help');
  } else {
    this._dataWindow.deactivate();
    this._listWindow.activate();
  }
};

Scene_Help.prototype.processHelpOpen = function() {
  var HelpId = $gameTemp.getHelpOpen();
  if (HelpId) {
    var categoryOrder = this.getHelpOpenCategories();
    var length = categoryOrder.length;
    for (var i = 0; i < length; ++i) {
      var category = categoryOrder[i];
      var index = this._categoryWindow.findExt(category);
      if (index >= 0) break;
    }
    this._categoryWindow.selectExt(index);
    this.onCategoryOk();
    this._categoryWindow.deactivate();
    this._listWindow.selectExt(HelpId);
    this.onListHelp();
    this._listWindow.deactivate();
    this._listWindow.setTopRow(this._listWindow.findExt(HelpId));
    var scrollTimes = Math.floor(this._listWindow.getVisibleRows() / 2);
    while (scrollTimes--) { 
      this._listWindow.scrollUp();
    }
    this._listWindow.ensureCursorVisible();
    this._listWindow.updateCursor();
  }
  $gameTemp.clearHelpOpen();
};

Scene_Help.prototype.getHelpOpenCategories = function() {
  return ['available', 'completed', 'failed', 'all'];
};

// Custom Code

Scene_Help.prototype.centerSprite = function(sprite) {
  sprite.x = Graphics.width / 2;
  sprite.y = Graphics.height / 2;
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;
};

Scene_Help.prototype.fitScreen = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
    return setTimeout(this.fitScreen.bind(this, sprite), 5);
  }
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {

Yanfly.Util.toGroup = function(inVal) {
  return inVal;
};

}; // Yanfly.Util.toGroup

Yanfly.Util.getRange = function(n, m) {
  var result = [];
  for (var i = n; i <= m; ++i) result.push(i);
  return result;
};

//=============================================================================
// End of Main Functions
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_HelpJournal while your project files are lower than version ';
text += '1.5.0.\n\nPlease visit this thread for instructions on how to update ';
text += 'your project files to 1.5.0 or higher: \n\n';
text += 'https://forums.rpgmakerweb.com/index.php?threads/';
text += 'rpg-maker-mv-1-5-0-update.79677/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0')
//=============================================================================
// End of File
//=============================================================================