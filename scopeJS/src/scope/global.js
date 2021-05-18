var hello = 'HELLO';
let world = 'hello world';
const helloWorld = 'holito';


const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

/* malas prácticas de programación. */

const hello = () =>{
    globalVar = 'im global'
}

hello();
console.log(globalVar)

const anotherFunction2 = () =>{
    var localVar = globalVar = 'i4Im  oiasdfj'
}
anotherFunction2()
console.log(globalVar)