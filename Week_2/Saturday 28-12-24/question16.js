




function CalculateBMI(weight, height) {

    if (height == 0) {
        console.log("Invalid input, height cannot be zero");
    } else if (weight < 0 || height < 0) {
        console.log("Invalid input, height and weight must be positive numbers.")
    } else {
        let bmi = weight / (height * height)
        let finalBMI = bmi.toFixed(2);
        console.log(`Your BMI is: ${finalBMI}`)
    }
}


CalculateBMI(70, 1.75);
CalculateBMI(55, 1.60);
CalculateBMI(90, 1.80);
CalculateBMI(70, 0);
CalculateBMI(-70, 1.75);