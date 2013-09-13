var ANOTCohesiveClass = function(firstNumber, secondNumber)  {
	this._firstNumber = firstNumber;
	this._secondNumber = secondNumber;
};

ANOTCohesiveClass.prototype.setLength = function (length) {
	this._length = length;
};

ANOTCohesiveClass.prototype.setHeight = function( height) {
	this._width = height;
};

ANOTCohesiveClass.prototype.add = function () {
	return this._firstNumber + this._secondNumber;
};

ANOTCohesiveClass.prototype.subtract = function() {
	return this._firstNumber - this._secondNumber;
};

ANOTCohesiveClass.prototype.area = function() {
	return this._length * this._width;
};

var anotcohesiveclassinstance = new ANOTCohesiveClass(10, 12);
anotcohesiveclassinstance.setLength(22);
anotcohesiveclassinstance.setHeight(234);

console.log(anotcohesiveclassinstance);
console.log(anotcohesiveclassinstance.setHeight(10));
console.log(anotcohesiveclassinstance.setLength(12));
