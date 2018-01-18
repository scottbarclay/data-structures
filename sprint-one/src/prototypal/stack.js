var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    if (this.count > 0 ) {
      // identify first key in storage
      var last = this.storage[this.count - 1];
      //and delete it
      delete this.storage[last];

      // decrease count
      this.count--;
      return last;
    }
  },

  size: function() {
    return this.count;
  }
};

