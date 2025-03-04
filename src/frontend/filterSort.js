
// filterSort.js - Enthält Funktionen zum Filtern und Sortieren der Tankstellen-Daten

// Filtert die Tankstellen basierend auf dem Suchbegriff
export const filterStations = (data, searchTerm) => {
    return data.filter((item) => {
        const { adresse } = item.attributes;
        // Extrahieren des Straßennamens aus der Adresse (Format: "Straßenname Hausnummer (PLZ Stadt)")
        const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
        const street = addressParts ? addressParts[1].toLowerCase() : adresse.toLowerCase();
        // Überprüfen, ob der Straßenname den Suchbegriff enthält (case insensitive)
        return street.toLowerCase().includes(searchTerm.toLowerCase());          
    });
};



// Sortiert die Tankstellen alphabetisch auf- oder absteigend nach Adresse
export const sortStations = (data, sortOrder) => {
    return [...data].sort((a, b) => {
        return sortOrder === "asc" 
            ? a.attributes.adresse.localeCompare(b.attributes.adresse) 
            : b.attributes.adresse.localeCompare(a.attributes.adresse);
    });
};

        //Wenn a.localeCompare(b) -1 ergibt, dann bleibt a vor b.                             
        // Wenn a.localeCompare(b) 1 ergibt, dann wird b vor a gesetzt.
        // Wenn a.localeCompare(b) 0 ergibt, dann bleibt die Reihenfolge gleich.
