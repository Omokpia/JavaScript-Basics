// // FUNCTIONS //

// // A function is a piece of code that performs a specific action, and it can be reused multiple times.
// // A function is a piece of reusable code that can be called with a specific name.

// // Example of a function:

// let number1 = 8
// let number2 = 10

// let number3 = 30
// let number4 = 25

// console.log('The sum of', number1, 'and', number2, 'is', number1 + number2);
// console.log('The sum of', number3, 'and', number4, 'is', number3 + number4);

// function SumOfTwoNumbers() {
//     console.log(number1 + number2);
// }

// SumOfTwoNumbers()

// // parameters are placeholder that you use within your function.

// function addition(num1, num2) {
//     console.log('this is from the addition function: ', num1 + num2);

// }

// addition(9, 10)
// addition(90, 110)
// addition(9, 55)
// addition(93, 1)

// function substraction(num1, num2) {
//     console.log('this is from the substraction function: ', num1 - num2);

// }

// substraction(90, 10)



// const omoObj = {
//     name: 'Omokpia',
//     age: 25,
//     sex: 'Male',
//     nationality: 'Nigerian',
//     futureCareer: 'Mobile Developer',
//     weight: 80,
//     height: 1.76784
// }


// const powerObj = {
//     name: 'Godspower',
//     age: 20,
//     sex: 'Male',
//     nationality: 'Nigerian',
//     futureCareer: 'Software Developer',
//     weight: 90,
//     height: 1.8288
// }


// const peterObj = {
//     name: 'Peter',
//     age: 30,
//     sex: 'Male',
//     nationality: 'Ghanaian',
//     futureCareer: 'Tech Bro',
//     weight: 50,
//     height: 1.64592
// }


// const joyObj = {
//     name: 'Joy',
//     age: 33,
//     sex: 'Female',
//     nationality: 'Canadian',
//     futureCareer: 'Footballer',
//     weight: 120,
//     height: 1.79832
// }

// function introduction(personObject) {
//     console.log('Hello, my name is', personObject.name, ', I am', personObject.age, 'years old,', 'I am a',
//     personObject.nationality, ', and I want to be a professional', personObject.futureCareer, '.')

//     console.log('I was born in the year', 2025 - personObject.age, '.')
// }

// introduction(omoObj)
// introduction(powerObj)
// introduction(peterObj)
// introduction(joyObj)


// function calculateBMIAndCategory(personObject) {
//     let BMI = personObject.weight / (personObject.height * personObject.height)

//     if(BMI > 30){
//         console.log(personObject.name, 'has a BMI value of:', BMI, 'and is obese.')
//     }
//     else if(BMI >= 25 && BMI <= 30){
//         console.log(personObject.name, 'has a BMI value of:', BMI,'and is overweight.')
//     }
//     else if(BMI >= 18.5 && BMI < 25){
//         console.log(personObject.name,'has a BMI value of:', BMI, 'and has a normal weight.')
//     }
//     else{
//         console.log(personObject.name, 'has a BMI value of:', BMI,'and is underweight.')
//     }

// }



// // To calculate BMI, divide your weight in kilograms by your height in meters squared 
// // (BMI = weight in kg / (height in m)²).

// // BMI Categories (Adults): Underweight: Below 18.5, Normal: 18.5 to 24.9, Overweight: 25.0 to 29.9
// // Obese: 30.0 and above



// calculateBMIAndCategory(omoObj)
// calculateBMIAndCategory(powerObj)
// calculateBMIAndCategory(peterObj)
// calculateBMIAndCategory(joyObj)

// RETURN A FUNCTION //

function convertCelsiusToKelvin(temp) {
    let newTemp = temp + 273.15
    return newTemp

    console.log(newTemp, 'This will never be executed')
}

let newValue = convertCelsiusToKelvin(30)
console.log('The new temperature in Kelvin is:', newValue);

console.log('The new temperature in Kelvin is:', convertCelsiusToKelvin(60));



















