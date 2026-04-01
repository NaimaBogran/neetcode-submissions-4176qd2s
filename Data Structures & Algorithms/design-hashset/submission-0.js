class MyHashSet {
    constructor() {
        this.set = new Array(1000001).fill(false);
    }

    add(key) {
        this.set[key] = true;
    }

    remove(key) {
        this.set[key] = false;
    }

    contains(key) {
        return this.set[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
