//Enthält die API-Logik für das Abrufen und Verarbeiten der Daten

export const fetchFuelData = async (fallbackData, setAttributes, setData) => {
    if (fallbackData) {
        try {
            // Falls bereits gespeicherte Daten vorhanden sind, diese nutzen
            setData(JSON.parse(fallbackData));
        } catch (error) {
            console.error("Fehler beim Parsen der gespeicherten Daten:", error);
        }
    } else {
        try {
            // Falls keine gespeicherten Daten existieren, Daten von API abrufen
            const response = await fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&f=pjson");
            const json = await response.json();

            if (json.features) {
                const jsonData = JSON.stringify(json.features);
                setAttributes({ fallbackData: jsonData }); // Speichert die Daten im Block
                setData(json.features); // Aktualisiert den State
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error);
        }
    }
};
