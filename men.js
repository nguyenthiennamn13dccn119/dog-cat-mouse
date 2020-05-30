function Men(cu){
	this.cu = cu;
	this.biFuck = false;
}

module.exports = Men;

Men.prototype.fuck = function(){
	this.biFuck = true;
}