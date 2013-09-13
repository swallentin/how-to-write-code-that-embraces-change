var ACohesiveClass = function(firstNumber, secondNumber)  {
	this._firstNumber = firstNumber;
	this._secondNumber = secondNumber;
};

ACohesiveClass.prototype.add = function () {
	return this._firstNumber + this._secondNumber;
};


ACohesiveClass.prototype.subtract = function() {
	return this._firstNumber - this._secondNumber;
};

var acohesiveclassinstance = new ACohesiveClass(10, 20);

console.log(acohesiveclassinstance.add());
console.log(acohesiveclassinstance.subtract());
console.log(acohesiveclassinstance);
