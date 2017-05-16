// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "string"){
    return '"' + obj +'"';
  }else if(Array.isArray(obj)){
    obj = obj.map(function(ele){
      return stringifyJSON(ele);
    });
    return "[" + obj + "]";
  }else if(obj === null ||  typeof obj === "number" || typeof obj === "boolean"){
    return '' + obj;
  }else if(typeof obj === "object"){
    var stringifyProperties = [];
    for(var prop in obj){
      if(typeof obj[prop] === 'undefined' || typeof obj[prop] === 'function'){
        return '{}';
      }

      stringifyProperties.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
    }
    return "{" + stringifyProperties + "}";
  }
};

