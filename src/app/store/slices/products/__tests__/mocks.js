const initiaStateMock = {
    page: 0,
    products: [],
    isLoadingData: false,
    filteredProducts: [],
};

const dataFilterMock = [
    {
        name: 'test',
    },
];

const productListMock = [
    {
        id: 'prod-1',
    },
    {
        id: 'prod-2',
    },
];

module.exports = {
    initiaStateMock,
    dataFilterMock,
    productListMock
};
