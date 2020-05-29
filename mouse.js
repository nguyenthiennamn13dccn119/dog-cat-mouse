function Mouse(name){
	this.name = name;
	this.deal = false;
}

Mouse.prototype.die = function(){
	this.deal = true;
}

module.exports = Mouse;