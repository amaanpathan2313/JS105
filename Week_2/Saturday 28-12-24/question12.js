
//  Write a program that calculates the area of a triangle given the base and the height. The area is determined using the formula: Area = (Base X Height)/2

//  Requirements: Calculate the area using the formula provided. Print the result in a formatted string like: "The area of the triangle is: X" where X is the calculated area.
 
//  Test Cases: Test Case 1: base = 10, height = 5. Expected output: "The area of the triangle is: 25.0"
//  Test Case 2: base = 0, height = 15. Expected output: "The area of the triangle is: 0.0"
//  Test Case 3: base = 8, height = 0. Expected output: "The area of the triangle is: 0.0"
 
function area_of_a_triangle(base, height){

    if(base < 0 || height < 0){
        console.log("Invalid number, base and height must be positive numbers");
        return;
    }

    let area = (base * height)/2;
    let Area = area.toFixed(1)
    if(base == 0 && height == 0){
        console.log(" a triangle with no area : ", Area);
        return;
    }
    
    console.log(Area);
     
}

area_of_a_triangle(0, 0);
area_of_a_triangle(10, 5);