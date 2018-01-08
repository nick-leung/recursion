// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var searchNodesForClassName = function(node, className) {
    var arr = [];
    if (node.classList && node.classList.contains('targetClassName')) {
      arr.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var temp = searchNodesForClassName((node.childNodes)[i], className);
        arr = (temp.length > 0) ? arr.concat(temp) : arr;
      }
    }
    return arr;
  }
  return searchNodesForClassName(document.body, className);
};