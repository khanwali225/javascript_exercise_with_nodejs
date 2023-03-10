// Have at least one True and one False result 
// for each of the following:

// Tests for equality and inequality with strings
let str1 = 'JavaScript Program';
let str2 = 'javascript program';

// compare both strings
let result = str1 === str2;

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


// • Tests using the lower case function
str1 = 'JavaScript Program';
str2 = 'javascript program';

// compare both strings
result = str1.toLowerCase() === str2.toLowerCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


// • Numerical tests involving equality and inequality, greater than and less
//  than, greater than or equal to, and less than or equal to
if(4+5===9){
    console.log("4+5 is equal to 9")
}
if(4+'5'!=="9"){
    console.log("not equal")
}

// • Tests using "and" and "or" operators

// • Test whether an item is in a array
    var arr=["hi","hello","morning"]
    if(arr.includes("hi")){
        console.log("'hi' is present in array")
    } else {console.log("not present")

    }
// • Test whether an item is not in a array
    if(arr.includes("evening")){
        console.log("evening is present in list")
    }
        console.log("evening is not present in list")