const defaultMock = {
    selector: 'test',
    label: 'Multiselect test',
    options: [{
        codeName: 'codeTest1',
        code: '123',
        name: 'Test 1'
    },
    {
        codeName: 'codeTest2',
        code: '542',
        name: 'Test 2'
    },
    {
        codeName: 'codeTest3',
        code: '454',
        name: 'Test 3'
    }],
    selectedValues: [{
        codeName: 'codeTest3',
        code: '454',
        name: 'Test 3'
    }],
    displayValue: 'name',
    onSelect: () => { },
    setSelectorDefaultValues: () => { }
};

module.exports = {
    defaultMock
};
