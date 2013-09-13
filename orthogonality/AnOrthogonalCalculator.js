var Calculator = function (firstNumber, secondNumber) {
	this._firstNumber = firstNumber;
	this._secondNumber = secondNumber;
}

Calculator.prototype.add = function() {
	var sum = this._firstNumber + this._secondNumber;

	return sum;
};

var AlertMechanism = function() {
}

AlertMechanism.prototype.checkLimits = function(firstNumber, secondNumber) {
	var sum = new Calculator(firstNumber, secondNumber).add();
	if( sum > 100) {
		this.tooBigNumber(sum);
	} else {
		this.isValidNumber(sum);
	}
};

AlertMechanism.prototype.tooBigNumber = function(sum) {
	console.log(sum, 'is to big!');
};

AlertMechanism.prototype.isValidNumber = function(sum) {
	console.log(sum, 'is a valid number');
};


var alertMechanism = new AlertMechanism();
alertMechanism.checkLimits(10, 91);
alertMechanism.checkLimits(10, 90);