// Constructor
function Foo(bar) {
	this.bar = bar; // assign property value
}

// Class method
Foo.prototype.say = function() {
	return "I am " + this.bar + ". Hello world!";
};

// Export the Foo class
module.exports = Foo;