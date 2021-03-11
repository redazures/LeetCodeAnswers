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
        let found = this.map.get(key)
        found.next.prev = found.prev
        found.prev.next = found.next
        
        this.tail.prev.next = found
        found.prev = this.tail.prev
        found.next = this.tail
        this.tail.prev = found
        
        return found.value
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
    if(this.get(key) !==-1 ){
        this.tail.prev.value = value
    } else {
        if(this.map.size===this.cap){
            this.map.delete(this.head.next.key)
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
        }
        
        let newNode = {value,key}
        
        this.map.set(key,newNode)
        
        this.tail.prev.next = newNode
        
        newNode.prev = this.tail.prev
        newNode.next = this.tail
        
        this.tail.prev = newNode
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */