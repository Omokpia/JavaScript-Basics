// // DATA TYPES

// //WE HAVE TWO (2) DATA TYPES IN JAVASCRIPT
// // 1) PRIMITIVE DATA TYPE
// // 2) REFERENCE DATA TYPE


// // FIVE (5) TYPES OF PRIMITIVE DATA TYPE
// // 1) STRING
// // 2) NUMBER
// // 3) BOOLEAN
// // 4) NULL
// // 5) UNDEFINED
// // 6) SYMBOL (ES6)

// // 1) STRING: 

// // Anything inside of a quote either single quote ('') or double quote ("") is a string.

// // Example:

// // let firstName = "Godspower";
// // let lastName = "Omokpia";
// // let favColor = 'white'
// // let bills = '1000000'

// // // 2) NUMBER:

// // // Numbers can be integers either positive or negative or floating point numbers.

// // // Example:
// // let age = 25;
// // let height = 5.9;
// // let temperature = -10;
// // let cgpa = 4.59
// // let price = 1500;

// // // 3) BOOLEAN:

// // // Boolean represents a logical entity and can have two values: true or false.

// // // Example:

// // let isMarried = false
// // let isEmployed = true
// // let isStudent = false
// // let isAvailable = true

// // // OPETATIONS ON STRINGS

// // // Concatenation: Joining two or more strings together
// // let fullName = firstName + " " + lastName; 

// // console.log(fullName)

// // // operations on numbers
// // // Add (+), Subtract (-), Multiply (*), Divide (/), Get Remainder (%)

// // console.log(5 + 3)
// // console.log(10 - 4)
// // console.log(6 * 7)
// // console.log(20 / 4)
// // console.log(10 % 3)

// // // math. methods library

// // console.log(Math.sqrt(16))
// // console.log(Math.pow(2, 3))// 2 raised to the power of 3


// // operations on booleans


// // let age1 = 25;
// // let legalAge1 = 18;

// // console.log(age1 > legalAge1);

// // let age2 = 16;
// // let legalAge2 = 18;
// // console.log(age2 > legalAge2);

// // Logical AND (&&), Logical OR (||), Logical NOT (!)

// let johnAge = 40
// let janeAge = '40'
// console.log(johnAge == janeAge);
// console.log(johnAge === janeAge);  // The '===' operator checks for both value and type equality, so this will return false because johnAge is a number and janeAge is a string.    


// // comparison operators
// //Greater Than (>), Less Than (<), Greater Than or Equal (>=), Less Than or Equal (<=)

// const LEGALAGE = 18;

// janeAge = 19 // Reassigning janeAge to a number for comparison

// console.log('Can Jane vote?:', janeAge >= LEGALAGE);

// // Logical operators
// // Logical operators are used to combine or modify boolean values.
// //example of logical operators include:

// // AND (&&), OR (||), NOT (!)

// // AND (&&) returns true if both operands (values or variables) are true
// // Example:

// // console.log('--------AND OPERATOR:-------');

// let x = true;
// let y = true;
// let a = false;
// let b = false;

// // console.log(true && true);  
// // console.log(true && false); 
// // console.log(false && true); 
// // console.log(false && false);

// // console.log('z = ', x && y); 
// // console.log('z = ', x && a);
// // console.log('z = ', a && b);

// // console.log(janeAge >= LEGALAGE && johnAge >= LEGALAGE)





// // OR (||) returns true if at least one operand is true

// // Example:
// console.log('--------OR OPERATOR:-------');


// console.log(true || true);  
// console.log(true || false); 
// console.log(false || true); 
// console.log(false || false);


// // NOT (!) negates the value of the operand, turning true to false and vice versa

// // Example:

// console.log('--------NOT OPERATOR:-------');


// console.log(true);  
// console.log(false); 
// console.log(!true); 
// console.log(!false);

// // console.log(5 > 2)
// // console.log(! 5 > 2);

// // console.log(!! 5 > 2); // Double negation returns the original boolean value
// // console.log(! (! 5 > 2)) // This will return false because the inner negation turns true to false, and the outer negation turns it back to true.


// // REFERENCE DATA TYPE

// // Reference data types are more complex and can hold collections of values or more complex entities.

// // Random Access Memory (RAM) is used to store reference data types and it is made up of little memory gaps called addresses.

// // The main reference data types in JavaScript are:
// // 1) Array  2) Object

// // 1) Array: An array is a collection of items stored in a single variable. It can hold multiple values of different data types.

// // Example:

// let agesArray = [25, 30, 35, 40];
// let namesArray = ['Alice', 'Bob', 'Charlie', 'mango', 'banana', 'God', 25, 54, true, false];

// // Arrays can hold mixed data types
// // Arrays are zero-indexed, meaning the first element is at index 0
// // Arrays can be accessed using their index
// // Arrays can be modified by adding, removing, or changing elements
// // Arrays can be iterated over using loops or array methods
// // Arrays are usually inside square brackets []

// // 2) Object: An object is a collection of key-value pairs, where each key is a string (or Symbol) and the value can be any data type, including other objects or arrays.
// // Objects are used to represent real-world entities and their properties.
// // Objects can be created using object literals or constructors.
// // Objects can be accessed using dot notation or bracket notation.
// // Objects can be modified by adding, removing, or changing properties
// // Objects are usually inside curly braces {}
// // Objects are used to store related data and functionality together

// // Example:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     sex: "Male",
//     age: 30,
//     isEmployed: true,
//     hobbies: ['reading', 'traveling', 'coding'],
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         country: 'Nigeria'
//     }
// };

// // NOTE: Almost everything in JavaScript is an object, including arrays and functions.

// // console.log('ages Array:', agesArray);
// // console.log('names Array:', namesArray);

// // Operations on Arrays

// let fruitsArray = ['apple', 'banana', 'orange', 'mango', 'grape', 'kiwi'];
// console.log('items in fruits in Array: ', fruitsArray.length);
//  // Adds 'pineapple' to the end of the array and returns the new length


// let fruitArray = ['apple', 'banana', 'orange', 'mango', 'grape']

// console.log("Items in this array ", fruitArray)
// fruitArray.push("strawberry")
// fruitArray.unshift("kiwi")
// console.log(fruitArray)

// ARRAY METHODS//
// Array methods are functions that can be called on arrays to perform various operations such as adding, removing, or transforming elements. Here are some common array methods:

// console.log(fruitArray[0])
// // console.log(fruitArray.length)
// console.log(fruitArray[fruitArray.length -1]) // Accessing the last element of the array

// console.log(fruitArray.toString()); // Converts the array to a string
// console.log(fruitArray.join(' * ')); // Joins the array elements into a string

// fruitArray.map((fruit, index) => {
//     console.log(index , ':' , fruit)
// })
// The `map` method creates a new array by applying a function to each element of the original array

// fruitArray.map((fruit, index) => {
//     console.log(index + 1, ":", fruit)
// })


//OBJECT METHODS//

// Object methods are functions that can be called on objects to perform various operations such as accessing, modifying, or deleting properties. Here are some common object methods:
// Object is a data structure like an array, it holds related values together. In js, object starts with curly braces `{}` and contains key-value pairs.

// example of an object:

let omokpiaObject = {
    firstName: 'Godspower',
    surname: 'Omokpia',
    occupation: 'Mobile Developer',
    sex: 'Male',
    club: 'Liverpool FC',
    age: 25,
    isEmployed: true,
    isMarried: false,
    hobbies: ['coding', 'reading', 'gaming']
}

console.log('*******OBJECT METHODS*******')
console.log(omokpiaObject.firstName, omokpiaObject.surname, omokpiaObject['occupation'])


