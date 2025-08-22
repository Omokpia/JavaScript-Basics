// // Conditionals are simply decision making ability.
// // They allow us to execute different code based on certain conditions.

// let omoObj = {
//     nationality: 'Nigerian',
//     age: 15
// }


// let folaObj = {
//     nationality: 'Canadian',
//     age: 25
// }


// let dorisObj = {
//     nationality: 'Nigerian',
//     age: 20
// }

// // Check omo's eligibility to vote in the 2025 Nigerian elections


// if(omoObj.nationality == 'Nigerian' && omoObj.age >= 18){
//     console.log('Omo is eligible to vote in the 2025 Nigerian elections');

// }


// else{
//     console.log('Omo is not eligible to vote in the 2025 Nigerian elections');

// }

// // Check fola's eligibility to vote in the 2025 Nigerian elections

// if(folaObj.nationality == 'Nigerian' && folaObj.age >= 18){
//     console.log('Fola is eligible to vote in the 2025 Nigerian elections');

// }


// else{
//     console.log('Fola is not eligible to vote in the 2025 Nigerian elections');

// }

// // Check doris's eligibility to vote in the 2025 Nigerian elections

// if(dorisObj.nationality == 'Nigerian' && dorisObj.age >= 18){
//     console.log('Doris is eligible to vote in the 2025 Nigerian elections');

// }


// else{
//     console.log('Doris is not eligible to vote in the 2025 Nigerian elections');

// }


// TRUTHY AND FALSY VALUES IN JAVASCRIPT //

// truthy values means, anything that is evaluated to a boolean and it is true, is a truthy value
// falsy values mean, anything that is evaluated to a boolean and it is false, is a falsy value.
// truthy values are values that evaluate to true in a boolean context
// falsy values are values that evaluate to false in a boolean context

// Truthy values examples:

// 1. true
// 2. any non-zero number (positive or negative)    
// 3. any non-empty string
// 4. any object (including arrays and functions)
// 5. any non-null value
// 6. any non-undefined value
// 7. Symbols
// 8. BigInt values (except 0n)
// 9. Infinity and -Infinity
// 10. Dates

// TRUTHY VALUES: true, non-empty strings, numbers, objects, arrays, functions, arrays.

// FALSY VALUES: false, empty strings,0, null, undefined, NaN

// if(true){

//     console.log('This is a truthy value');
// }

// console.log('5' + '5')

// console.log('5' - 4)

if(undefined){
    console.log('The if block is evaluated')
}

else if('omokpia'){
    console.log('The else if block is evaluated')
}

else{
    console.log('The else block is evaluated')
}

