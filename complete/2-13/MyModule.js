function MyModule() {
	var _name;
}
MyModule.prototype.version = "1.0.5";
MyModule.prototype.setName = function(value) {
	this._name = value;
};
MyModule.prototype.getName = function() {
	return this._name;
};
module.exports = MyModule;