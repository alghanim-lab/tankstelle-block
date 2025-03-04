// BlockContent.js - Zeigt die gefilterten und sortierten Tankstellen-Daten
import React from "react";
import FuelStationCard from "./fuelStationCard";

const BlockContent = ({ sortedData = [], maxItems, showCoordinates, searchTerm, setSearchTerm, title }) => {
    // console.log(" BlockContent Props:", { maxItems, showCoordinates, searchTerm, sortedData });
    console.log("Max Items:", maxItems);
console.log("Anzahl der Tankstellen vor Begrenzung:", sortedData.length);
    return (
        <div>
        <div id="test-tankstelle" className="tankstelle">
        {/* Hintergrund hier setzen */}
            {/* Titel des Blocks */}
            <h3 className="fw-bold">{title || "Tankstellen Informationen"}</h3>

            {/* 🔍 Suchfeld zur Filterung der Tankstellen nach Straße */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="🔍 Nach Straße suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Grid-Layout für die Tankstellen-Karten */}
            <div className="row g-4">
                {sortedData.length > 0 ? (
                // Anzeigen der Tankstellen (maximal `maxItems`)
                    sortedData.slice(0, maxItems || 5).map((station, index) => {
                        const { attributes = {}, geometry = {} } = station || {};

                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                 {/* Einzelne Tankstellen-Karte mit Daten */}
                                <FuelStationCard 
                                    objectid={attributes.objectid || "Unbekannt"}
                                    adresse={attributes.adresse || "Keine Adresse"}
                                    x={geometry.x ?? null}
                                    y={geometry.y ?? null}
                                    showCoordinates={showCoordinates}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>Keine Ergebnisse gefunden...</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default BlockContent;


//  Erklärung der Bootstrap-Klassen

//  container mt-4 → Zentrierte Breite + mt-4 für oberen Abstand.
//  row g-4 → Bootstrap Grid für gleichmäßige Spalten + g-4 für Abstand.
//  col-12 col-md-6 col-lg-4 → Anpassung an Bildschirmgröße:

//     col-12 (1 Spalte auf kleinen Bildschirmen)
//     col-md-6 (2 Spalten auf mittleren Bildschirmen)
//     col-lg-4 (3 Spalten auf großen Bildschirmen)
//     card shadow-sm border-0 rounded-4 → Visuell ansprechende Karten:
//     shadow-sm: Leichter Schatten
//     border-0: Kein Rand
//     rounded-4: Abgerundete Ecken