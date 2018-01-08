// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = '';
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean' || obj === null){
    return str + obj;
  } else if (typeof(obj) === 'string'){
    return addQuotationMarks(obj);
  } else if (typeof(obj) === 'object') {
    if (Array.isArray(obj)) {
      str += '[';
      if (obj.length > 0) {
        for (var i = 0; i < obj.length; i++) {
          str += (i === 0) ? '' : ',';
          str += stringifyJSON(obj[i]);
        }
      } 
      return str + ']';
    } else {
      str += '{';
      var entries = Object.entries(obj);
      if (entries.length > 0) {
        for (var i = 0; i < entries.length; i++) {
          var key = entries[i][0];
          var value = entries[i][1];
          if (key === 'undefined' || key === 'functions') {
            continue;
          }
          str += (i === 0) ? '' : ',';
          str += addQuotationMarks(key) + ':' + stringifyJSON(value);
        }
      } 
      return str + '}';
    }
  } else if (obj === undefined) {
    return obj;
  }
};

var addQuotationMarks = function(str) {
  return '"' + str + '"';
}
