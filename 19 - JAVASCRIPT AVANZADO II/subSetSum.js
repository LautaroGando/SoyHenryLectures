function subSetSum(nums, target) {

    let sums = new Set([0]);

    for (let num of nums) {
        
        const sumsCopy = [...sums];

        for (let sum of sumsCopy) {

            const newSum = num + sum;

            if (newSum === target) {

                return true;

            };

            sums.add(newSum);

        };
        
    };

    return false;

};

console.log(subSetSum([1, 2, 3, 4], 9));