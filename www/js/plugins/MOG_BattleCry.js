//=============================================================================
// MOG_BattleCry.js
//=============================================================================

/*:
 * @plugindesc (v1.4) Adiciona vozes na batalha.
 * @author Moghunter
 *
 * @param Volume
 * @desc Definição do volume.
 * @default 120 
 *


 * 
 * @help  
 * =============================================================================
 * +++ MOG - Battle Cry (v1.4) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona vozes na batalha (ação, dano, vitória,etc...)
 * Para definir as vozes é necessário editar o plugin manualmente.
 * A edição do plugin deve ser feita a partir da linha 70.
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.4) - Correção do tocar as vozes no menu.
 *        - Correção de não atualizar a ID do inimigo no efeito transformação.
 * (v1.3) Compatibilidade com MOG Battle Result.  
 * (v1.2) Compatibilidade com MOG Battle Transitions. 
 * (v1.1) Corrigido o bug de não mover o personagem na hora da ação.
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

    // Não modifique essa parte.
    // ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
　　var Imported = Imported || {};
　　Imported.MOG_BattleCry = true;
　　var Moghunter = Moghunter || {}; 
	Moghunter.parameters = PluginManager.parameters('MOG_BattleCry');
	Moghunter.v_volume = Number(Moghunter.parameters['Volume'] || 100);
    Moghunter.v_actor_start = [];
	Moghunter.v_actor_turn = [];
	Moghunter.v_actor_default_action = [];
	Moghunter.v_actor_skill = [];
	Moghunter.v_actor_item = [];
	Moghunter.v_actor_attack = [];
	Moghunter.v_actor_damage = [];
	Moghunter.v_actor_evaded = [];
	Moghunter.v_actor_dead = [];
    Moghunter.v_actor_recover = [];
	Moghunter.v_actor_counter = [];
	Moghunter.v_actor_reflection = [];
	Moghunter.v_actor_victory = [];
	Moghunter.v_actor_levelup = [];
	Moghunter.v_actor_escape = [];
	Moghunter.v_enemy_default_action = [];
	Moghunter.v_enemy_damage = [];
	Moghunter.v_enemy_evaded = [];
	Moghunter.v_enemy_counter = [];
	Moghunter.v_enemy_reflection = [];	
	Moghunter.v_enemy_dead = [];
    Moghunter.v_enemy_recover = [];
	Moghunter.v_enemy_skill = [];
    // ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
	
	
	
	
	// SETUP ----------------------------------------------------------------
	// Exemplo de configuração geral, o modo de configurar é igual para todas 
	// ações.
	//
	// Moghunter.v_actor_start[A] = [B,B,B,B...]
	//
	// A - Actor ID 
	// B - File Name
	//
	// -----------------------------------------------------------------------
	
	// -----------------------------------------------------------------------
	// ACTOR - BATTLE START
	// -----------------------------------------------------------------------
	Moghunter.v_actor_start[1] = ["P1_Start_01","P1_Start_02"];
	Moghunter.v_actor_start[6] = ["Madilyn_Beginning_1","Madilyn_Beginning_2"];
	Moghunter.v_actor_start[7] = ["Winter_Beginning_1","Winter_Beginning_2"];
	Moghunter.v_actor_start[5] = ["Hiro_Beginning_1","Hiro_Beginning_2"];
	Moghunter.v_actor_start[8] = ["Davos_Beginning_1","Davos_Beginning_2"];
	Moghunter.v_actor_start[9] = ["Auryn_Beginning_1","Auryn_Beginning_2"];
	Moghunter.v_actor_start[21] = ["Sarah_Beginning_1","Sarah_Beginning_2"];
	Moghunter.v_actor_start[22] = ["Rex_Beginning_1","Rex_Beginning_2"];
	
	// -----------------------------------------------------------------------
	// ACTOR - BATTLE TURN
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_turn[1] = ["P1_Turn_01","P1_Turn_02"];
	// Moghunter.v_actor_turn[6] = ["P2_Turn_01","P2_Turn_02","P2_Turn_03"];
	// Moghunter.v_actor_turn[7] = ["Winter_Attack_1","Winter_Attack_2"];
	// Moghunter.v_actor_turn[5] = ["P4_Turn_01","P4_Turn_02","P4_Turn_03"];
	// -----------------------------------------------------------------------
	// ACTOR - DEFAULT ACTION (Skill/ITEM)
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_default_action[1] = ["P1_Action_01","P1_Action_02","P1_Action_03"];
	// Moghunter.v_actor_default_action[6] = ["P2_Action_01","P2_Action_02","P2_Action_03"];
	// Moghunter.v_actor_default_action[7] = ["Winter_Attack_1","Winter_Attack_2","Winter_Attack_3"];
	// Moghunter.v_actor_default_action[5] = ["P4_Action_01","P4_Action_02","P4_Action_03"];

	
	Moghunter.v_actor_attack[7] = ["Winter_Attack_1","Winter_Attack_2","Winter_Attack_3"];
	Moghunter.v_actor_attack[6] = ["Madilyn_Attack_1","Madilyn_Attack_2","Madilyn_Attack_3","Madilyn_Attack_4"];
	Moghunter.v_actor_attack[5] = ["Hiro_Attack_1","Hiro_Attack_2","Hiro_Attack_3","Hiro_Attack_4"];
	Moghunter.v_actor_attack[8] = ["Davos_Attack_1","Davos_Attack_2","Davos_Attack_3"];
	Moghunter.v_actor_attack[9] = ["Auryn_Attack_1","Auryn_Attack_2","Auryn_Attack_3","Auryn_Attack_4"];
	Moghunter.v_actor_attack[21] = ["Sarah_Attack_1","Sarah_Attack_2","Sarah_Attack_3","Sarah_Attack_4"];
	Moghunter.v_actor_attack[22] = ["Rex_Attack_1","Rex_Attack_2","Rex_Attack_3","Rex_Attack_4"];

	
	// -----------------------------------------------------------------------
	// ACTOR - SKILL
	// -----------------------------------------------------------------------	
	// Moghunter.v_actor_skill[A] = {B:[C,C,C,C,...] }
	// 
	// A - Actor ID
	// B - Skill ID
	// C - File Name
	// -----------------------------------------------------------------------	
    // Moghunter.v_actor_skill[1] = {
	// 	 9:["P1_Action_04","P1_Action_05","P1_Action_06"], // Fire
	//      10:["P1_Action_07","P1_Action_08","P1_Action_09"] // Spark
	// };
	// Moghunter.v_actor_skill[6] = {
	// 	 8:["P2_Action_06","P2_Turn_03"], // Heal 
	// 	 9:["P2_Action_04","P2_Action_08","P2_Action_09"], // Fire
	// 	 17:["P2_Action_06","P2_Turn_03"] // Heal All 
    // };
	Moghunter.v_actor_skill[6] = {
		27:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		33:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		137:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		138:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		245:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		252:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"],
		134:["Madilyn_Power_attack_1"],
		267:["Madilyn_Power_attack_1"],
		181:["Madilyn_Item_1"], // Haste
		139:["Madilyn_Heal_1","Madilyn_Heal_2","Madilyn_Heal_3"] // Heal
	};
	Moghunter.v_actor_skill[21] = {
		27:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		33:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		137:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		138:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		245:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		252:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"],
		134:["Sarah_Power_attack_1"],
		139:["Sarah_Heal_1","Sarah_Heal_2","Sarah_Heal_3","Sarah_Heal_4"] // Heal
	};
	Moghunter.v_actor_skill[8] = {
		51:["Davos_Fire_1"],
		52:["Davos_Fire_1"],
		53:["Davos_Fire_1"],
		54:["Davos_Fire_1"],
		55:["Davos_Ice_1"],
		56:["Davos_Ice_1"],
		57:["Davos_Ice_1"],
		58:["Davos_Ice_1"],
		59:["Davos_Lightning_1"],
		60:["Davos_Lightning_1"],
		61:["Davos_Lightning_1"],
		62:["Davos_Lightning_1"],
		39:["Davos_Slumber_1"],
	 	179:["Davos_Power_Attack_1"], // Holy
		120:["Davos_Power_attack_1"] // Magic Torrent
	};
	Moghunter.v_actor_skill[7] = {
	 	 5:["Winter_Power_Attack_1"], // Triple Attack
	 	 143:["Winter_Power_Attack_1"], // Poison Knife Barrage
	 	 185:["Winter_Power_Attack_1"], // Hamstring
	 	 244:["Winter_Power_Attack_1"] // Gravity
	};
	Moghunter.v_actor_skill[5] = {
	 	 129:["Hiro_Power_attack_1"], // Pommel Strike
	 	 131:["Hiro_Power_attack_1"], // Hero Slash
	 	 130:["Hiro_Power_attack_1"] // Double Slash
	};
	Moghunter.v_actor_skill[9] = {
	 	 129:["Auryn_Power_attack_1"], // Pommel Strike
	 	 131:["Auryn_Power_attack_1"] // Hero Slash
	};
	Moghunter.v_actor_skill[22] = {
	 	 5:["Rex_Power_Attack_1","Rex_Power_Attack_2"], // Triple Attack
	 	 143:["Rex_Power_Attack_1","Rex_Power_Attack_2"], // Poison Knife Barrage
	 	 185:["Rex_Power_Attack_1","Rex_Power_Attack_2"] // Hamstring
	};

    // -----------------------------------------------------------------------
	// ACTOR - ITEM
	// -----------------------------------------------------------------------	
    // Moghunter.v_actor_item[1] = {
	// 	1:["P1_Action_01","P1_Action_02","P1_Action_03"],  // Potion
	//     3:["P1_Action_01","P1_Action_02","P1_Action_03"]}; // Full Potion
	Moghunter.v_actor_item[6] = {
		1:["Madilyn_Item_1","Madilyn_Item_2"],
		2:["Madilyn_Item_1","Madilyn_Item_2"],
		3:["Madilyn_Item_1","Madilyn_Item_2"],
		4:["Madilyn_Item_1","Madilyn_Item_2"],
		5:["Madilyn_Item_1","Madilyn_Item_2"],
		6:["Madilyn_Item_1","Madilyn_Item_2"],
		7:["Madilyn_Item_1","Madilyn_Item_2"],
		8:["Madilyn_Item_1","Madilyn_Item_2"],
		28:["Madilyn_Item_1","Madilyn_Item_2"],
		29:["Madilyn_Item_1","Madilyn_Item_2"],
		30:["Madilyn_Item_1","Madilyn_Item_2"],
		31:["Madilyn_Item_1","Madilyn_Item_2"],
		32:["Madilyn_Item_1","Madilyn_Item_2"],
		123:["Madilyn_Attack_4"],
		33:["Madilyn_Item_1","Madilyn_Item_2"]
		
	};
	Moghunter.v_actor_item[7] = {
		1:["Winter_Item_1","Winter_Item_2"],
		2:["Winter_Item_1","Winter_Item_2"],
		3:["Winter_Item_1","Winter_Item_2"],
		4:["Winter_Item_1","Winter_Item_2"],
		5:["Winter_Item_1","Winter_Item_2"],
		6:["Winter_Item_1","Winter_Item_2"],
		7:["Winter_Item_1","Winter_Item_2"],
		8:["Winter_Item_1","Winter_Item_2"],
		28:["Winter_Item_1","Winter_Item_2"],
		29:["Winter_Item_1","Winter_Item_2"],
		30:["Winter_Item_1","Winter_Item_2"],
		31:["Winter_Item_1","Winter_Item_2"],
		32:["Winter_Item_1","Winter_Item_2"],
		123:["Winter_Attack_4"],
		33:["Winter_Item_1","Winter_Item_2"]
	};
	Moghunter.v_actor_item[5] = {
		1:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		2:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		3:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		4:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		5:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		6:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		7:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		8:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		28:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		29:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		30:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		31:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		32:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"],
		123:["Hiro_Item_3"],
		33:["Hiro_Item_1","Hiro_Item_2","Hiro_Item_3"]
	};	
	Moghunter.v_actor_item[9] = {
		1:["Auryn_Item_1","Auryn_Item_2"],
		2:["Auryn_Item_1","Auryn_Item_2"],
		3:["Auryn_Item_1","Auryn_Item_2"],
		4:["Auryn_Item_1","Auryn_Item_2"],
		5:["Auryn_Item_1","Auryn_Item_2"],
		6:["Auryn_Item_1","Auryn_Item_2"],
		7:["Auryn_Item_1","Auryn_Item_2"],
		8:["Auryn_Item_1","Auryn_Item_2"],
		28:["Auryn_Item_1","Auryn_Item_2"],
		29:["Auryn_Item_1","Auryn_Item_2"],
		30:["Auryn_Item_1","Auryn_Item_2"],
		31:["Auryn_Item_1","Auryn_Item_2"],
		32:["Auryn_Item_1","Auryn_Item_2"],
		123:["Auryn_Attack_3"],
		33:["Auryn_Item_1","Auryn_Item_2"]
	};	
	Moghunter.v_actor_item[8] = {
		1:["Davos_Item_1","Davos_Item_2"],
		2:["Davos_Item_1","Davos_Item_2"],
		3:["Davos_Item_1","Davos_Item_2"],
		4:["Davos_Item_1","Davos_Item_2"],
		5:["Davos_Item_1","Davos_Item_2"],
		6:["Davos_Item_1","Davos_Item_2"],
		7:["Davos_Item_1","Davos_Item_2"],
		8:["Davos_Item_1","Davos_Item_2"],
		28:["Davos_Item_1","Davos_Item_2"],
		29:["Davos_Item_1","Davos_Item_2"],
		30:["Davos_Item_1","Davos_Item_2"],
		31:["Davos_Item_1","Davos_Item_2"],
		32:["Davos_Item_1","Davos_Item_2"],
		123:["Davos_Attack_2"],
		33:["Davos_Item_1","Davos_Item_2"]
	};	
	Moghunter.v_actor_item[21] = {
		1:["Sarah_Item_1","Sarah_Item_2"],
		2:["Sarah_Item_1","Sarah_Item_2"],
		3:["Sarah_Item_1","Sarah_Item_2"],
		4:["Sarah_Item_1","Sarah_Item_2"],
		5:["Sarah_Item_1","Sarah_Item_2"],
		6:["Sarah_Item_1","Sarah_Item_2"],
		7:["Sarah_Item_1","Sarah_Item_2"],
		8:["Sarah_Item_1","Sarah_Item_2"],
		28:["Sarah_Item_1","Sarah_Item_2"],
		29:["Sarah_Item_1","Sarah_Item_2"],
		30:["Sarah_Item_1","Sarah_Item_2"],
		31:["Sarah_Item_1","Sarah_Item_2"],
		32:["Sarah_Item_1","Sarah_Item_2"],
		123:["Sarah_Attack_2"],
		33:["Sarah_Item_1","Sarah_Item_2"]
	};
	Moghunter.v_actor_item[22] = {
		1:["Rex_Item_1","Rex_Item_2"],
		2:["Rex_Item_1","Rex_Item_2"],
		3:["Rex_Item_1","Rex_Item_2"],
		4:["Rex_Item_1","Rex_Item_2"],
		5:["Rex_Item_1","Rex_Item_2"],
		6:["Rex_Item_1","Rex_Item_2"],
		7:["Rex_Item_1","Rex_Item_2"],
		8:["Rex_Item_1","Rex_Item_2"],
		28:["Rex_Item_1","Rex_Item_2"],
		29:["Rex_Item_1","Rex_Item_2"],
		30:["Rex_Item_1","Rex_Item_2"],
		31:["Rex_Item_1","Rex_Item_2"],
		32:["Rex_Item_1","Rex_Item_2"],
		123:["Rex_Item_3"],
		33:["Rex_Item_1","Rex_Item_2"]
	};
	// -----------------------------------------------------------------------
	// ACTOR - DAMAGE
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_damage[1] = ["P1_Damage_01","P1_Damage_02","P1_Damage_03"];
	Moghunter.v_actor_damage[6] = ["Madilyn_Damaged_1","Madilyn_Damaged_2","Madilyn_Damaged_3","Madilyn_Damaged_4"];
	Moghunter.v_actor_damage[7] = ["Winter_Damage_1","Winter_Damage_2"];
	Moghunter.v_actor_damage[5] = ["Hiro_Damage_1","Hiro_Damage_2"];
	Moghunter.v_actor_damage[8] = ["Davos_Damage_1","Davos_Damage_2","Davos_Damage_3","Davos_Damage_4"];
	Moghunter.v_actor_damage[9] = ["Auryn_Damage_1","Auryn_Damage_2","Auryn_Damage_3","Auryn_Damage_4"];
	Moghunter.v_actor_damage[21] = ["Sarah_Damage_1","Sarah_Damage_2","Sarah_Damage_3","Sarah_Damage_4"];
	Moghunter.v_actor_damage[22] = ["Rex_Damage_1","Rex_Damage_2","Rex_Damage_3","Rex_Damage_4"];
	// -----------------------------------------------------------------------
	// ACTOR - EVADED  &   MISS
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_evaded[1] = ["P1_Evade_01"];
	// Moghunter.v_actor_evaded[6] = ["P2_Evade_01"];
	// Moghunter.v_actor_evaded[7] = ["P3_Evade_01"];
	// Moghunter.v_actor_evaded[5] = ["P4_Evade_01"];	
	// -----------------------------------------------------------------------
	// ACTOR - COUNTER
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_counter[1] = ["P1_Counter_01"];
	// Moghunter.v_actor_counter[6] = ["P2_Counter_01"];
	// Moghunter.v_actor_counter[7] = ["P3_Counter_01"];
	// Moghunter.v_actor_counter[5] = ["P4_Counter_01"];	
	// -----------------------------------------------------------------------
	// ACTOR - REFLECTION
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_reflection[1] = ["P1_Reflection_01"];
	// Moghunter.v_actor_reflection[6] = ["P2_Reflection_01"];
	// Moghunter.v_actor_reflection[7] = ["P3_Reflection_01"];
	// Moghunter.v_actor_reflection[5] = ["P4_Reflection_01"];			
	// -----------------------------------------------------------------------
	// ACTOR - RECOVER
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_recover[1] = ["P1_Recover_01","P1_Recover_02"];
	// Moghunter.v_actor_recover[6] = ["P2_Recover_01","P2_Recover_02"];
	// Moghunter.v_actor_recover[7] = ["P3_Recover_01","P3_Recover_02"];
	// Moghunter.v_actor_recover[5] = ["P4_Recover_01"];
	// -----------------------------------------------------------------------
	// ACTOR - DEAD
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_dead[1] = ["P1_Dead_01","P1_Dead_02"];
	Moghunter.v_actor_dead[6] = ["Madilyn_Death_1"];
	Moghunter.v_actor_dead[7] = ["Winter_Down_1"];
	Moghunter.v_actor_dead[5] = ["Hiro_Dead_1"];
	Moghunter.v_actor_dead[8] = ["Davos_Death_1"];
	Moghunter.v_actor_dead[9] = ["Auryn_Death_1"];
	Moghunter.v_actor_dead[21] = ["Sarah_Death_1"];
	Moghunter.v_actor_dead[22] = ["Rex_Death_1"];
	// -----------------------------------------------------------------------
	// ACTOR - ESCAPE
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_escape[1] = ["P1_Escape_01"];
	// Moghunter.v_actor_escape[6] = ["P2_Escape_01"];
	// Moghunter.v_actor_escape[7] = ["P3_Escape_01"];
	// Moghunter.v_actor_escape[5] = ["P4_Escape_01"];
	// -----------------------------------------------------------------------
	// ACTOR - VICTORY
	// -----------------------------------------------------------------------		
	// Moghunter.v_actor_victory[1] = ["P1_Victory_01","P1_Victory_02","P1_Victory_03","P1_Victory_04"];
	// Moghunter.v_actor_victory[6] = ["P2_Victory_01","P2_Victory_02"];
	// Moghunter.v_actor_victory[7] = ["P3_Victory_01","P3_Victory_02"];
	// Moghunter.v_actor_victory[5] = ["P4_Victory_01"];
	// -----------------------------------------------------------------------
	// ACTOR - LEVEL UP
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_levelup[1] = ["P1_Recover_02"];
	Moghunter.v_actor_levelup[6] = ["Madilyn_Level_up_1","Madilyn_Level_up_2"];
	Moghunter.v_actor_levelup[7] = ["Winter_Level_up_1","Winter_Level_up_2"];
	Moghunter.v_actor_levelup[5] = ["Hiro_Level_up_1","Hiro_Level_up_2"];	
	Moghunter.v_actor_levelup[8] = ["Davos_Level_up_1","Davos_Level_up_2"];	
	Moghunter.v_actor_levelup[9] = ["Auryn_Level_up_1","Auryn_Level_up_2"];	
	Moghunter.v_actor_levelup[21] = ["Sarah_Level_up_1","Sarah_Level_up_2"];	
	Moghunter.v_actor_levelup[22] = ["Rex_Level_up_1","Rex_Level_up_2"];	
	
	
	// -----------------------------------------------------------------------
	// ENEMY - DEFAULT ACTION
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_default_action[900] = ["P1_Action_01","P1_Action_02","P1_Action_03"];
	Moghunter.v_enemy_default_action[901] = ["P2_Action_01","P2_Action_02","P2_Action_03"];
	// -----------------------------------------------------------------------
	// ENEMY - SKILL
	// -----------------------------------------------------------------------	
    Moghunter.v_enemy_skill[900] = {
		 1:["P1_Action_04","P1_Action_05","P1_Action_06"],
	     8:["P1_Action_07","P1_Action_08","P1_Action_09"]
	};
	Moghunter.v_enemy_skill[901] = {1:["P2_Action_04","P2_Action_05","P2_Action_06"]};	
	// -----------------------------------------------------------------------
	// ENEMY - DAMAGE
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_damage[900] = ["P1_Damage_01","P1_Damage_02","P1_Damage_03"];
	Moghunter.v_enemy_damage[901] = ["P2_Damage_01","P2_Damage_02","P2_Damage_03"];
	// -----------------------------------------------------------------------
	// ENEMY - EVADED  &   MISS
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_evaded[900] = ["P1_Evade_01"];	
	Moghunter.v_enemy_evaded[901] = ["P1_Evade_01"];
	// -----------------------------------------------------------------------
	// ENEMY - COUNTER
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_counter[900] = ["P1_Counter_01"];
	Moghunter.v_enemy_counter[901] = ["P2_Counter_01"];
	// -----------------------------------------------------------------------
	// ENEMY - REFLECTION
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_reflection[900] = ["P1_Reflection_01"];
	Moghunter.v_enemy_reflection[901] = ["P2_Reflection_01"];
	// -----------------------------------------------------------------------
	// ENEMY - RECOVER
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_recover[900] = ["P1_Recover_01","P1_Recover_02"];
	Moghunter.v_enemy_recover[901] = ["P2_Recover_01","P2_Recover_02"];
	// -----------------------------------------------------------------------
	// ENEMY - DEAD
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_dead[900] = ["P1_Dead_01","P1_Dead_02"];
	Moghunter.v_enemy_dead[901] = ["P2_Dead_01"];	
  
  
  
  
  
//=============================================================================
// ** Sound Manager
//=============================================================================	

//==============================
// * select Voice
//==============================
SoundManager.selectVoice = function(voices){ 
   if (!voices) {return};
   if (voices.length === 0) {return};
   var voiceIndex = Math.randomInt(voices.length);
   var fileName = voices[voiceIndex];
   this.playVoice(fileName);
};

//==============================
// * Play Voice
//==============================
SoundManager.playVoice = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = Moghunter.v_volume;
   AudioManager.playSe(se);
};   
  
//=============================================================================
// ** BattleManager
//=============================================================================	

//================================
// ** Random Actor
//================================
BattleManager.randomActor = function() {
    var actorIndex = Math.randomInt($gameParty.aliveMembers().length);
    return $gameParty.aliveMembers()[actorIndex];
};

//==================================
// ** Start Battle
//==================================
var _alias_mog_bmngr_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {
     _alias_mog_bmngr_startBattle.call(this);
	 if (!Imported.MOG_BattleTransitions || 
	      (Imported.MOG_BattleTransitions && $gameSystem._treType[1] === -1)) {
	     var actor = this.randomActor();
        if (actor) {SoundManager.selectVoice(actor._v_start)};
     };
};

//==================================
// ** Process Victory
//==================================
var _alias_mog_bcry_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_victory)};	
     _alias_mog_bcry_processVictory.call(this);	 
};

//==================================
// ** Process Escape
//==================================
var _alias_mog_bcry_processEscape = BattleManager.processEscape;
BattleManager.processEscape = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_escape)};		
	 _alias_mog_bcry_processEscape.call(this);	 
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * InitMembers
//==============================
var _alias_mog_batcry_gbattler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    _alias_mog_batcry_gbattler_initMembers.call(this);
    this.battleCrySetup();
};

//==============================
// * Battle Cry Setup
//==============================
Game_Battler.prototype.battleCrySetup = function() {
	this._v_start = [];
	this._v_turn = [];
	this._v_default_action = [];
	this._v_damage = [];
	this._v_evaded = [];
	this._v_counter = [];
	this._v_reflection = [];
	this._v_dead = [];
	this._v_recover = [];
	this._v_escape = [];
	this._v_victory = [];
	this._v_levelup = [];
};

//==============================
// * Battle Cry Setup Actor
//==============================
Game_Battler.prototype.battleCrySetupActor = function() {
	if (Moghunter.v_actor_start[this._actorId]) {this._v_start = Moghunter.v_actor_start[this._actorId]}; 
	if (Moghunter.v_actor_turn[this._actorId]) {this._v_turn = Moghunter.v_actor_turn[this._actorId]};
	if (Moghunter.v_actor_default_action[this._actorId]) {
		this._v_default_action = Moghunter.v_actor_default_action[this._actorId]};
	if (Moghunter.v_actor_damage[this._actorId]) {this._v_damage = Moghunter.v_actor_damage[this._actorId]};
	if (Moghunter.v_actor_evaded[this._actorId]) {this._v_evaded = Moghunter.v_actor_evaded[this._actorId]};
	if (Moghunter.v_actor_counter[this._actorId]) {this._v_counter = Moghunter.v_actor_counter[this._actorId]};
	if (Moghunter.v_actor_reflection[this._actorId]) {this._v_reflection = Moghunter.v_actor_reflection[this._actorId]};
	if (Moghunter.v_actor_dead[this._actorId]) {this._v_dead = Moghunter.v_actor_dead[this._actorId]};
	if (Moghunter.v_actor_recover[this._actorId]) {this._v_recover = Moghunter.v_actor_recover[this._actorId]};
	if (Moghunter.v_actor_escape[this._actorId]) {this._v_escape = Moghunter.v_actor_escape[this._actorId]};
	if (Moghunter.v_actor_victory[this._actorId]) {this._v_victory = Moghunter.v_actor_victory[this._actorId]};
	if (Moghunter.v_actor_levelup[this._actorId]) {this._v_levelup = Moghunter.v_actor_levelup[this._actorId]};
};

//==============================
// * Battle Cry Setup Enemy
//==============================
Game_Battler.prototype.battleCrySetupEnemy = function() {
	if (Moghunter.v_enemy_default_action[this._enemyId]) {
		this._v_default_action = Moghunter.v_enemy_default_action[this._enemyId]};
	if (Moghunter.v_enemy_damage[this._enemyId]) {this._v_damage = Moghunter.v_enemy_damage[this._enemyId]};
	if (Moghunter.v_enemy_evaded[this._enemyId]) {this._v_evaded = Moghunter.v_enemy_evaded[this._enemyId]};
	if (Moghunter.v_enemy_counter[this._enemyId]) {this._v_counter = Moghunter.v_enemy_counter[this._enemyId]};
	if (Moghunter.v_enemy_reflection[this._enemyId]) {this._v_reflection = Moghunter.v_enemy_reflection[this._enemyId]};
	if (Moghunter.v_enemy_dead[this._enemyId]) {this._v_dead = Moghunter.v_enemy_dead[this._enemyId]};
	if (Moghunter.v_enemy_recover[this._enemyId]) {this._v_recover = Moghunter.v_enemy_recover[this._enemyId]};
};

//===============================
// ** PerfotmAction
//===============================
var _alias_mog_bcry_performActionStart = Game_Battler.prototype.performActionStart;
Game_Battler.prototype.performActionStart = function(action) {
   if (action) {this.playVoiceAction(action)};
   _alias_mog_bcry_performActionStart.call(this, action);
};

//===============================
// ** play Voice Action
//===============================
Game_Battler.prototype.playVoiceAction = function(action) {
     var actionID = action.item().id
	 if (this.isActor()) {
		 if (action.isSkill() && Moghunter.v_actor_skill[this._actorId] && 
		     Moghunter.v_actor_skill[this._actorId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_actor_skill[this._actorId][actionID]);
			 return;
		 } else if (action.isItem() && Moghunter.v_actor_item[this._actorId] &&
		     Moghunter.v_actor_item[this._actorId][actionID]) {
			 SoundManager.selectVoice(Moghunter.v_actor_item[this._actorId][actionID]); 
			 return;
		 } else if (action.isAttack() && Moghunter.v_actor_attack[this._actorId]) {
			 SoundManager.selectVoice(Moghunter.v_actor_attack[this._actorId]); 
			 return;
		 };
	 } else if (this.isEnemy()) {
		 if (Moghunter.v_enemy_skill[this._enemyId] && Moghunter.v_enemy_skill[this._enemyId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_enemy_skill[this._enemyId][actionID]);
			 return;
		 };		 
	 };
	  SoundManager.selectVoice(this._v_default_action);
};

//==============================
// ** perform Counter
//==============================
var _mog_btcry_gbat_performCounter = Game_Battler.prototype.performCounter;
Game_Battler.prototype.performCounter = function() {
    _mog_btcry_gbat_performCounter.call(this);
    SoundManager.selectVoice(this._v_counter);	
};


//==============================
// ** perform Reflection
//==============================
var _mog_btcry_gbat_performReflection = Game_Battler.prototype.performReflection;
Game_Battler.prototype.performReflection = function() {
	_mog_btcry_gbat_performReflection.call(this);
    SoundManager.selectVoice(this._v_reflection);
};

//=============================================================================
// ** Game Actor
//=============================================================================	

//==============================
// * Setup
//==============================
var _mog_bcry_gact_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_bcry_gact_setup.call(this,actorId);
	this.battleCrySetupActor();
};

//=============================================================================
// ** Game Enemy
//=============================================================================	

//==============================
// * Setup
//==============================
var _mog_bcry_gemy_setup = Game_Enemy.prototype.setup; 
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_bcry_gemy_setup.call(this,enemyId, x, y);
	this.battleCrySetupEnemy();
};

//===============================
// ** transform
//===============================
var _mog_battlecry_genemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
	_mog_battlecry_genemy_transform.call(this,enemyId);
	this.battleCrySetupEnemy();
};

//=============================================================================
// ** Scene Battle
//=============================================================================	

//==============================
// * select Voice
//==============================
var _alias_mog_bcry_scbat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_alias_mog_bcry_scbat_start.call(this);
	this._actorvoice = null;  
};

//==============================
// * Update Battle Process
//==============================
var _alias_mog_bcry_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if (this._actorvoice != BattleManager.actor()) {this.playActorTurn()};
	_alias_mog_bcry_updateBattleProcess.call(this);	
};

//==============================
// * Play Actor Turn
//==============================
Scene_Battle.prototype.playActorTurn = function() {
	 this._actorvoice = BattleManager.actor();	 
     if (this._actorvoice) {
		if (this._actorvoice._v_turn && this._actorvoice._v_turn.length > 0) {
		     AudioManager.stopSe(); 
		     SoundManager.selectVoice(this._actorvoice._v_turn)
		};
     };
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bcry_gaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var old_hp = target.hp
	 _alias_mog_bcry_gaction_apply.call(this,target);
	 if ($gameParty.inBattle()) {
        if (old_hp != target.hp || this.item().damage.type === 3) {this.playVoiceHP(old_hp,target.hp,target)};
	    if (target.result().missed || target.result().evaded) {SoundManager.selectVoice(target._v_evaded)};
	 };
};

//==============================
// * Play Voice HP
//==============================
Game_Action.prototype.playVoiceHP = function(old_hp,now_hp,target) {
   if (target.isDead() || now_hp === 0) {
	   console.log("dead");
       SoundManager.selectVoice(target._v_dead);
   } else if (old_hp < now_hp || this.item().damage.type === 3) {
	   console.log("recovered");
	   SoundManager.selectVoice(target._v_recover);
   } else if (old_hp > now_hp) {
	   console.log("damaged" + target._v_damage);
       SoundManager.selectVoice(target._v_damage);
   };
};

//==============================
// * Item Effect Recover HP
//==============================
var _alias_mog_btcry_gact_itemEffectRecoverHp = Game_Action.prototype.itemEffectRecoverHp;
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
	var old_hp = target.hp;
	_alias_mog_btcry_gact_itemEffectRecoverHp.call(this,target, effect)
	if (old_hp <= target.hp) {SoundManager.selectVoice(target._v_recover)};
};
