
// HashTable will provide storage for key/value pairs
// providing insert, retrieval and removal of pairs.

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // get a hashed numeric index from the key  
  var index = getIndexBelowMaxForKey(k, this._limit);
  // store the pair in an array 
  var tuple = [k, v];
  // get the contents of the HashTable index
  var bucket = this._storage.get(index);
  console.log(bucket);
  // if there are no contents at the index,
  // an array will need to be added to contain tuples
  // to prevent collisions
  
  // if there are contents at the index...
  if (bucket !== undefined) {
    // see if existing tuple has the same key
    var keyExists = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = tuple;
        keyExists = true;
      }
    }
    if (keyExists === false) {
      // add the tuple to the container
      bucket.push(tuple);
    }
    // replace the existing container
    this._storage.set(index, bucket);
  } else {
    // create the container by wrapping the tuple in an array 
    tuple = [[k, v]];
    // add it at the HashTable index
    this._storage.set(index, tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  // key will pass through hashing function, 
  // which returns the same hash every time for that key
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value = undefined;
  
  // find the tuple with the key string
  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        value = bucket[i][1];
      }
    }
  }
  return value;  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
 
  // check for a bucket and remove the tuple containing the key
  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * HashTable.prototype.insert : O(1) = constant
 * HashTable.prototype.retrieve : O(n) = linear
 * HashTable.prototype.remove : O(n) = linear
 */


