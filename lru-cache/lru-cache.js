/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    this.cap = capacity
    
    this.head = {}
    this.tail = {}
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let object = this.map.get(key)
        object.prev.next = object.next
        object.next.prev = object.prev
        
        this.tail.prev.next = object
        object.prev = this.tail.prev
        object.next = this.tail
        this.tail.prev = object
        return object.value
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key) !== -1 ){
        this.tail.prev.value = value
    } else {
        if(this.map.size === this.cap){
            this.map.delete(this.head.next.key)
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
        }
        
        let newNode = {value, key}
        
        this.map.set(key,newNode)
        this.tail.prev.next = newNode
        newNode.next = this.tail
        newNode.prev = this.tail.prev
        this.tail.prev = newNode
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */