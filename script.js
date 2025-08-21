function mincost(arr) {
    // sort array initially
    arr.sort((a, b) => a - b);

    let cost = 0;

    // keep combining until one element remains
    while (arr.length > 1) {
        // take two smallest
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // insert sum back in sorted order
        let i = 0;
        while (i < arr.length && arr[i] < sum) i++;
        arr.splice(i, 0, sum);
    }

    return cost;
}

module.exports = mincost;

