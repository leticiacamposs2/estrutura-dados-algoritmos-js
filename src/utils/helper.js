function isArrayEmpty(arr) {
    return arr.length === 0;
}
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

module.exports = { isArrayEmpty, findMax, findMin, sumArray, averageArray };