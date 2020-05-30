function Men(cu){
	this.cu = cu;
	this.biFuck = false;
}

module.exports = Cu;

Cu.prototype.fuck = function(){
	this.biFuck = true;
}