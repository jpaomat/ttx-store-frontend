const removeAccents = (str) => {
    return str
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');
};

export const cleanText = (text) => {
    return removeAccents(text.toLocaleLowerCase());
};