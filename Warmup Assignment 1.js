// Q1. 
// Given an array of N integers. Your task is to print the sum of all of the integers.
// Example 1:
// Input:4 [1 2 3 4]              Output:10
// Example 2:
// Input:6   [5 8 3 10 22 45]      Output:93

function SunofInteger(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(SunofInteger([1, 2, 3, 4]))
console.log(SunofInteger([5, 8, 3, 10, 22, 45]))


// Q2. 
// Given an array A[] of N integers and an index Key. Your task is to print the element present at
// index key in the array.
// Example 1:
// Input: 5 2 [10 20 30 40 50]        Output: 30
// Example 2:
// Input:7 4 [10 20 30 40 50 60 70]   Output: 50

function elementAtIndex(arr, key) {
    return arr[key]
}
console.log(elementAtIndex([10, 20, 30, 40, 50], 2))
console.log(elementAtIndex([10, 20, 30, 40, 50, 60, 70], 4))

// Q3. 
// Given a sorted array A of size N. Find the number of elements which are less than or equal to a 
// given element X. 
// Example 1: 
// Input: 6 9 [1 2 4 5 8 10]        Output: 5 
// Example 2: 
// Input: 7 2 [1 2 2 2 5 7 9]       Output: 4
function countLessEqual(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= x) {
            count++
        }
    }
    return count
}
console.log(countLessEqual([1, 2, 4, 5, 8, 10], 9))
console.log(countLessEqual([1, 2, 2, 2, 5, 7, 9], 2))

// Q4. 
// You are given an array A of size N. You need to print elements of A in alternate order 
// (starting from index 0).
// Example 1: 
// Input: 4 [1 2 3 4]           Output: 1 3 
// Example 2: 
// Input: 5 [1 2 3 4 5]         Output: 1 3 5

function printAlternate(arr) {
    let result = []
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i])
    }
    return result
}
console.log(printAlternate([1, 2, 3, 4]))
console.log(printAlternate([1, 2, 3, 4, 5]))

// Q5. 
// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal 
// to that of its index value (Consider 1-based indexing).
// Example 1: 
// Input: 5 [15 2 45 12 7]       Output: 2 
// Explanation: Only Arr[2] = 2 exists here.
// Example 2: 
// Input: 1 [1]                  Output: 1 
// Explanation: Here Arr[1] = 1 exists.

function valueEqualToIndex(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(valueEqualToIndex([15, 2, 45, 12, 7]))
console.log(valueEqualToIndex([1]))


// Q6.
// Given an array of size N and you have to tell whether the array is perfect or not. An array is said
//  to be perfect if it's reverse array matches the original array. If the array is perfect then print
//  "PERFECT" else print "NOT PERFECT".
//  Example 1:   Input : Arr[] = {1, 2, 3, 2, 1}           Output : PERFECT
//  Explanation:
//  Here we can see we have [1, 2, 3, 2, 1]
//  if we reverse it we can find [1, 2, 3, 2, 1]
//  which is the same as before.
//  So, the answer is PERFECT.
//  Example 2:      Input : Arr[] = {1, 2, 3, 4, 5}          Output : NOT PERFECT

function perfect(arr) {
    return arr.join('') === arr.slice().reverse().join('');
}

console.log(perfect([1, 2, 3, 2, 1]));
console.log(perfect([1, 2, 3, 4, 5]));


// Q7. 
//  Given an array of length N, at each step it is reduced by 1 element.In the first step the maximum element would be removed, while in the second step minimum element of the remaining array would be removed, in the third step again the maximum and so on.Continue this till the array contains only 1 element.And find the final element remaining in the array.
//     Example 1:
// Input: N = 7  A[] = { 7, 8, 3, 4, 2, 9, 5}
// Ouput: 5
// Explanation: In first step '9' would be removed, in 2nd step '2' will be removed, in third step '8' will be removed and so on.So the last remaining element would be '5'.
//     Example 2:
// Input: N = 8  A[] = { 8, 1, 2, 9, 4, 3, 7, 5}
// Ouput: 4



function maxmin(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let mid = Math.floor(arr.length / 2);
    return arr[mid];
}
console.log(maxmin([7, 8, 3, 4, 2, 9, 5]));

//  Q9.
//  Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms)
//  Example 1:  Input:  N = 1  Output: 1  Explanation: For n = 1, sum will be 1.
//  Example 2: Input: N = 5 Output: 15  Explanation: For n = 5, sum will be 1 + 2 + 3 + 4 + 5 = 15.

function sumofn(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(sumofn(5));
