/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity
    this.map = new Map()
    
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
        let obj = this.map.get(key)
        obj.prev.next = obj.next
        obj.next.prev = obj.prev
        
        obj.prev = this.tail.prev
        obj.next = this.tail
        
        this.tail.prev.next = obj
        this.tail.prev = obj
        
        return obj.value
    }else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key) !== -1){
        this.tail.prev.value = value
    }else{
        if(this.map.size === this.cap){
            this.map.delete(this.head.next.key)
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
        }
        
        let newNode ={ value,key }
        
        this.map.set(key, newNode)
        
        newNode.next = this.tail
        newNode.prev = this.tail.prev
        this.tail.prev.next = newNode
        this.tail.prev = newNode
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */