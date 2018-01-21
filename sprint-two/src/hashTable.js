

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// considerations:
// does the key already exist in the limited array?
 //console.log(storage);
 // we're changing the value of the key in this case

HashTable.prototype.insert = function(k, v) {
  //debugger;
  // calling the hashing function for the index of the input key
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  
  this._storage.set(index, tuple);
};

HashTable.prototype.retrieve = function(k) {
  // key will pass through hashing function, 
  // which returns the same hash every time for that key
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;
  var tuple = this._storage.get(index);
//debugger;
  if (tuple !== undefined && tuple[0] === k) {
    value = tuple[1];
  }
  return value;  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // delete the key/value array at the index returned by the hashed key
  debugger;
  var key = k;
  this._storage.each(function(tuple, position, storage) {
    if (tuple !== undefined && tuple[0] === key) {
      storage.splice(tuple, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


