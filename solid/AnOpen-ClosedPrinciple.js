var Switchable = function() {
};

Switchable.prototype.on = function() {
	console.log("on");
};
Switchable.prototype.off = function() {
	console.log("off");
};

var Switch = function(switchable) {
	this._switchable = switchable;
};

Switch.prototype.turnOn = function() {
	this._switchable.on();
};


Switch.prototype.turnOff = function() {
	this._switchable.off();
};

var fan = new Switchable();
var _switchable = new Switch(fan);

_switchable.turnOff();
_switchable.turnOn();