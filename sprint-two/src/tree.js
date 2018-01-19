var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  _.extend(newTree, treeMethods);                    
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;
  var searchValue = function(node) {
    //check value root node-- === target?
    if (node.value === target) {
      result = true;
    } else {
      // recurse through each child
      for (var i = 0; i < node.children.length; i++) {
        searchValue(node.children[i]);
      }
      //return result;
    }
    return result;
  };
  return searchValue(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
