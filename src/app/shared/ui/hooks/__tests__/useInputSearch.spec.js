import { act, renderHook } from '@testing-library/react';
import { useInputSearch } from '../useInputSearch';
import { defaultMock } from './mocks';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    useLocation: () => ({search: { filter: 'alc' }}),
}));

describe('UserInputSearch custom-hook', () => {
    beforeEach(() => {});

    test('should render hook useInputSearch', () => {
        const { result } = renderHook(() => useInputSearch({
            initialDataList: []
        }));
        const { inputTextState, dataListState, onInputChange, onResetFilter } = result.current;
        expect(inputTextState).toBe('alc');
        expect(dataListState).toEqual(expect.any( Array ));
        expect( onInputChange ).toEqual( expect.any( Function ) );
        expect( onResetFilter ).toEqual( expect.any( Function ) );
    });

    test('should filter the list when the onInputChange method receives a value and is executed', () => {
        const { result } = renderHook(() => useInputSearch({
            parametersToSearch: ['brand'],
            initialDataList: defaultMock
        }));
        const { onInputChange } = result.current;
        act( () => {
            onInputChange({target: {value: 'Ace'}});
        });
        expect(result.current.dataListState[0].brand).toBe('Acer');
    });

    test('should return the complete list when the onInputChange method receives a empty value and is executed', () => {
        const { result } = renderHook(() => useInputSearch({
            parametersToSearch: ['brand'],
            initialDataList: defaultMock
        }));
        const { onInputChange } = result.current;
        act( () => {
            onInputChange({target: {value: ''}});
        });
        expect(result.current.dataListState.length).toBe(defaultMock.length);
    });

    test('should clean filter when onResetFilter  is executed', () => {
        const { result } = renderHook(() => useInputSearch({
            parametersToSearch: ['brand'],
            initialDataList: defaultMock
        }));
        const { onResetFilter } = result.current;
        act(()=> {
            onResetFilter(true);
        });
        expect(result.current.inputTextState).toBe('');
    });

});
