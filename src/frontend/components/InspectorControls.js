import { PanelBody, TextControl, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

// InspectorControls.js - Stellt die Benutzersteuerung für den Block bereit
export const CustomInspectorControls = ({ attributes, setAttributes, sortOrder, setSortOrder, data = [] }) => (
    <InspectorControls>
        <PanelBody title="Block-Einstellungen" initialOpen={true}>
            {/* Eingabefeld zur Anpassung des Blocktitels */}
            <TextControl
                label="Titel des Blocks"
                value={attributes.title || "Tankstellen Informationen"}
                onChange={(value) => setAttributes({ title: value || "Tankstellen Informationen" })}
            />

            {/* Umschaltoption zur Anzeige der Koordinaten */}
            <ToggleControl
                label="Koordinaten anzeigen"
                checked={attributes.showCoordinates !== false}
                onChange={() => setAttributes({ showCoordinates: !attributes.showCoordinates })}
            />

            {/* Slider zur Begrenzung der maximalen Anzahl angezeigter Tankstellen */}
            <RangeControl
                label="Maximale Anzahl der Karten"
                value={attributes.maxItems || 5}
                onChange={(value) => setAttributes({ maxItems: value })}
                min={1}
                max={data.length}  // Begrenzung basierend auf verfügbaren Daten
            />

            {/* Dropdown-Menü zur Auswahl der Sortierung */}
            <SelectControl 
                label="Sortierung"
                value={sortOrder} 
                options={[{ label: "A-Z", value: "asc" }, { label: "Z-A", value: "desc" }]} 
                onChange={(value) => setSortOrder(value)} 
            />
        </PanelBody>
    </InspectorControls>
);
