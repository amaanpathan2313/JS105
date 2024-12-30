

// Perfect square : E.g: 28 = (1,2,4,7,14) all these numbers are diviser of 28 and 
// perfect square means : 1+2+4+7+14 = 28


function perfectSquare(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            console.log(i)
            sum += i;
        }
    }
    if(sum === num){
        return `${num} is a perfect square`;
    }else{
        return `${num} is not a perfect square`;
    }
}


let result = perfectSquare(56);

console.log(result);