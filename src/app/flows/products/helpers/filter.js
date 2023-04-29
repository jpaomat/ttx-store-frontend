const { cleanText } = require('./textMethods');

const filterData = (filterText = '', parametersToFilter = [], dataList = []) => {
    filterText = cleanText(filterText).trim();

    if (filterText.length === 0) return dataList;

    return dataList.filter(elementList => {
        return parametersToFilter.some(keyParameter => cleanText(elementList[keyParameter]).indexOf(filterText) > -1);
    });
};

module.exports = {
    filterData,
};
