import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers',()=>{
    test('Retornar initial State',()=>{
        //El objeto que devuelve es vacío
        expect(reducer({},'')).toEqual({});
    });

    test('ADD_TO_CART',()=>{
        const initialState = {
            cart: []
        }
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload,
        }
        //debe tener esta forma
        const expected = {
            cart:[
                ProductMock
            ],
        };
        expect(reducer(initialState,action)).toEqual(expected);
    })
});


