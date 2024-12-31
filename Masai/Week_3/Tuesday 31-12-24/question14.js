
// Pattern Printing III

// **Problem Statement:**You are given a number stored in a variable with the name N You have to print the pattern as shown below according to the value stored in N For example, consider the value stored in N = 5, then the required pattern will be.


function starPrint(N) {

    let i = 0;
    let j = 0;

    let bag = "";
    while (i < N) {
        bag += "* ";
        i++;
    }
    console.log(bag);

    // --------------

    i = 1;
    while (i < N) {
        console.log("*");
        i++;
    }

    // -----------------

    i = 0;
    bag = "";
    while (i < N) {
        bag += "* ";
        i++;
    }
    console.log(bag);

}


starPrint(5);