// fetchData.js
export const fetchFuelData = async (fallbackData, setAttributes, setData) => {
    if (fallbackData) {
        try {
            setData(JSON.parse(fallbackData));
        } catch (error) {
            console.error("Fehler beim Parsen der gespeicherten Daten:", error);
        }
    } else {
        try {
            const response = await fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&f=pjson");
            const json = await response.json();
            if (json.features) {
                const jsonData = JSON.stringify(json.features);
                setAttributes({ fallbackData: jsonData });
                setData(json.features);
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error);
        }
    }
};