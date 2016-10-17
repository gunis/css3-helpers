function BorderRadius (value) {
    var _borderRadius = this;
	this.parent = null;
	this.prefixes = null;

	this.getDefinition = function() {
		return _borderRadius.parent.getDefinition();
	};

	this.getName = function() {
		return _borderRadius.parent.name;
	};

	this.getValue = function() {
		return _borderRadius.parent.value;
	};

	this.init = function() {
		_borderRadius.parent = new CssProperty(_borderRadius, 'border-radius', value);
		_borderRadius.prefixes = [
			_borderRadius.parent.PREFIX.non,
			_borderRadius.parent.PREFIX.moz,
			_borderRadius.parent.PREFIX.webkit
		];
	}();
}