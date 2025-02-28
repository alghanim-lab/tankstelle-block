import React from "react";
import FuelStationCard from "./fuelStationCard";

const BlockContent = ({ sortedData = [], maxItems, showCoordinates, searchTerm, setSearchTerm, title }) => {
    // console.log(" BlockContent Props:", { maxItems, showCoordinates, searchTerm, sortedData });
    console.log("Max Items:", maxItems);
console.log("Anzahl der Tankstellen vor Begrenzung:", sortedData.length);
    return (
        <div>
        <div className=""> {/* Hintergrund hier setzen */}
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

            <div className="row g-4">
                {sortedData.length > 0 ? (
                    sortedData.slice(0, maxItems || 5).map((station, index) => {
                        const { attributes = {}, geometry = {} } = station || {};

                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
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
