var dnd5BasicShortSword = {
	shortName: "sword",
	longName: "a sword",
	attackType: 'standard',
	onHitStack: [
		{
			mechanic : 'damage',
			effect : 'physical',
			type : 'slashing',
			dieRolls : 1,
			dieSides : 6
		}
	]
}

module.exports = dnd5BasicShortSword