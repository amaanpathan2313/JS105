// Title: L0-Your first 2D Array Problem

// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M
// The value stored in N denotes the number of rows, and the value in M denotes the number of columns
// The 2D array is stored in a variable with the name arr
// You have to print the elements of the 2D array, row by row
// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be :
// 1 2
// 3 4
// 5 6

let arr = [
    [1,2],
    [3,4],
    [5,6]
];

// N denotes the number of rows : 2
// M denotes the number of columns : 2

for(let i = 0; i < arr.length; i++){
    let num = ""
    for(let j = 0; j < arr[i].length; j++){
        num += arr[i][j] + " ";
    }
    console.log(num);
}