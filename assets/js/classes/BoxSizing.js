function BoxSizing (value) {
    var _boxSizing = this;
	this.parent = null;
	this.prefixes = null;

	this.getDefinition = function() {
		return _boxSizing.parent.getDefinition();
	};

	this.getName = function() {
		return _boxSizing.parent.name;
	};

	this.getValue = function() {
		return _boxSizing.parent.value;
	};

	this.init = function() {
		_boxSizing.parent = new CssProperty(_boxSizing, 'box-sizing', value);
		_boxSizing.prefixes = [
			_boxSizing.parent.PREFIX.non,
			_boxSizing.parent.PREFIX.moz,
			_boxSizing.parent.PREFIX.webkit
		];
	}();
}