class MyHashMap {
    constructor() {
        this.size = 1000;

        // Create buckets (array of arrays)
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }

    // Hash function
    hash(key) {
        return key % this.size;
    }

    put(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists
        for (let pair of bucket) {
            if (pair[0] === key) {
                // Update value
                pair[1] = value;
                return;
            }
        }

        // If not found, add new pair
        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return -1; // not found
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}