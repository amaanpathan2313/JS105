
//  Test Cases:

//  Test Case 1: original price = $25. Expected output: "The final price of the item is: 22.5"
//  Test Case 2: original price = $20. Expected output: "The final price of the item is: 20"
//  Test Case 3: original price = $15. Expected output: "The final price of the item is: 15"
//  Edge Cases:
//  Edge Case 1: What if the price is exactly $20? The output should show no discount applied.
//  Edge Case 2: What if the price is a negative number? The program should handle this by printing: "Invalid price, the price must be a non-negative number."

function calculateDiscount(cost) {
    if (cost > 20) {
        finalPrice = (cost * 0.9);
        return `The final price of the item is: ${finalPrice}`;
    }else if(cost < 0){
        return `"Invalid price, the price must be a non-negative number.`;
    }else{
        return `The final price of the item is: ${cost}`;
    }
}

console.log(calculateDiscount(25));
console.log(calculateDiscount(20));
console.log(calculateDiscount(15));
 