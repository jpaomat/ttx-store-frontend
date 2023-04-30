import { filterData } from '../filter';
import { defaultMock } from './mocks/filter';

describe('Test filter helper', () => {
    test('should return response filtered to the [id] parameter', () => {
        const parameterFilter = ['id'];
        const response = filterData('test-815', parameterFilter, defaultMock);
        expect(response[0].model).toEqual('Predator 8');
    });

    test('should return response filtered to the [brand, model] parameters', () => {
        const parameterFilter = ['brand', 'model'];
        const response = filterData('Liqu', parameterFilter, defaultMock);
        expect(response.length).toEqual(2);
    });

    test('should return the complete data if the search string is empty ', () => {
        const parameterFilter = ['id'];
        const response = filterData('', parameterFilter, defaultMock);
        expect(response.length).toEqual(defaultMock.length);
    });

    test('should return empty array when no parameters are sent', () => {
        const response = filterData();
        expect(response.length).toEqual(0);
    });
});