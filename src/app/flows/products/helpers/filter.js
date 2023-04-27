const removeAccents = (str) => {
    return str
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');
};

const cleanText = (text) => {
    return removeAccents(text.toLocaleLowerCase());
};

const filterData = (filterText = '', parametersToFilter = [], dataList = []) => {
    filterText = cleanText(filterText).trim();

    if (filterText.length === 0) return dataList;

    return dataList.filter(elementList => {
        return parametersToFilter.some(keyParameter => cleanText(elementList[keyParameter]).indexOf(filterText) > -1);
    });
};

module.exports = {
    filterData
};
