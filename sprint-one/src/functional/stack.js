var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  
  // Specification:
    // Build a function to add stuff to our object
  // Justification:
    // Our object needs to be able to do things, and they need to added to it first
  // Explanation:
    // takes a string value and adds it to the top of the stack
  someInstance.push = function(value) {
    // assign count to our value's key
    storage[count] = value;
    count++;
  };
  
  // Specification:
    // Build a function to remove and give you the last value from our object
  // Justification:
    // Our object needs to be able to do things
    // & they need to delete to it 
  // Explanation:
    // takes a string value and remove
  someInstance.pop = function() {
    //check if there are any properties in storage
    if (count > 0 ) {
      // identify last key in storage
      var last = storage[count - 1];
      //and delete it
      delete storage[count - 1];
      // decrease count
      count--;
      return last;
    }
  };
  someInstance.size = function() {
    //returns the number of values in stack
    return count;
  };
  return someInstance;
};
