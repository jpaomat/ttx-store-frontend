import { cleanText } from '../textMethods';

describe('Test textMethods helper', ()  => {
    test('should return text without accent', () => { 
        const text = 'TEST fácil';
        const textWithoutAccents = cleanText(text);
        expect(textWithoutAccents).toEqual('test facil');
     });
});