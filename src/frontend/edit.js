import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { fetchFuelData } from './fetchData';
import { filterStations, sortStations } from './filterSort';
import { CustomInspectorControls } from './components/InspectorControls';
import BlockContent from './components/BlockContent';

const Edit = ({ attributes, setAttributes }) => {
    // Extrahiert die gespeicherten Attribute aus dem Block
    const { fallbackData, title, maxItems, showCoordinates } = attributes;

    // React State für Daten, Suchbegriff, Sortierung und Ladezustand
    const [data, setData] = useState([]); // Speichert die Tankstellen-Daten
    const [searchTerm, setSearchTerm] = useState(""); // Suchbegriff für die Filterung
    const [sortOrder, setSortOrder] = useState("asc"); // Sortierungsreihenfolge
    const [loading, setLoading] = useState(true); // Zeigt an, ob Daten noch geladen werden

    // useEffect lädt die Daten bei der ersten Ausführung oder wenn `fallbackData` sich ändert
    useEffect(() => {
        const loadData = async () => {
            await fetchFuelData(fallbackData, setAttributes, setData);
            setLoading(false);
        };
        loadData();
    }, [fallbackData]);

    // Filtern und Sortieren der Tankstellen-Daten
    const filteredData = filterStations(data, searchTerm);
    const sortedData = sortStations(filteredData, sortOrder);

    return (
        <div {...useBlockProps()}>
            {loading ? (
                <p>Daten werden geladen...</p>
            ) : (
                <>
                    {/* Steuerungselemente für Benutzer */}
                    <CustomInspectorControls 
                        attributes={attributes} 
                        setAttributes={setAttributes} 
                        sortOrder={sortOrder} 
                        setSortOrder={setSortOrder} 
                        data={data}
                    />
                    
                    {/* Anzeige der gefilterten und sortierten Tankstellen */}
                    <BlockContent 
                        title={title} 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        sortedData={sortedData} 
                        maxItems={maxItems} 
                        showCoordinates={showCoordinates} 
                    />
                </>
            )}
        </div>
    );
};

export default Edit;
