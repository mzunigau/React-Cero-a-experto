import '@testing-library/jest-dom';

import {
    getUser
} from "../../base/05-funciones";


describe('Pruebas de funciones 05', () => {
    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    });

});