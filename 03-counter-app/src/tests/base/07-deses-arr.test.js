import {
    retornaArreglo
} from "../../base/07-deses-arr";

describe('Pruebas en 07 deses arr', () => {


    test('debe de retornar un strnig y un numero ', () => {
        const [letras, numeros] = retornaArreglo();

        console.log(typeof letras);

        //expect(arr).toEqual(['ABC', 123]);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
});