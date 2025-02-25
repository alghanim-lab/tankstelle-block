<?php

$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Tankstellen Informationen';
$showCoordinates = isset($attributes['showCoordinates']) ? $attributes['showCoordinates'] : true;
$maxItems = isset($attributes['maxItems']) ? $attributes['maxItems'] : 5; 
$sortOrder = isset($_GET['sortOrder']) ? $_GET['sortOrder'] : 'asc'; // Standardmäßig aufsteigend sortieren // $_Get verabeitet Daten aus der URL

// JSON-Daten decodieren, falls vorhanden
$decodedData = !empty($attributes['fallbackData']) ? json_decode($attributes['fallbackData'], true) : [];


// error_log('Test: PHP-Logging funktioniert!');
//https://ghanim-solution.de/wp-content/plugins/tankstelle-block/src/tankstelle-block/render.php

$block_id = uniqid("tankstellen_block_");

error_log('Vor Sortierung: ' . print_r($decodedData, true));

// Sortierfunktion für die Straßenname alphabetisch
usort($decodedData, function ($a, $b) use ($sortOrder) {
    $streetA = strtolower(explode(" ", $a['attributes']['adresse'])[0]); // teilt die Adresse in ein Array, indem sie an Leerzeichen getrennt wird:
    $streetB = strtolower(explode(" ", $b['attributes']['adresse'])[0]); // [0] nimmt das erste Element des Arrays – das ist der Straßenname 
    return $sortOrder === "asc" ? strcmp($streetA, $streetB) : strcmp($streetB, $streetA); //  prüft, ob die Sortierreihenfolge aufsteigend (asc) ist. Falls ja: A-Z sonst Z-A 
});

error_log('Nach Sortierung: ' . print_r($decodedData, true));



$display_data = '<div class="container mt-4">';
$display_data .= '<h3 class="fw-bold">' . esc_html($title) . '</h3>';

// Dropdown für Sortierung
$display_data .= '<label for="sortSelect">Sortierung:</label>';
$display_data .= '<select id="sortSelect" class="form-select mb-3">';
$display_data .= '<option value="asc" ' . ($sortOrder === 'asc' ? 'selected' : '') . '>A-Z</option>';
$display_data .= '<option value="desc" ' . ($sortOrder === 'desc' ? 'selected' : '') . '>Z-A</option>';
$display_data .= '</select>';

// Suchfeld
$display_data .= '<input type="text" id="' . esc_attr($block_id) . '_search" class="form-control mb-3" placeholder="🔍 Nach Straße suchen..." onkeyup="filterTankstellen_' . esc_attr($block_id) . '(this.value)">';

// Container für die Tankstellen-Liste
$display_data .= '<div class="row g-4" id="' . esc_attr($block_id) . '_list">';

if (is_array($decodedData) && !empty($decodedData)) {
    $count = 0;

    foreach ($decodedData as $item) {
        if ($count >= $maxItems) break; // Stoppt, wenn die maximale Anzahl erreicht ist

        $objectid = $item['attributes']['objectid'] ?? 'N/A';
        $adresse = $item['attributes']['adresse'] ?? 'Keine Adresse';
        $x = $item['geometry']['x'] ?? 0;
        $y = $item['geometry']['y'] ?? 0;

        // file_put_contents(ABSPATH . 'wp-content/debug.log', "Meine Debug-Nachricht\n", FILE_APPEND);

        preg_match('/(.+?) (\d+)\s?\((\d{5}) (.+)\)/', $adresse, $addressParts);
        $street = $addressParts[1] ?? $adresse;
        $houseNumber = $addressParts[2] ?? '';
        $postalCode = $addressParts[3] ?? '';
        $city = $addressParts[4] ?? '';

        $display_data .= '<div class="col-12 col-md-6 col-lg-4 tankstellen-card" data-street="' . esc_attr(strtolower($street)) . '">';
        $display_data .= '<div class="card shadow-sm border-0 rounded-4">';
        $display_data .= '<div class="card-body">';
        $display_data .= '<h5 class="card-title fw-bold">⛽ Tankstelle ' . esc_html($objectid) . '</h5>';
        $display_data .= '<p class="card-text">';
        $display_data .= '<span class="text-muted">📍 ' . esc_html($street) . ' ' . esc_html($houseNumber) . '</span><br>';
        $display_data .= '<span class="text-muted">🏙 ' . esc_html($postalCode) . ' ' . esc_html($city) . '</span><br>';
        
        if ($showCoordinates) {
            $display_data .= '<span class="text-muted">📌 Koordinaten: <strong>' . esc_html(number_format($x, 5)) . ', ' . esc_html(number_format($y, 5)) . '</strong></span>';
        }
        
        $display_data .= '</p>';
        $display_data .= '</div>'; // card-body
        $display_data .= '</div>'; // card
        $display_data .= '</div>'; // col

        $count++;
    }
} else {
    $display_data .= '<p>Keine gültigen Daten verfügbar.</p>';
}

$display_data .= '</div>'; // Tankstellen-Container schließen
$display_data .= '</div>'; // Hauptcontainer schließen

// JavaScript für Suchfunktion und Sortierung
//Beim Ändern des Dropdown-Werts (sortSelect) wird die Seite mit dem neuen sortOrder neu geladen.
$display_data .= '<script>
document.getElementById("sortSelect").addEventListener("change", function() { 
    let sortOrder = this.value;
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("sortOrder", sortOrder);
    window.location.href = currentUrl.toString();
});

function filterTankstellen_' . esc_js($block_id) . '(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let cards = document.querySelectorAll("#' . esc_js($block_id) . '_list .tankstellen-card");

    cards.forEach(card => {
        let street = card.getAttribute("data-street");
        if (street.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
</script>';
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php echo $display_data; ?>
</div>
