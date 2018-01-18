var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    // identify first key in storage
    var last = this.storage[this.count - 1];
    //and delete it
    delete this.storage[last];
    // decrease count
    this.count--;
    return last;
  }
};

Stack.prototype.size = function() {
  return this.count;
};





