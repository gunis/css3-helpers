function BorderRadius (value) {
    var _borderRadius = this;
	
	this.parent = null;
	this.universalDefinition = '';
	this.prefixes = null;
	
	
	this.render = function() {
		_borderRadius.universalDefinition = '';
		for (var index = 0, len = _borderRadius.prefixes.length; index < len; ++index) {
			_borderRadius.universalDefinition += _borderRadius.prefixes[index] + _borderRadius.getName() + ': ' + _borderRadius.getValue() + ';\n';
		}
		console.log(_borderRadius.universalDefinition);
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
			_borderRadius.parent.PREFIX.webkit,
			_borderRadius.parent.PREFIX.non
		];
	}();
}