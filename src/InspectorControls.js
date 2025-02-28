// InspectorControls.js
import { PanelBody, TextControl, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import {InspectorControls } from '@wordpress/block-editor';


export const CustomInspectorControls = ({ attributes, setAttributes, sortOrder, setSortOrder,data = [] }) => (
    <InspectorControls>
        <PanelBody title="Block-Einstellungen" initialOpen={true}>
            <TextControl
                label="Titel des Blocks"
                value={attributes.title || "Tankstellen Informationen"}
                onChange={(value) => setAttributes({ title: value || "Tankstellen Informationen" })} // ✅ Falls leer, Standardwert setzen
            />
            <ToggleControl
                label="Koordinaten anzeigen"
                checked={attributes.showCoordinates !== false}
                onChange={() => setAttributes({ showCoordinates: !attributes.showCoordinates })}
            />
            <RangeControl
                label="Maximale Anzahl der Karten"
                value={attributes.maxItems || 5}
                onChange={(value) => setAttributes({ maxItems: value })}
                min={1}
                max={data.length }  // 👈 `data.length` wird hier verwendet

            />
            <SelectControl 
                label="Sortierung"
                value={sortOrder} 
                options={[{ label: "A-Z", value: "asc" }, { label: "Z-A", value: "desc" }]} 
                onChange={(value) => setSortOrder(value)} 
            />
        </PanelBody>
    </InspectorControls>
);
