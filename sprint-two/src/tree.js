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
  console.log(this);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
