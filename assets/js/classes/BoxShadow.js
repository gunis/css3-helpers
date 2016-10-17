function BoxShadow (value) {
    var _boxShadow = this;
	this.parent = null;
	this.prefixes = null;

	this.getDefinition = function() {
		return _boxShadow.parent.getDefinition();
	};

	this.getName = function() {
		return _boxShadow.parent.name;
	};

	this.getValue = function() {
		return _boxShadow.parent.value;
	};

	this.init = function() {
		_boxShadow.parent = new CssProperty(_boxShadow, 'box-shadow', value);
		_boxShadow.prefixes = [
			_boxShadow.parent.PREFIX.non,
			_boxShadow.parent.PREFIX.moz,
			_boxShadow.parent.PREFIX.webkit
		];
	}();
}