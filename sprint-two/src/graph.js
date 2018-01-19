

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.edges = [];
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newGraphNode = new Graph(node);
  this.nodes.push(newGraphNode); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node && result === false) {
      result = true;       
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === node) {
        this.nodes.splice(i, 1);
      }
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //initialize return value;
  var result = false;


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {


};

// this is the recursive function
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


