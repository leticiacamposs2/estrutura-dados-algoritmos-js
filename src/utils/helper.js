// This file exports utility functions that can be used across different exercises, providing common functionalities needed for the implementations.

export function isArrayEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

export function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.max(...arr);
}

export function findMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.min(...arr);
}

export function sumArray(arr) {
    if (!Array.isArray(arr)) return 0;
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export function averageArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return sumArray(arr) / arr.length;
}