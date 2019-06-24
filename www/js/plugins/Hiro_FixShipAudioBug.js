//=============================================================================
// Fix Ship Audio Bug
// Hiro_FixShipAudioBug.js
// Version: 1.0
// Author: Hiro24
//=============================================================================

//=============================================================================
 /*:
 * @plugindesc v1.0 Fix ship audio bug 
 * @author Hiro24
 *
 */
//=============================================================================

(function () {
    let VehicleBGMFix = {}

    // Save BGM when not in vehicle.
    const GameMap_autoplay = Game_Map.prototype.autoplay
    Game_Map.prototype.autoplay = function () {
      if (!$gamePlayer.isInVehicle()) {
        GameMap_autoplay.call(this)
        VehicleBGMFix = AudioManager.saveBgm()
      }
    }

    // Ensure BGM is not the old BGM before exiting vehicle.
    const Game_Vehicle_getOff = Game_Vehicle.prototype.getOff
    Game_Vehicle.prototype.getOff = function () {
      Game_Vehicle_getOff.call(this)
      if (VehicleBGMFix !== $dataMap.Bgm) {
        AudioManager.playBgm($dataMap.bgm)
      }
    }
  }
})()