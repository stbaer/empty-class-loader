var returnVal = function(className) {
  return "exports.__esModule = true;" +
    "var " + className + " = function () {function " + className + "() {} };" +
		className + ".prototype.destroy = function () {};" +
    "exports." + className + " = " + className + ";" +
    "exports.default = " + className + ";"
}

var getClassName = function(filePath) {
  var splitPath = filePath.split('/');
  return splitPath[splitPath.length - 1].split('.')[0];
}

module.exports.pitch = function(filePath) {
  this.cacheable();
  return returnVal(getClassName(filePath));
};
