import React from 'react';
//me permite montarlo sobre el dom completo y trabajar por los items del componente.
import { mount } from 'enzyme';
import {create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  //paso el componente para que lo monte
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  //titulo haga render
  test('Render del Título', () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  })
});

describe('Footer Snapshot', ()=>{
  test('Comprobar la UI del componente Footer',()=>{
    //No está conectado con el provider!! por eso no necesita estár conectado
    const footer = create(<Footer/>);
    /*Si no existe el snapshot lo crea, si está 
    creado lo comprueba en las pruebas. */
    expect(footer.toJSON()).toMatchSnapshot();
  })
});

//npm test 