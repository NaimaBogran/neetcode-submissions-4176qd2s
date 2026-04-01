function topKFrequent(nums, k) {
  const freqMap = {};
  
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  return Object.keys(freqMap)
    .sort((a, b) => freqMap[b] - freqMap[a])
    .slice(0, k)
    .map(Number);
}class Solution {
  topKFrequent(nums, k) {
    const freqMap = {};
    
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let num in freqMap) {
      buckets[freqMap[num]].push(Number(num));
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) break;
      }
    }

    return result;
  }
}