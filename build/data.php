<?php

$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Tankstellen Informationen';
$showCoordinates = isset($attributes['showCoordinates']) ? $attributes['showCoordinates'] : true;
$maxItems = isset($attributes['maxItems']) ? $attributes['maxItems'] : 5;
$sortOrder = isset($_GET['sortOrder']) ? $_GET['sortOrder'] : 'asc';

error_log('Vor Sortierung: ' . print_r($title, true));
// JSON-Daten decodieren
$decodedData = !empty($attributes['fallbackData']) ? json_decode($attributes['fallbackData'], true) : [];

$block_id = uniqid("tankstellen_block_");

// Daten sortieren
usort($decodedData, function ($a, $b) use ($sortOrder) {
    $streetA = strtolower(explode(" ", $a['attributes']['adresse'])[0]);
    $streetB = strtolower(explode(" ", $b['attributes']['adresse'])[0]);
    return $sortOrder === "asc" ? strcmp($streetA, $streetB) : strcmp($streetB, $streetA);
});

// **TEST: Variablen vor Laden von render.php überprüfen**
var_dump($title, $sortOrder, $block_id, $decodedData);
die(); // Stoppt das Skript zur Analyse

// Prüfen, ob alle Variablen gesetzt sind
var_dump($title, $showCoordinates, $maxItems, $sortOrder, $decodedData, $block_id);
die(); // Stoppt das Skript, um den Dump zu sehen.
include 'render.php';

?>
