const array = [3, 4, 5, 6]

newArray = array.map(a => a * a)

console.log(newArray);


let array2 = array.forEach(b => b * 10)

console.log(array2);


//2. Ability to chain other methods
const arrayNick = [5, 3, 8]
//arrayNick.forEach(a=>a*a).reduce((total,value)=>(total + value))

let arrayNick2 = arrayNick.map(x => x * x).reduce((total, value) => (total + value))

console.log(arrayNick2);

//Mutability

/*
The map() method returns an entirely new array with transformed elements and the same amount 
of data. In the case of forEach(), even if it returns undefined, it will mutate the original array with the callback
*/


