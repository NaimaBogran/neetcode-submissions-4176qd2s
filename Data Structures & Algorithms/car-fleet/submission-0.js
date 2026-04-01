class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // Combine position and time to reach target
        let cars = []

        for (let i = 0; i < position.length; i++) {
            // time = distance / speed
            let time = (target - position[i]) / speed[i]
            cars.push([position[i], time])
        }

        // Sort cars by position descending (closest to target first)
        cars.sort((a, b) => b[0] - a[0])

        let stack = []

        for (let car of cars) {

            let time = car[1]

            // If stack empty OR this car takes longer than the fleet ahead,
            // it becomes a new fleet
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
            // Otherwise it joins the fleet ahead (do nothing)
        }

        // Number of fleets = size of stack
        return stack.length
    }
}