class Queue {
  // Declare constructor function and add properties
  constructor() {
    // Set up variable to keep track of number of values in queue
    this.count = 0;
    // Property for saving holding values in queue
    this.storage = {}; 
  }
  
  // Method which adds value to queue; takes value as parameter
  enqueue(value) {
    // add value at next key of storage based on count
    this.storage[this.count] = value;
    // increment size of queue (count)
    this.count++;
  }
  
  // method which returns and deletes a value from front of queue
  dequeue() {
    // verify queue is not empty
    if (this.count > 0) {
      // capture the value of the first queue item 
      var first = this.storage[0];
      // delete the first item (FIFO)
      delete this.storage[0];
      // decrease size of queue
      this.count--;
      // move to all item to their new position in queue
      for (var key in this.storage) {
        var temp = this.storage[key];
        this.storage[+key - 1] = temp;
      }
      return first;
    }
   


  }
  
  size() {
    return this.count;
  } 

}
