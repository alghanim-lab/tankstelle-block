/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/tankstelle-block","version":"0.1.0","title":"Tankstelle Block","category":"widgets","icon":"location","description":"Ein Block, der Tankstellen-Daten aus einer API lädt.","example":{},"supports":{"html":false},"textdomain":"tankstelle-block","editorScript":"file:./frontend/index.js","editorStyle":"file:./frontend/index.css","style":"file:./forntend/style-index.css","render":"file:./backend/render.php","viewScript":"file:./view.js","attributes":{"title":{"type":"string","default":"Tankstellen Informationen"},"showCoordinates":{"type":"boolean","default":true},"maxItems":{"type":"number","default":5},"fallbackData":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/frontend/components/BlockContent.js":
/*!*************************************************!*\
  !*** ./src/frontend/components/BlockContent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fuelStationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuelStationCard */ "./src/frontend/components/fuelStationCard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// BlockContent.js - Zeigt die gefilterten und sortierten Tankstellen-Daten



const BlockContent = ({
  sortedData = [],
  maxItems,
  showCoordinates,
  searchTerm,
  setSearchTerm,
  title
}) => {
  // console.log(" BlockContent Props:", { maxItems, showCoordinates, searchTerm, sortedData });
  console.log("Max Items:", maxItems);
  console.log("Anzahl der Tankstellen vor Begrenzung:", sortedData.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: "test-tankstelle",
      className: "tankstelle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "fw-bold",
        children: title || "Tankstellen Informationen"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "form-control mb-3",
        placeholder: "\uD83D\uDD0D Nach Stra\xDFe suchen...",
        value: searchTerm,
        onChange: e => setSearchTerm(e.target.value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "row g-4",
        children: sortedData.length > 0 ?
        // Anzeigen der Tankstellen (maximal `maxItems`)
        sortedData.slice(0, maxItems || 5).map((station, index) => {
          var _geometry$x, _geometry$y;
          const {
            attributes = {},
            geometry = {}
          } = station || {};
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "col-12 col-md-6 col-lg-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fuelStationCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
              objectid: attributes.objectid || "Unbekannt",
              adresse: attributes.adresse || "Keine Adresse",
              x: (_geometry$x = geometry.x) !== null && _geometry$x !== void 0 ? _geometry$x : null,
              y: (_geometry$y = geometry.y) !== null && _geometry$y !== void 0 ? _geometry$y : null,
              showCoordinates: showCoordinates
            })
          }, index);
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Keine Ergebnisse gefunden..."
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockContent);

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

/***/ }),

/***/ "./src/frontend/components/InspectorControls.js":
/*!******************************************************!*\
  !*** ./src/frontend/components/InspectorControls.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomInspectorControls: () => (/* binding */ CustomInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// InspectorControls.js - Stellt die Benutzersteuerung für den Block bereit

const CustomInspectorControls = ({
  attributes,
  setAttributes,
  sortOrder,
  setSortOrder,
  data = []
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Block-Einstellungen",
    initialOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      label: "Titel des Blocks",
      value: attributes.title || "Tankstellen Informationen",
      onChange: value => setAttributes({
        title: value || "Tankstellen Informationen"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
      label: "Koordinaten anzeigen",
      checked: attributes.showCoordinates !== false,
      onChange: () => setAttributes({
        showCoordinates: !attributes.showCoordinates
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: "Maximale Anzahl der Karten",
      value: attributes.maxItems || 5,
      onChange: value => setAttributes({
        maxItems: value
      }),
      min: 1,
      max: data.length // Begrenzung basierend auf verfügbaren Daten
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Sortierung",
      value: sortOrder,
      options: [{
        label: "A-Z",
        value: "asc"
      }, {
        label: "Z-A",
        value: "desc"
      }],
      onChange: value => setSortOrder(value)
    })]
  })
});

/***/ }),

/***/ "./src/frontend/components/fuelStationCard.js":
/*!****************************************************!*\
  !*** ./src/frontend/components/fuelStationCard.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

//Komponente zur Darstellung einer einzelnen Tankstellen-Karteimport React from "react";

const FuelStationCard = ({
  objectid,
  adresse,
  x,
  y,
  showCoordinates
}) => {
  // Adresse in Bestandteile zerlegen
  const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
  const street = addressParts ? addressParts[1] : adresse;
  const houseNumber = addressParts ? addressParts[2] : "";
  const postalCode = addressParts ? addressParts[3] : "";
  const city = addressParts ? addressParts[4] : "";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "card shadow-sm border-0 rounded-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
        className: "card-title fw-bold",
        children: ["\u26FD Tankstelle ", objectid]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "card-text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "text-muted",
          children: ["\uD83D\uDCCD ", street, " ", houseNumber]
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "text-muted",
          children: ["\uD83C\uDFD9 ", postalCode, " ", city]
        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), showCoordinates !== false && x !== null && y !== null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "text-muted",
          children: ["\uD83D\uDCCC Koordinaten: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
            children: [x.toFixed(5), ", ", y.toFixed(5)]
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FuelStationCard);

/***/ }),

/***/ "./src/frontend/edit.js":
/*!******************************!*\
  !*** ./src/frontend/edit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ "./src/frontend/fetchData.js");
/* harmony import */ var _filterSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterSort */ "./src/frontend/filterSort.js");
/* harmony import */ var _components_InspectorControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InspectorControls */ "./src/frontend/components/InspectorControls.js");
/* harmony import */ var _components_BlockContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BlockContent */ "./src/frontend/components/BlockContent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const Edit = ({
  attributes,
  setAttributes
}) => {
  // Extrahiert die gespeicherten Attribute aus dem Block
  const {
    fallbackData,
    title,
    maxItems,
    showCoordinates
  } = attributes;

  // React State für Daten, Suchbegriff, Sortierung und Ladezustand
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Speichert die Tankstellen-Daten
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // Suchbegriff für die Filterung
  const [sortOrder, setSortOrder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("asc"); // Sortierungsreihenfolge
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Zeigt an, ob Daten noch geladen werden

  // useEffect lädt die Daten bei der ersten Ausführung oder wenn `fallbackData` sich ändert
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadData = async () => {
      await (0,_fetchData__WEBPACK_IMPORTED_MODULE_2__.fetchFuelData)(fallbackData, setAttributes, setData);
      setLoading(false);
    };
    loadData();
  }, [fallbackData]);

  // Filtern und Sortieren der Tankstellen-Daten
  const filteredData = (0,_filterSort__WEBPACK_IMPORTED_MODULE_3__.filterStations)(data, searchTerm);
  const sortedData = (0,_filterSort__WEBPACK_IMPORTED_MODULE_3__.sortStations)(filteredData, sortOrder);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      children: "Daten werden geladen..."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_InspectorControls__WEBPACK_IMPORTED_MODULE_4__.CustomInspectorControls, {
        attributes: attributes,
        setAttributes: setAttributes,
        sortOrder: sortOrder,
        setSortOrder: setSortOrder,
        data: data
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_BlockContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: title,
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
        sortedData: sortedData,
        maxItems: maxItems,
        showCoordinates: showCoordinates
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/frontend/fetchData.js":
/*!***********************************!*\
  !*** ./src/frontend/fetchData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchFuelData: () => (/* binding */ fetchFuelData)
/* harmony export */ });
//Enthält die API-Logik für das Abrufen und Verarbeiten der Daten

const fetchFuelData = async (fallbackData, setAttributes, setData) => {
  if (fallbackData) {
    try {
      // Falls bereits gespeicherte Daten vorhanden sind, diese nutzen
      setData(JSON.parse(fallbackData));
    } catch (error) {
      console.error("Fehler beim Parsen der gespeicherten Daten:", error);
    }
  } else {
    try {
      // Falls keine gespeicherten Daten existieren, Daten von API abrufen
      const response = await fetch("https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&outFields=*&returnGeometry=true&f=pjson");
      const json = await response.json();
      if (json.features) {
        const jsonData = JSON.stringify(json.features);
        setAttributes({
          fallbackData: jsonData
        }); // Speichert die Daten im Block
        setData(json.features); // Aktualisiert den State
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  }
};

/***/ }),

/***/ "./src/frontend/filterSort.js":
/*!************************************!*\
  !*** ./src/frontend/filterSort.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterStations: () => (/* binding */ filterStations),
/* harmony export */   sortStations: () => (/* binding */ sortStations)
/* harmony export */ });
// filterSort.js - Enthält Funktionen zum Filtern und Sortieren der Tankstellen-Daten

// Filtert die Tankstellen basierend auf dem Suchbegriff
const filterStations = (data, searchTerm) => {
  return data.filter(item => {
    const {
      adresse
    } = item.attributes;
    // Extrahieren des Straßennamens aus der Adresse (Format: "Straßenname Hausnummer (PLZ Stadt)")
    const addressParts = adresse.match(/(.+?) (\d+)\s?\((\d{5}) (.+)\)/);
    const street = addressParts ? addressParts[1].toLowerCase() : adresse.toLowerCase();
    // Überprüfen, ob der Straßenname den Suchbegriff enthält (case insensitive)
    return street.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

// Sortiert die Tankstellen alphabetisch auf- oder absteigend nach Adresse
const sortStations = (data, sortOrder) => {
  return [...data].sort((a, b) => {
    return sortOrder === "asc" ? a.attributes.adresse.localeCompare(b.attributes.adresse) : b.attributes.adresse.localeCompare(a.attributes.adresse);
  });
};

//Wenn a.localeCompare(b) -1 ergibt, dann bleibt a vor b.                             
// Wenn a.localeCompare(b) 1 ergibt, dann wird b vor a gesetzt.
// Wenn a.localeCompare(b) 0 ergibt, dann bleibt die Reihenfolge gleich.

/***/ }),

/***/ "./src/frontend/index.js":
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/frontend/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/frontend/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block.json */ "./src/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
// Haupteinstiegspunkt für den Block
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



// All block icons should be 24 pixels square. Note the viewBox parameter in developer.wordpress.org/block-editor/getting-started/tutorial/. 

const tankstelleIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
  fill: "#000000",
  height: "800px",
  width: "800px",
  version: "1.1",
  viewBox: "0 0 512 512",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      d: "M494.313,99.375l-64-32c-15.844-7.93-35.047-1.469-42.938,14.313c-7.906,15.813-1.5,35.031,14.313,42.938L448,147.773V368 c0,8.82-7.172,16-16,16s-16-7.18-16-16V240c0-52.938-43.063-96-96-96V64c0-35.289-28.703-64-64-64H96C60.703,0,32,28.711,32,64 v354.742L9.375,441.375C3.375,447.375,0,455.516,0,464v16c0,17.672,14.328,32,32,32h288c17.672,0,32-14.328,32-32v-16 c0-8.484-3.375-16.625-9.375-22.625L320,418.742V208c17.641,0,32,14.352,32,32v128c0,44.109,35.891,80,80,80s80-35.891,80-80V128 C512,115.883,505.156,104.797,494.313,99.375z M272,223.997h-85.164l-27.977-69.942c-3.281-8.203-12.672-12.172-20.797-8.914 c-8.203,3.289-12.203,12.594-8.922,20.805l23.221,58.052H80v-160c0-8.837,7.163-16,16-16h160c8.837,0,16,7.163,16,16V223.997z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
      cx: "176",
      cy: "95.997",
      r: "16"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
      cx: "240",
      cy: "111.997",
      r: "16"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
      cx: "112",
      cy: "111.997",
      r: "16"
    })]
  })
});

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  title: 'Tankstellen Köln',
  icon: tankstelleIcon,
  category: 'widgets',
  supports: {
    html: false
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Wichtig: Das Edit-Modul muss korrekt exportiert sein
  save: () => null // Dynamischer Block (wird auf dem Server gerendert)
});

/***/ }),

/***/ "./src/frontend/style.scss":
/*!*********************************!*\
  !*** ./src/frontend/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"frontend/index": 0,
/******/ 			"frontend/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunktankstelle_block"] = globalThis["webpackChunktankstelle_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["frontend/style-index"], () => (__webpack_require__("./src/frontend/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map