var CanCompute = function () {};

CanCompute.prototype = {
	add: function() {},
	subtract: function() {}
};

var Calculator = function(firstNumber, secondNumber) {
	this._firstNumber = firstNumber;
	this._secondNumber = secondNumber;
};

Calculator = _.extend(Calculator, CanCompute);

Calculator.prototype.add = function() {
	return this._firstNumber + this._secondNumber;
};

Calculator.prototype.subtract = function() {
	return this._firstNumber - this._secondNumber;
};

var Display = function(canCompute) {
	this._calculator = canCompute ?? this.makeCalculator();
};

Display.prototype.printSum = function() {
	console.log(this._calculator.add());
};

Display.prototype.makeCalculator = function() {
	return new Calculator(1, 34);
};