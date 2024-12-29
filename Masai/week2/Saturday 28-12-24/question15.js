





function simpleInterest(Principal, Rate, Time) {

    if (Principal < 0 || Rate < 0 || Time < 0) {
        console.log(`Invalid input, all values must be non-negative`);
    } else {
        let interest = (Principal * Rate * Time) / 100;
        console.log(`The simple interest is : ${interest}`);
    }
}

simpleInterest(1000, 5, 3)
simpleInterest(1500, 7, 5)
simpleInterest(0, 6, 2)
simpleInterest(0, -6, 2)