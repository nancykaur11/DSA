// Q1. 
// Given an array of N integers. Your task is to print the sum of all of the integers.
// Example 1:
// Input:4 [1 2 3 4]              Output:10
// Example 2:
// Input:6   [5 8 3 10 22 45]      Output:93

function SunofInteger(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
console.log(SunofInteger([1,2,3,4]))
console.log(SunofInteger([5,8,3,10,22,45]))


// Q2. 
// Given an array A[] of N integers and an index Key. Your task is to print the element present at
// index key in the array.
// Example 1:
// Input: 5 2 [10 20 30 40 50]        Output: 30
// Example 2:
// Input:7 4 [10 20 30 40 50 60 70]   Output: 50

function elementAtIndex(arr, key){
    return arr[key]
}
console.log(elementAtIndex([10,20,30,40,50],2))
console.log(elementAtIndex([10,20,30,40,50,60,70],4))

// Q3. 
// Given a sorted array A of size N. Find the number of elements which are less than or equal to a 
// given element X. 
// Example 1: 
// Input: 6 9 [1 2 4 5 8 10]        Output: 5 
// Example 2: 
// Input: 7 2 [1 2 2 2 5 7 9]       Output: 4
function countLessEqual(arr, x){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=x){
            count++
        }
    }
    return count
}
console.log(countLessEqual([1,2,4,5,8,10],9))
console.log(countLessEqual([1,2,2,2,5,7,9],2))

// Q4. 
// You are given an array A of size N. You need to print elements of A in alternate order 
// (starting from index 0).
// Example 1: 
// Input: 4 [1 2 3 4]           Output: 1 3 
// Example 2: 
// Input: 5 [1 2 3 4 5]         Output: 1 3 5

function printAlternate(arr){
    let result=[]
    for(let i=0;i<arr.length;i+=2){
        result.push(arr[i])
    }
    return result
}
console.log(printAlternate([1,2,3,4]))
console.log(printAlternate([1,2,3,4,5]))

// Q5. 
// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal 
// to that of its index value (Consider 1-based indexing).
// Example 1: 
// Input: 5 [15 2 45 12 7]       Output: 2 
// Explanation: Only Arr[2] = 2 exists here.
// Example 2: 
// Input: 1 [1]                  Output: 1 
// Explanation: Here Arr[1] = 1 exists.

function valueEqualToIndex(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===i+1){
            result.push(arr[i])
        }
    }
    return result
}
console.log(valueEqualToIndex([15,2,45,12,7]))
console.log(valueEqualToIndex([1]))
