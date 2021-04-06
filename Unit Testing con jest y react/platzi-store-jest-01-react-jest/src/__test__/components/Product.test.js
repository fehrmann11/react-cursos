import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
//Simulación de producto
import ProductMock from "../../__mocks__/ProductMock";

describe('<Product />', ()=>{
    test('Render del componente Product',()=>{
        const product = shallow(
            <ProviderMock>
                <Product/>
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });
    //ver si está resolviendo el clic
    test('Comprobar el botón de comprar',()=>{
        //simula la función
        const handleAddTocart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product 
                product = {ProductMock}
                handleAddToCart={handleAddTocart}
                />
            </ProviderMock>
        );
        //simular que se hace clic
        wrapper.find('button').simulate('click');
        //se ejecute una vez
        expect(handleAddTocart).toHaveBeenCalledTimes(1);
    })
});

