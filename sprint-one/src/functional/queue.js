var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0 ) {
      // identify first key in storage
      var first = storage[0];
      //and delete it
      delete storage[0];

      for (var key in storage) {
        var val = storage[key];
        storage[+key - 1] = val;
          
      }
      // decrease count
      count--;
      return first;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
