// Given amatrixwith N rows and M columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.
// 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

let result = "";

//   [1,2,3,4,5] = index no. [00,01,02,03] 
let i = 0;                         // row = 0
j = arr[i].length - 1;            // we travel reverse on this array
while (j >= 0) {
    result += (arr[i][j] + " ");
    j--;                           // decrease j value from last index of array to 0 index of array
}

//           ---------------------------------------------------------------

i += 1;                             // row = 1
j = 0;
while (j <= arr[i].length - 1) {    // we travel on this array
    result += (arr[i][j] + " ");
    j++;                            // incerase j value from 0 index of array to last index of array 
} 

//           ---------------------------------------------------------------

i += 1;                          // row = 2
j = arr[i].length - 1;           // we travel reverse on this array
while (j >= 0) {
    result += (arr[i][j] + " ");
    j--;                         // decrease j value from last index of array to 0 index of array
}

//           ---------------------------------------------------------------


i += 1;                                    // row = 1
j = 0;
while (j <= arr[i].length - 1) {            // we travel on this array
    result += (arr[i][j] + " ");
    j++;                                   // incerase j value from 0 index of array to last index of array 
} 



console.log(result);