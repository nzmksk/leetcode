function twoSum(nums: number[], target: number): number[] | undefined {
  let cache: Map<number, number> = new Map();

  for (let indexA = 0; indexA < nums.length; indexA++) {
    let complementNumber = target - nums[indexA];

    if (cache.has(complementNumber)) {
      let indexB = cache.get(complementNumber);

      if (indexB !== undefined) {
        return [indexA, indexB];
      }
    }

    cache.set(nums[indexA], indexA);
  }
}
