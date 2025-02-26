// Import der benötigten WordPress- und React-Hooks sowie UI-Komponenten
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, TextControl, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';

/**
 * Edit-Funktion für den Gutenberg-Block
 * @param {Object} props - Eigenschaften des Blocks
 * @param {Object} props.attributes - Attribute des Blocks
 * @param {Function} props.setAttributes - Funktion zum Setzen der Block-Attribute
 */
const Edit = ({ attributes, setAttributes }) => {
    // Extrahieren der Attribute aus `attributes`
    const { title, showCoordinates, fallbackData, maxItems } = attributes;

    // State für die Tankstellen-Daten
    const [data, setData] = useState([]);
    
    // State für den Suchbegriff (Straßennamen-Suche)
    const [searchTerm, setSearchTerm] = useState("");
    
    // State für die Sortfunktione
    const [sortOrder, setSortOrder] = useState("asc");


    /**
     * useEffect-Hook: Lädt die Daten von einer externen API oder verwendet zwischengespeicherte Daten (fallbackData)
     */
    useEffect(() => {
        if (fallbackData) {
            try {
                // Parsen der gespeicherten JSON-Daten
                setData(JSON.parse(fallbackData));
            } catch (error) {
                console.error("Fehler beim Parsen der gespeicherten Daten:", error);
            }
        } else {
            // Abrufen der Daten von der externen API
            fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&f=pjson")
                .then(response => response.json())
                .then(json => {
                    if (json.features) {
                        // Speichern der Daten im Block-Attribut und im lokalen State
                        const jsonData = JSON.stringify(json.features);
                        setAttributes({ fallbackData: jsonData });
                        setData(json.features);
                    }
                })
                .catch(error => console.error("Fehler beim Abrufen der Daten:", error));
        }
    }, [fallbackData]);

    /**
     * Filtert die Tankstellen basierend auf dem eingegebenen Suchbegriff (Straßennamen).
     * @returns {Array} - Gefilterte Liste der Tankstellen
     */
    const filteredData = data.filter((item) => {
        const { adresse } = item.attributes;
        // Extrahieren des Straßennamens aus der Adresse (Format: "Straßenname Hausnummer (PLZ Stadt)")
        const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
        const street = addressParts ? addressParts[1].toLowerCase() : adresse.toLowerCase();
        // Überprüfen, ob der Straßenname den Suchbegriff enthält (case insensitive)
        return street.includes(searchTerm.toLowerCase());
    });


        //Wenn a.localeCompare(b) -1 ergibt, dann bleibt a vor b.
        // Wenn a.localeCompare(b) 1 ergibt, dann wird b vor a gesetzt.
        // Wenn a.localeCompare(b) 0 ergibt, dann bleibt die Reihenfolge gleich.


     // Funktion zum Sortieren der Tankstellen nach Straßenname
let count =0;
        const sortedData = [...filteredData].sort((a, b) => {

            const streetA = a.attributes.adresse.split(" ")[0].toLowerCase();

            const streetB = b.attributes.adresse.split(" ")[0].toLowerCase();
          

            // console.log("Vergleiche:", streetA, "vs.", streetB);

            // console.log("streetA.localeCompare(streetB)", streetA.localeCompare(streetB))
            // console.log("streetB.localeCompare(streetA)", streetB.localeCompare(streetA))

            // console.log('sort result compare : ',sortOrder === "asc" ? streetA.localeCompare(streetB) : streetB.localeCompare(streetA));

            return sortOrder === "asc" ? streetA.localeCompare(streetB) : streetB.localeCompare(streetA)

        });

        
    

    return (
        <div {...useBlockProps({ className: "container mt-4" })}>

            {/* Gutenberg Sidebar-Einstellungen für den Block */}
            <InspectorControls>
                <PanelBody title="Block-Einstellungen" initialOpen={true} >
                    {/* Eingabefeld für den Block-Titel */}
                    <TextControl
                        //  __nextHasNoMarginBottom
                        __next40pxDefaultSize //Start opting into the larger default height that will become the default size in a future version.
                        label="Titel des Blocks"
                        value={title || "Tankstellen Informationen"}
                        onChange={(value) => setAttributes({ title: value })}
                    />
                    
                    {/* Umschalter für die Anzeige der Koordinaten */}
                    <ToggleControl
                        __nextHasNoMarginBottom //Start opting into the new margin-free styles that will become the default in a future version.
                        label="Koordinaten anzeigen"
                        checked={showCoordinates !==false } // Standard ist true
                        onChange={() => setAttributes({ showCoordinates: !showCoordinates })}
                    />
                    
                    {/* Slider zur Begrenzung der maximal angezeigten Tankstellen */}
                    <RangeControl
                        label="Maximale Anzahl der Karten"
                        value={maxItems || 5}
                        onChange={(value) => setAttributes({ maxItems: value })}
                        min={1}
                        max={data.length || 10}
                    />

                    <SelectControl label="Sortierung"
                     value={sortOrder} 
                     options={[{ label: "A-Z", value: "asc" }, { label: "Z-A", value: "desc" }]} 
                     onChange={(value) => setSortOrder(value)} />

                </PanelBody>
            </InspectorControls>

            {/* Block-Inhalt */}
            <h3 className="fw-bold">{title || "Tankstellen Informationen"}</h3>

            {/* Suchfeld zur Filterung der Tankstellen nach Straße */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="🔍 Nach Straße suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="row g-4">
            {/* {console.log("Filtered Data:", filteredData)} */}
                {/* Überprüfen, ob gefilterte Daten vorhanden sind */}
                {sortedData.length > 0 ? (
                    // Anzeigen der Tankstellen (maximal `maxItems`)
                    sortedData.slice(0, maxItems || 5).map((item, index) => {
                        const { objectid, adresse } = item.attributes;
                        const { x, y } = item.geometry;

                        // Adresse in Bestandteile aufsplitten
                        const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
                        const street = addressParts ? addressParts[1] : adresse;
                        const houseNumber = addressParts ? addressParts[2] : "";
                        const postalCode = addressParts ? addressParts[3] : "";
                        const city = addressParts ? addressParts[4] : "";

                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                {/* Bootstrap Card-Komponente für eine übersichtliche Darstellung */}
                                <div className="card shadow-sm border-0 rounded-4">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">⛽ Tankstelle {objectid}</h5>
                                        <p className="card-text">
                                            <span className="text-muted">📍 {street} {houseNumber}</span> <br />
                                            <span className="text-muted">🏙 {postalCode} {city}</span> <br />
                                            {showCoordinates !== false && (
                                                <span className="text-muted">
                                                    📌 Koordinaten: <strong>{x.toFixed(5)}, {y.toFixed(5)}</strong>
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    // Nachricht anzeigen, wenn keine Ergebnisse gefunden wurden
                    <p>Keine Ergebnisse gefunden...</p>
                )}
            </div>
        </div>
    );
};

// Exportieren der `Edit`-Komponente für Gutenberg
export default Edit;

// 📌 Erklärung der Bootstrap-Klassen

// 🔹 container mt-4 → Zentrierte Breite + mt-4 für oberen Abstand.
// 🔹 row g-4 → Bootstrap Grid für gleichmäßige Spalten + g-4 für Abstand.
// 🔹 col-12 col-md-6 col-lg-4 → Anpassung an Bildschirmgröße:

//     col-12 (1 Spalte auf kleinen Bildschirmen)
//     col-md-6 (2 Spalten auf mittleren Bildschirmen)
//     col-lg-4 (3 Spalten auf großen Bildschirmen)
//     🔹 card shadow-sm border-0 rounded-4 → Visuell ansprechende Karten:
//     shadow-sm: Leichter Schatten
//     border-0: Kein Rand
//     rounded-4: Abgerundete Ecken