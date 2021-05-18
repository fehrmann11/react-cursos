//solo se puede acceder dentro del bloque en let y const
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2)
        console.log(fruits3)
    }
    console.log(fruits1)

}

fruits();
//resulta: 2,1 si fuera var 2,2
let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x)

//var = 10 con let = 0,1,2,3,4,5,6,7,8,9
const anotherFunction = () => {
    for(let i = 0; i< 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();