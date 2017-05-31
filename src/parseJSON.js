// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var index = 0;
  var char = json.charAt(index);

  // parse strings
  var stringParser = function() {

  };
  // parse numbers
  var numberParser = function() {

  };
  // parse arrays
  var arrayParser = function() {

  };
  // parse objects
  var objectParser = function() {

  };
  // parse booleans
  var booleanParser = function() {

  };
  // parse null
  var nullParser = function() {

  };


  var parser = function() {
    if (char === '"') {
      return stringParser();
    } else if (char >= '0' && char <= '9') {
      return numberParser();
    } else if (char === '[') {
      return arrayParser();
    } else if (char === '{') {
      return objectParser();
    } else if (char === 't' || char === 'f') {
      return booleanParser();
    } else {
      return nullParser();
    }
  }

};
