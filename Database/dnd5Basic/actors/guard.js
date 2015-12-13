var dnd5BasicActorGuard = {
	attackPaths : ['igm-data/Database/dnd5basic/attacks/shortSword'], 
	defensePaths : ['igm-data/Database/dnd5basic/defense/leatherArmor'],
	toHitStack : [
		{
			source: 'actor',
			datatype: 'static',
			bonus: 4
		}
	],
	toAvoidHitStack : [
		{
			source: 'actor',
			datatype: 'static',
			bonus: 10
		}
	],
	onHitStack : [
		{
			source: 'actor',
			datatype: 'static',
			bonus: 4
		}
	],
	proficiencyBonus : 0,
	attributes: 	{
		'str':10,
		'dex':10,
		'con':10,
		'wis':10,
		'int':10,
		'cha':10
	}

}

module.exports = dnd5BasicActorGuard
