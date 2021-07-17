/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map()
    this.array = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }
    this.array.push(val)
    this.map.set(val, this.array.length-1)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        const index = this.map.get(val)
        this.map.set(this.array[this.array.length-1], index)
        this.map.delete(val)
        this.array[index] = this.array[this.array.length-1]
        this.array.length-=1
        return true
    }
    return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random()*this.array.length)
    return this.array[index]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */