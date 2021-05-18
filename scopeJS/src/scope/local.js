const helloWorld = () => {
    const hello = 'hello';
    console.log(hello);
}

helloWorld();

//ejemplo 2 ámbito léxico
var scope = "i am global";

const functionScope = () =>{
    var scope = "i am new scope";
    const func = () =>{
        return scope;
    }
    console.log(func());
};

functionScope();
console.log(scope);