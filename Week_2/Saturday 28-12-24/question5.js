

// num1 > num2 && num1 > num3-> this operation prints true if num1 is greater than both num2 and num3, otherwise it prints false.
// num2 > num1 && num2 > num3 -> this operation prints true if num2 is greater than both num1 and num3, otherwise it prints false.
// num3 > num1 && num3 > num2 -> this operation prints true if num3 is greater than both num1 and num2, otherwise it prints false.


let num1 = 3;
let num2 = 7;
let num3 = 5;

if(num1 > num2 && num1 > num3){
    console.log("true");
}else{
    console.log("false")
}

if(num2 > num1 && num2 > num3){
    console.log("true");
}else{
    console.log("false")
}


if(num3 > num1 && num3 > num2){
    console.log("true");
}else{
    console.log("false")
}