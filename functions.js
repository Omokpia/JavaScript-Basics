// FUNCTIONS //

// A function is a piece of code that performs a specific action, and it can be reused multiple times.
// A function is a piece of reusable code that can be called with a specific name.

// Example of a function:

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

// parameters are placeholder that you use within your function.

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



const omoObj = {
    name: 'Omokpia',
    age: 25,
    sex: 'Male',
    nationality: 'Nigerian',
    futureCareer: 'Mobile Developer',
}


const powerObj = {
    name: 'Godspower',
    age: 20,
    sex: 'Male',
    nationality: 'Nigerian',
    futureCareer: 'Software Developer',
}


const peterObj = {
    name: 'Peter',
    age: 30,
    sex: 'Male',
    nationality: 'Ghanaian',
    futureCareer: 'Tech Bro',
}


const joyObj = {
    name: 'Joy',
    age: 33,
    sex: 'Female',
    nationality: 'Canadian',
    futureCareer: 'Footballer',
}

function introduction(personObject) {
    console.log('Hello, my name is', personObject.name, ', I am', personObject.age, 'years old,', 'I am a',
    personObject.nationality, ', and I want to be a professional', personObject.futureCareer, '.')

    console.log('I was born in the year', 2025 - personObject.age, '.')
}

introduction(omoObj)
introduction(powerObj)
introduction(peterObj)
introduction(joyObj)



