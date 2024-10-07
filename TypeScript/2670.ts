function distinctDifferenceArray(nums: number[]): number[] {
    let numsLength: number = nums.length;
    
    let prefixCount: number[] = [];
    let seenPrefix: Set<number> = new Set();

    let suffixCount: number[] = [];
    let seenSuffix: Set<number> = new Set();

    for (let i = 0; i < numsLength; i++) {
        seenPrefix.add(nums[i]);
        prefixCount.push(seenPrefix.size);
    }

    for (let i = numsLength - 1; i >= 0; i--) {
        suffixCount.push(seenSuffix.size);
        seenSuffix.add(nums[i]);
    }

    suffixCount.reverse();

    let diff: number[] = [];
    for (let i = 0; i < numsLength; i++) {
        diff.push(prefixCount[i] - suffixCount[i]);
    }

    return diff;
}
