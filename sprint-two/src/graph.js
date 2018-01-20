

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
    if (this.nodes[i].value === node) {
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

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //initialize return value;
  var result = false;
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        if (this.nodes[i].edges.includes(toNode)) {
          result = true;
        }
      }
    }
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        this.nodes[i].edges.push(toNode);
      }
      if (this.nodes[i].value === toNode) {
        this.nodes[i].edges.push(fromNode);
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        var fNode = this.nodes[i];
      }
      if (this.nodes[i].value === toNode) {
        var tNode = this.nodes[i];
      }
    }
    var tNodeIndex = fNode.edges.indexOf(tNode);
    var fNodeIndex = tNode.edges.indexOf(fNode);
    fNode.edges.splice(tNodeIndex, 1);
    tNode.edges.splice(fNodeIndex, 1);       
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
debugger;
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


