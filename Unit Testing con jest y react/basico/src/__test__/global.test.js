const text = "Hola Mundo";

const fruits = ['manzana','melon','banana'];

//que va a pasar: Título, función de callback expect contiene el text, luego ver si está la palabra Mundo
test('Debe contener un texto',()=>{
    expect(text).toMatch(/Mundo/);
});

//ver si contiene un elemento llamado bananas
test('¿Tenemos una banana?',()=>{
    expect(fruits).toContain('banana');
});


//probar números
test('Mayor que',()=>{
    expect(10).toBeGreaterThan(9);
});

//bool
test('Verdadero',()=>{
    expect(true).toBeTruthy();
});

//probar callback
const reverseString = (str,callback)=>{
    //pone al reves el string que le paso
    callback(str.split('').reverse().join(''))
};

test('Probar un CallBack',()=>{
    reverseString('Hola',(str)=>{
        expect(str).toBe('aloH');
    });
});

//Promesas
const reverseString2 = str=>{
    //pone al reves el string que le paso
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
};

test('Probar una promesa',()=>{
    return reverseString2('Hola')
        .then(string=>{
            expect(string).toBe('aloH');
        })
});

//async await
test('Probar async/await',async()=>{
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH');
});

// //funciones que se ejecutan antes y después de cada prueba.
// afterEach(()=> console.log('Después de cada prueba'));
// afterAll(()=>console.log("Después de todas las pruebas"));

// beforeEach(()=>console.log('Antes de cada prueba'));
// beforeAll(()=>console.log('Antes de todas las pruebas'));