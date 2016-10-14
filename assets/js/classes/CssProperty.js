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

	this.render = function() {
		for (var index = 0, len = _cssProperty.child.prefixes.length; index < len; ++index) {
			console.log(_cssProperty.child.prefixes[index]);
		}
	};

	this.init = function() {
		_cssProperty.child = childObject;
		_cssProperty.name = name;
		_cssProperty.value = value;
	}();
}