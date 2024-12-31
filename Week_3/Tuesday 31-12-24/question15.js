

//  Circular Traversal array :   |---|
                           //    |  -|   7 4 1 2 3 6 9 8
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

 // i use for row
 // j use for column


let bag = "";

{
let j = arr.length-1;                
while(j >= 0){  
     bag += (arr[j][0] + " ");   // 7, 4, 1
     j--;
    }
}

 i = 1;
while(i <= arr.length-1){
    bag += (arr[0][i]+" ");   // 2, 3
  i++;
}
  
j = 1;
while(j < arr.length){
    bag += (arr[j][arr.length-1]+ " ")   // 6, 9
    j++;
}

 j = arr.length-2;
 i -= 1;

 while(i > 1){
  bag += (arr[i][j] + " ");  // 8
 i--;
 }
 console.log(bag);