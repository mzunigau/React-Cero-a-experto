import '@testing-library/jest-dom';
import {
    getSaludo
} from '../../base/02-template-string';

describe('Pruebas en 02-templeate-string.js', () => {

    test('getSaludo debe retornar Hola Fernando!', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    test('getSaludo debe retornar Hola Ricardo!', () => {
        const nombre = 'Carlos';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

})