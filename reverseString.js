//1. Reverse a String With Built-In Functions
function reverseString(string) {

    let splitString = string.split("")

    console.log(splitString);

    let reverseArray = splitString.reverse()

    console.log(reverseArray);

    let reverseString = reverseArray.join("")

    // console.log(reverseString);

    return reverseString;
}


console.log(reverseString('nikhil'))

//2. Reverse a String With a Decrementing For Loop

function reverseString1(str){

    let newStr = "";

    for(i = str.length - 1; i >= 0; i--){

        newStr += str[i];

    }

    return newStr;
}

console.log(reverseString1('khot'))