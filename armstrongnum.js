

// Arm Strong Number : 370 : 3cube + 7 cube + 0 cube === 370

// we use % 10 to get last number & /10 to all number other then last number   370
                                                                    //         /\
                                                                   //  370/10 /  \ 370 % 10 = last digit
                                                                  //         /    \
function armstrongnumber(num){                                   //         37     0   
    
let n = num;
let sum = 0;
    while (n > 1) {
        let rem = n % 10;
        sum += rem ** 3;
        n = Math.floor(n / 10)
    } // while loop
    if (num === sum) {
        console.log(`${num} is armstrong Nmber`);
    } else {
        console.log(`${num} is not a armstrong Nmber`);
    }

} // function

armstrongnumber(370);    // is armstrong Nmber`
armstrongnumber(371);    // is armstrong Nmber`
armstrongnumber(350);    // is not a armstrong Nmber`

