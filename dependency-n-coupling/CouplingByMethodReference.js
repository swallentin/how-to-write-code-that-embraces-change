var Display = function () {
	this._calculator = this.makeCalculator();
}

Display.prototype.printSum = function() {
	console.log(this._calculator.add());
};

Display.prototype.make = function() {
	return new Calculator(1, 2);
};