var Display = function (calculator) {
	this._calculator = calculator ? : this.makeCalculator();
}

Display.prototype.makeCalculator = function() {
	return new Calculator();
};