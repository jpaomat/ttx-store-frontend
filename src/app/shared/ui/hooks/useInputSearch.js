import { useEffect, useState } from 'react';
import { filterData } from '../../../flows/products/helpers/filter';
import { useLocation, useNavigate } from 'react-router-dom';

export const useInputSearch = ({ parametersToSearch = [], initialDataList = [] }) => {
    
    const navigate = useNavigate();
    const queryString = new URLSearchParams(useLocation().search);
    const filter = queryString.get('filter');
    const [inputTextState, setInputState] = useState(filter || '');
    const [dataListState, setDataListState] = useState(initialDataList);

    useEffect(() => {
        setDataListState(initialDataList);
    }, [initialDataList]);

    const onInputChange = ({ target }) => {
        const { value } = target;
        setInputState(value);
        navigate(`?filter=${value}`);
        if (value.length >= 3) {
            const filterDataList = filterData(value, parametersToSearch, initialDataList);
            setDataListState(filterDataList);
        } else {
            onResetFilter();
        }
    };
    
    const onResetFilter = (cleanInput = false) => {
        navigate('');
        setDataListState(initialDataList);
        if (cleanInput) setInputState(''); 
    };

    return {
        inputTextState,
        dataListState,
        onInputChange,
        onResetFilter,
    };
};