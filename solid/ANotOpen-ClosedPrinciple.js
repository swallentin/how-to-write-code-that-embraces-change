var Switch = function() {
	this._fan = new Fan();
};

Switch.prototype.turnOn = function() {
	this._fan.on();
};


Switch.prototype.turnOff = function() {
	this._fan.off();
};