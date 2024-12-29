

// You are provided with the radii of two circles. For the first circle, the radius is R1, and for the second circle, the radius is R2. You need to determine if the area of the first circle is greater than the second, and if the circumference of the first circle is greater than the second.

let radius_of_circle_1 = 3;
let radius_of_circle_2 = 4;

let area_of_circle_1 = (3.14 * (radius_of_circle_1)*(radius_of_circle_1));
let area_of_circle_2 = (3.14 * (radius_of_circle_2)*(radius_of_circle_2));

let circumference_of_circle_1 = (2 * 3.14 * radius_of_circle_1);
let circumference_of_circle_2 = (2 * 3.14 * radius_of_circle_2);


 if(area_of_circle_1 > area_of_circle_2){
    console.log("true");
 }else{
    console.log("false")
 }

 if(circumference_of_circle_1 > circumference_of_circle_2){
    console.log("true");
 }else{
    console.log("false")
 }