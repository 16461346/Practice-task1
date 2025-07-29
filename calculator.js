let weight = 38; // কেজি
let height = 60; // ইঞ্চি

// ইঞ্চিকে মিটারে রূপান্তর
let height1 = height * 0.0254;

// BMI হিসাব
let bmiScore = weight / (height1 ** 2);

console.log('Your weight is ' + weight + ' Kg');
console.log('Your height is ' + height + ' Inch');
console.log('Your BMI Score is ' + bmiScore.toFixed(2));

if (bmiScore < 18.5) {
    console.log("Your body is Underweight");
} else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
    console.log("Your body is Normal weight");
} else if (bmiScore >= 25 && bmiScore <= 29.9) {
    console.log("Your body is Overweight");
} else {
    console.log("Your body is Obese");
}
