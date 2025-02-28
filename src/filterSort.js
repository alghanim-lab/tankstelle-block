
// filterSort.js
export const filterStations = (data, searchTerm) => {
    return data.filter((item) => {
        const { adresse } = item.attributes;
        return adresse.toLowerCase().includes(searchTerm.toLowerCase());
    });
};

export const sortStations = (data, sortOrder) => {
    return [...data].sort((a, b) => {
        return sortOrder === "asc" ? a.attributes.adresse.localeCompare(b.attributes.adresse) : b.attributes.adresse.localeCompare(a.attributes.adresse);
    });
};
