import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//permite capturar las peticiones sin necesidades del fetch del navegador.
global.fetch = require('jest-fetch-mock');