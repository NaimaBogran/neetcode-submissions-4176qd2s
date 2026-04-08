class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //lower case string

        //return true or false

        //if the lengths are === 

        //s.length !== t.length
        //return false
        if(s.length !== t.length){
            return false
        }

       //split both strings into arr
       //sort arr
        //compare arr
        //if === return true
        //else return false
        console.log(s.split('').sort(), t.split('').sort())
        if(s.split('').sort().join('') === t.split('').sort().join('')){
            return true
        }else{
            return false
        }
    }
}
