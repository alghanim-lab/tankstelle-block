<?php
// Setze den Titel: Falls im Attribut vorhanden, wird dieser sicher ausgegeben, ansonsten der Standardtitel "Tankstellen Informationen"
$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Tankstellen Informationen';

// Prüfe, ob die Anzeige der Koordinaten aktiviert ist; Standard ist true, falls nicht explizit gesetzt
$showCoordinates = isset($attributes['showCoordinates']) ? $attributes['showCoordinates'] : true;

// Bestimme die maximale Anzahl der anzuzeigenden Items, Standardwert ist 5
$maxItems = isset($attributes['maxItems']) ? $attributes['maxItems'] : 5;

// Hole die Sortierreihenfolge aus den URL-Parametern (GET); Standard ist "asc" für aufsteigend
$sortOrder = isset($_GET['sortOrder']) ? $_GET['sortOrder'] : 'asc';

// JSON-Daten decodieren, falls der Attribut "fallbackData" vorhanden und nicht leer ist, ansonsten ein leeres Array nutzen
$decodedData = !empty($attributes['fallbackData']) ? json_decode($attributes['fallbackData'], true) : [];

// Erzeuge eine eindeutige Block-ID, um eindeutige HTML-Element-IDs zu gewährleisten (z.B. für Suchfeld und Listencontainer)
$block_id = uniqid("tankstellen_block_");

// Sortiere das Array $decodedData alphabetisch nach dem Straßennamen
usort($decodedData, function ($a, $b) use ($sortOrder) {
    // Extrahiere den Straßennamen aus der Adresse (angenommen, dass der Straßenname das erste Wort ist) und konvertiere ihn in Kleinbuchstaben
    $streetA = strtolower(explode(" ", $a['attributes']['adresse'])[0]);
    $streetB = strtolower(explode(" ", $b['attributes']['adresse'])[0]);
    // Vergleiche die Straßennamen je nach gewünschter Sortierreihenfolge (asc: aufsteigend, desc: absteigend)
    return $sortOrder === "asc" ? strcmp($streetA, $streetB) : strcmp($streetB, $streetA);
});
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="container mt-4">
        <!-- Ausgabe des Titels -->
        <h3 class="fw-bold"><?php echo esc_html($title); ?></h3>

        <!-- Dropdown zur Auswahl der Sortierreihenfolge -->
        <label for="sortSelect">Sortierung:</label>
        <select id="sortSelect" class="form-select mb-3">
            <!-- Option für aufsteigende Reihenfolge (A-Z); wird ausgewählt, wenn $sortOrder "asc" ist -->
            <option value="asc" <?php echo ($sortOrder === 'asc') ? 'selected' : ''; ?>>A-Z</option>
            <!-- Option für absteigende Reihenfolge (Z-A); wird ausgewählt, wenn $sortOrder "desc" ist -->
            <option value="desc" <?php echo ($sortOrder === 'desc') ? 'selected' : ''; ?>>Z-A</option>
        </select>

        <!-- Suchfeld zur Filterung nach Straßennamen -->
        <input type="text" id="<?php echo esc_attr($block_id); ?>_search" class="form-control mb-3" placeholder="🔍 Nach Straße suchen...">

        <!-- Container für die Liste der Tankstellen -->
        <div class="row g-4" id="<?php echo esc_attr($block_id); ?>_list">
            <!-- Einbinden der separaten Datei, die die Tankstellenliste generiert -->
            <?php include 'tankstellen_list.php'; ?>
        </div>
    </div>

    <!-- Einbinden des JavaScript-Files, das die Funktionalitäten für diesen Block bereitstellt -->
    <script src="<?php echo plugin_dir_url(__FILE__); ?>script.js"></script>
</div>
