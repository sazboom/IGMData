var dnd5BasicShortSword = {
	shortName: "sword",
	longName: "a sword",
	attackType: 'standard',
	toHitStack: [],
	onHitStack: [
		{
			mechanic : 'damage',
			effect : 'physical',
			datatype : 'slashing',
			dieRolls : 1,
			dieSides : 6
		}
	]
}

module.exports = dnd5BasicShortSword