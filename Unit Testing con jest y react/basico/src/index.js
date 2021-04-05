const cities = ['Ciudad de México','Bogotá','Lima','Buenos Aires','Guadalajara'];

const randomString = ()=> {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};


const reverseString2 = str=>{
    //pone al reves el string que le paso
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
};

module.exports = randomString;