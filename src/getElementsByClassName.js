// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document;
  var elementsWithClassName = [];
  var getRecursion = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementsWithClassName.push(element);
      console.log(element);
    }
    var children = element.childNodes;
    children.forEach(function(childNode){
      return getRecursion(childNode);
    });
  }

  getRecursion(body);
  return elementsWithClassName;
};
