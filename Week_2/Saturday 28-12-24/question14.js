

function compairTwoNumbers(num1, num2){

    if(num1 > num2){
        console.log(`${num1} is larger than ${num2}`)
    }else if(num1 < num2){
        console.log(`${num2} is larger than ${num1}`)
    }else{
        console.log(`Both numbers are equal`)
    }
}

compairTwoNumbers(5, 10)
compairTwoNumbers(7, 7)
compairTwoNumbers(-1, -10)
compairTwoNumbers(0, 0)