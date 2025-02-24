import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, TextControl, ToggleControl, RangeControl } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
    const { title, showCoordinates, fallbackData, maxItems } = attributes;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (fallbackData) {
            try {
                setData(JSON.parse(fallbackData));
            } catch (error) {
                console.error("Fehler beim Parsen der gespeicherten Daten:", error);
            }
        } else {
            fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&f=pjson")
                .then(response => response.json())
                .then(json => {
                    if (json.features) {
                        const jsonData = JSON.stringify(json.features);
                        setAttributes({ fallbackData: jsonData });
                        setData(json.features);
                    }
                })
                .catch(error => console.error("Fehler beim Abrufen der Daten:", error));
        }
    }, [fallbackData]);

    return (
        <div {...useBlockProps({ className: "container mt-4" })}>
            
            {/* Gutenberg Sidebar-Einstellungen */}
            <InspectorControls>
                <PanelBody title="Block-Einstellungen" initialOpen={true}>
                    <TextControl
                        label="Titel des Blocks"
                        value={title || "Tankstellen Informationen"}
                        onChange={(value) => setAttributes({ title: value })}
                    />
                    <ToggleControl
                        label="Koordinaten anzeigen"
                        checked={showCoordinates !== false} // Standard auf true
                        onChange={() => setAttributes({ showCoordinates: !showCoordinates })}
                    />
                    <RangeControl
                        label="Maximale Anzahl der Karten"
                        value={maxItems || 5}
                        onChange={(value) => setAttributes({ maxItems: value })}
                        min={1}
                        max={data.length || 10}
                    />
                </PanelBody>
            </InspectorControls>

            {/* Block-Inhalt */}
            <h3 className="fw-bold">{title || "Tankstellen Informationen"}</h3>
            <div className="row g-4">
                {data.length > 0 ? (
                    data.slice(0, maxItems || 5).map((item, index) => {
                        const { objectid, adresse } = item.attributes;
                        const { x, y } = item.geometry;

                        // Adresse parsen
                        const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
                        const street = addressParts ? addressParts[1] : adresse;
                        const houseNumber = addressParts ? addressParts[2] : "";
                        const postalCode = addressParts ? addressParts[3] : "";
                        const city = addressParts ? addressParts[4] : "";

                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="card shadow-sm border-0 rounded-4">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">⛽ Tankstelle {objectid}</h5>
                                        <p className="card-text">
                                            <span className="text-muted">📍 {street} {houseNumber}</span> <br />
                                            <span className="text-muted">🏙 {postalCode} {city}</span> <br />
                                            {showCoordinates !== false && (
                                                <span className="text-muted">📌 Koordinaten: <strong>{x.toFixed(5)}, {y.toFixed(5)}</strong></span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Lade Daten...</p>
                )}
            </div>
        </div>
    );
};

export default Edit;