import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { fetchFuelData } from './fetchData';
import { filterStations, sortStations } from './filterSort';
import { CustomInspectorControls } from './InspectorControls';
import BlockContent  from './BlockContent';


const Edit = ({ attributes, setAttributes }) => {
    const { fallbackData, title, maxItems, showCoordinates } = attributes;
    
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await fetchFuelData(fallbackData, setAttributes, setData);
            setLoading(false);
        };
        loadData();
    }, [fallbackData]);

    const filteredData = filterStations(data, searchTerm);
    const sortedData = sortStations(filteredData, sortOrder);

    return (
        <div {...useBlockProps()}>
            {loading ? (
                <p>Daten werden geladen...</p>
            ) : (
                <>
                    <CustomInspectorControls 
                        attributes={attributes} 
                        setAttributes={setAttributes} 
                        sortOrder={sortOrder} 
                        setSortOrder={setSortOrder} 
                        data={data}
                    />
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
