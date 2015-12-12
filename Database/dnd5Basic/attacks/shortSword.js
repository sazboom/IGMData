var dnd5BasicShortSword = {
	this.shortName = "sword"
	this.longName = "a sword"
	this.attackType = 'standard'
	this.onHitStack = [
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