const defaultMock = {
    routes: [
        {
            path: '/products',
            breadcrumb: 'Productos',
        },
        {
            path: '/products/details/:productId',
            breadcrumb: 'Details',
        },
    ]
};

module.exports = {
    defaultMock
};
