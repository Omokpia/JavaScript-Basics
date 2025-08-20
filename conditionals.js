// Conditionals are simply decision making ability.
// They allow us to execute different code based on certain conditions.

let omoObj = {
    nationality: 'Nigerian',
    age: 15
}


let folaObj = {
    nationality: 'Canadian',
    age: 25
}


let dorisObj = {
    nationality: 'Nigerian',
    age: 20
}

// Check omo's eligibility to vote in the 2025 Nigerian elections


if(omoObj.nationality == 'Nigerian' && omoObj.age >= 18){
    console.log('Omo is eligible to vote in the 2025 Nigerian elections');

}


else{
    console.log('Omo is not eligible to vote in the 2025 Nigerian elections');

}

// Check fola's eligibility to vote in the 2025 Nigerian elections

if(folaObj.nationality == 'Nigerian' && folaObj.age >= 18){
    console.log('Fola is eligible to vote in the 2025 Nigerian elections');

}


else{
    console.log('Fola is not eligible to vote in the 2025 Nigerian elections');

}

// Check doris's eligibility to vote in the 2025 Nigerian elections

if(dorisObj.nationality == 'Nigerian' && dorisObj.age >= 18){
    console.log('Doris is eligible to vote in the 2025 Nigerian elections');

}


else{
    console.log('Doris is not eligible to vote in the 2025 Nigerian elections');

}