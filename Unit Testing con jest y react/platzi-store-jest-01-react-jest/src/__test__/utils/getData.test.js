import getData from '../../utils/getData';

describe('Fetch Api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    //retorna la data
    test('Llamar una API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

        getData('https//google.com')
            .then((response) => {
                expect(response.data).toEqual('12345');
            });
        //la llamada a google esta siendo ejecutada, enviando los valores como debe ser.
        expect(fetch.mock.calls[0][0]).toEqual('https//google.com')
    });

});