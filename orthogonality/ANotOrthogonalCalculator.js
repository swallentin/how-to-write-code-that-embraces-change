var AlertMechanism = function() {
}

AlertMechanism.prototype.tooBigNumber = function(sum) {
	console.log(sum, 'is to big!');
};


var Calculator = function (firstNumber, secondNumber) {
	this._firstNumber = firstNumber;
	this._secondNumber = secondNumber;
}


Calculator.prototype.add = function() {
	var sum = this._firstNumber + this._secondNumber;

	if(sum > 100)
		new AlertMechanism().tooBigNumber(sum);

	return sum;
};

var calculator = new Calculator(10, 91);

calculator.add();

calculator = new Calculator(10, 89);
calculator.add();