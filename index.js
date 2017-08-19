var returnVal = function(className) {
  "exports.__esModule = true;" +
  "var " + className + " = function () {function " + className + "() {} };" +
    "exports[" + className + "] = " + className + ";"
  "exports.default = " + className + ";"
}

var getClassName = function(filePath) {
  var splitPath = filePath.split('/');
  var className = splitPath[splitPath.length - 1].split('.')[0];
}

module.exports.pitch = function(filePath) {
  this.cacheable();
  return returnVal(getClassName(filePath));
};
