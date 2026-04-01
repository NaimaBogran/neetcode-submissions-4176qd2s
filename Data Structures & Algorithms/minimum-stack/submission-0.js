class MinStack {
    constructor() {
        // Main stack stores actual values
        this.stack = [];
        
        // Min stack stores the minimum value at each level
        this.minStack = [];
    }

    push(val) {
        // Push value into main stack
        this.stack.push(val);

        // If minStack is empty, val is the minimum
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            // Compare new value with current minimum
            let currentMin = this.minStack[this.minStack.length - 1];
            
            // Store the smaller one
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop() {
        // Remove from BOTH stacks
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        // Return top of main stack
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        // Return top of min stack (current minimum)
        return this.minStack[this.minStack.length - 1];
    }
}