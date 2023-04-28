
const getProductList = () => {
    fetch('https://itx-frontend-test.onrender.com/api/product')
        .then(response => response.json())
        .then(json => (json))
        .catch(error => console.error(error));
};

module.exports = {
    getProductList
};
