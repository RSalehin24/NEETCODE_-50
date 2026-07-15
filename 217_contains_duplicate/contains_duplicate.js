function contains_duplicate(nums) {
    const unique_nums = new Set();

    for (const num of nums) {
        if(unique_nums.has(num))
            return true;

        unique_nums.add(num);
    }

    return false;
}
