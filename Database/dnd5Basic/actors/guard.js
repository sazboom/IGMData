var dnd5BasicActorGuard = {
	attackPaths : ['igm-data/Database/dnd5basic/attacks/shortSword'], 
	defensePaths : [],
	toHitStack : [
		{
			source: 'actor',
			datatype: 'static',
			bonus: 4
		}
	],
	toAvoidStack : [],
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
