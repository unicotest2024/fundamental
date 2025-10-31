let a = [];

let b = [2, 7, 7]

let c = new Array(9, 5, 6)


//console.log(c);

// console.log(b[1]);

// console.log(c[1]);

// console.log(b[0]);

// console.log(c[c.length - 1]);


//c[1] = 10;

//console.log(c);

//c.push(9,77,55)

//c.unshift(23,34)
//console.log(c);


b.push(777, 999)

b.unshift(43, 88)


//console.log(b);

//b.pop();

//b.shift()

//b.splice(1,2)

console.log(b);

b.length = 10;

console.log(b);

b.length = 4;

console.log(b)

for (i = 0; i < b.length; i++) {

    if ((b[i]) % 2 == 0) {
        console.log('b' + b[i]);
    }

}


b.forEach(element => {

    //console.log(element)

    if (element % 2 == 0) {
        console.log(element,"foreach");
    }
    
});

b.forEach(element =>{

    if(element%2){
        console.log(element,"eachfor");
        
    }
})


//concatArray = b.concat(c)

//console.log(concatArray);


//console.log(concatArray.toString())

//console.log(typeof concatArray);


console.log(Array.isArray(b))

console.log(b instanceof Array,'mmmmm');


console.log(c.join(''))

console.log(c.join('*'));






















