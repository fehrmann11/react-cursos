//traer la lógica de la prueba
//jest src/__test__/index.test.js lanzar esta prueba
const randomStrings = require('../index');



//permite describir una serie de pruebas para este proyecto.
describe('Probar funcionalidades de randomStrings',()=>{
    //dentro pueden haber más test
    test('Probar la funcionalidad',()=>{
        expect(typeof (randomStrings())).toBe('string');
    });
    test('Comprobar que no existe una ciudad',()=>{
        expect(randomStrings()).not.toMatch(/Santiago/);
    });
});