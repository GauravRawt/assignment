function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(number => number * 2);
    callback(result);
}
multiplyWithCallback([1, 2, 3, 4], (result) => {
    console.log(result);  // Output: [2, 4, 6, 8]
});
