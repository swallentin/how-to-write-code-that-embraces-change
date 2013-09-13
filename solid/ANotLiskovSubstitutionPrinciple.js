var _ = require('underscore');

var Rectangle = function(height, width) {
	this._height = height;
	this._width = width;
};

Rectangle.prototype.setWidth = function(width) {
	this._width = width;
};

Rectangle.prototype.setHeight = function(height) {
	this._height = height;
};

Rectangle.prototype.area = function() {
	return this._height * this._width;
};

var Square = _.extend(Rectangle);

Square.area = function() {
	return this._height*2;
};

var rect = new Rectangle(10,5);
console.log(rect.area());

var square = new Square(5, 5);

square.setHeight(12);
console.log(square.area());
square.setWidth(5);
console.log(square.area());




