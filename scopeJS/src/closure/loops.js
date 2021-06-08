//var = 10 con let = 0,1,2,3,4,5,6,7,8,9
const anotherFunction = () => {
    for(let i = 0; i< 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();