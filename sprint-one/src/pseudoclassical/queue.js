var Queue = function() {  
  this.storage = {};
  this.count = 0;  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.count;
};



