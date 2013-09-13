var Display = function () {
	this._calculator = new Calculator(1, 2);
}

Display.prototype.printSum = function() {
	console.log(this._calculator.add());
};