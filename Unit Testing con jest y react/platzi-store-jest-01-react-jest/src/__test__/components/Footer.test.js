import React from 'react';
//me permite montarlo sobre el dom completo y trabajar por los items del componente.
import { mount } from 'enzyme';
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

//npm test 