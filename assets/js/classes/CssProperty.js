function CssProperty (childObject, name, value) {
    var _cssProperty = this;

	this.child = null;
	this.name = null;
	this.value = null;
	this.PREFIX = {
		non : '',
		moz : '-moz-',
		webkit : '-webkit-'
	};

	this.getDefinition = function() {
		var definition = '';
		for (var index = 0, len = _cssProperty.child.prefixes.length; index < len; ++index) {
			definition += _cssProperty.child.prefixes[index] + _cssProperty.name + ': ' + _cssProperty.value + ';\n';
		}

		return definition;
	};

	this.init = function() {
		_cssProperty.child = childObject;
		_cssProperty.name = name;
		_cssProperty.value = value;
	}();
}