var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    if (this.count > 0 ) {
      // identify first key in storage
      var first = this.storage[0];
      //and delete it
      delete this.storage[0];

      for (var key in this.storage) {
        var val = this.storage[key];
        this.storage[+key - 1] = val;
          
      }
      // decrease count
      this.count--;
      return first;
    }
  },

  size: function() {
    return this.count;
  }
};


