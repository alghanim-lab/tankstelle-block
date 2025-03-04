//Komponente zur Darstellung einer einzelnen Tankstellen-Karteimport React from "react";

const FuelStationCard = ({ objectid, adresse, x, y, showCoordinates }) => {
    // Adresse in Bestandteile zerlegen
    const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
    const street = addressParts ? addressParts[1] : adresse;
    const houseNumber = addressParts ? addressParts[2] : "";
    const postalCode = addressParts ? addressParts[3] : "";
    const city = addressParts ? addressParts[4] : "";

    return (
        <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">
                <h5 className="card-title fw-bold">⛽ Tankstelle {objectid}</h5>
                <p className="card-text">
                    <span className="text-muted">📍 {street} {houseNumber}</span> <br />
                    <span className="text-muted">🏙 {postalCode} {city}</span> <br />
                    {showCoordinates !== false && x !== null && y !== null && (
                        <span className="text-muted">
                            📌 Koordinaten: <strong>{x.toFixed(5)}, {y.toFixed(5)}</strong>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default FuelStationCard;
