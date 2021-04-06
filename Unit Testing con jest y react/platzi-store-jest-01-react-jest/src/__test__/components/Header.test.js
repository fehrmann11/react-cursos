import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import {create } from 'react-test-renderer';
import Header from '../../components/Header';

/*shallow permite traer elementos y tratarlos como una
unidad. Si necesito algo particular del componente y no todo. */

describe('<Header />', ()=>{
    test('Render del componente Header',()=>{
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test('Render del Título',()=>{
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual("Platzi Store");
    })
})

describe('Header SnapShot', ()=>{
    test('Comprobar el SnapShot de Header',()=>{
      const header = create(
          <ProviderMock>
              <Header/>
          </ProviderMock>
      );
      /*Si no existe el snapshot lo crea, si está 
      creado lo comprueba en las pruebas. */
      expect(header.toJSON()).toMatchSnapshot();
    });
  });

