const defaultMock = {
    brand: 'Hp',
	imgUrl: 'http:image-hp-test.com',
	model: 'test model',
	price: '110',
    options: {
        colors: [
            {
                code: 1000,
                name: 'Black'
            }
        ],
        storages: [
            {
                code: 2000,
                name: '16 GB'
            },
            {
                code: 2001,
                name: '32 GB'
            }
        ]
    }
};

module.exports = {
    defaultMock
};
