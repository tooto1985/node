module.exports = function() {
    this.version = "1.0.5";
    var _name;
    this.setName = function(value) {
        _name = value;
    };
    this.getName = function() {
        return _name;
    }
}
