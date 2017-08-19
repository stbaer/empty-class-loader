var returnVal = function(className) {
	"exports.__esModule = true;" +
	"exports.default = function () {function "+ className +"() {} };"
}

module.exports.pitch = function(ctx) {
	var splitPath = ctx.split('/');
	var className = splitPath[splitPath.length - 1].split('.')[0];
	this.cacheable();
	return returnVal(className);
};
