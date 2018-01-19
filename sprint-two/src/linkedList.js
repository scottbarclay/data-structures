
// Specificatipon
  // No inputs; output is a linked list, which is an object (that includes other objects
  // in series. No side effects.
// Justification
  // the function creates a series of linked objects
// Explanation
  // function will instantiate a linked list, including properties
  // and methods

var LinkedList = function() {
  // start with an empty list object to return
  var list = {};
  // assign properties to the object
  list.head = null;
  list.tail = null;

  // assign methods to object

  // add the new last object to an existing list
  list.addToTail = function(value) {
    //debugger;
    var newNode = Node(value);
    if (list.head !== null) {
      var currentTail = list.tail;
      list.tail = newNode;
      currentTail.next = newNode;      
    } else {
      list.head = newNode;
      list.tail = newNode;
    } 
    // verify if list is empty
  };

  // remove the first object and re-establish llnked list heirarchy and links
  list.removeHead = function() {
    if (list.head !== null) {
      var nodeToRemove = list.head.value;
      list.head = list.head.next;
      return nodeToRemove;   
    }  
  };

  // verify that an object exists in the list
  list.contains = function(target) {
    if (list.head === null) {
      return false;
    } else {
      var listNode = list.head;
      var testNode = function(listNode) {
        if(listNode.value === target){
          return true;
        }
        //if(listNode === list.tail && listNode.value !== target){
        if(listNode === undefined) {
          return false;
        }
        testNode(listNode.next);
      };
      testNode(listNode);
    }
  };
  return list;
};

// creates a new node to add to the list
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
