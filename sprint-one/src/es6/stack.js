class Stack {
  constructor() {
    this.count = 0;
    this.storage = {}; 
  }
  
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  
  pop() {
    if (this.count > 0) {
      var last = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
      return last;
    }
  }
  
  size() {
    return this.count;
  }
 
}