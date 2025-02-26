<?php
$title = isset($attributes['title']) ? esc_html($attributes['title']) : 'Tankstellen Informationen';
$showCoordinates = isset($attributes['showCoordinates']) ? $attributes['showCoordinates'] : true;
$maxItems = isset($attributes['maxItems']) ? $attributes['maxItems'] : 5;
$sortOrder = isset($_GET['sortOrder']) ? $_GET['sortOrder'] : 'asc';

// JSON-Daten decodieren, falls vorhanden
$decodedData = !empty($attributes['fallbackData']) ? json_decode($attributes['fallbackData'], true) : [];

$block_id = uniqid("tankstellen_block_");

// Sortierfunktion für Straßenname alphabetisch
usort($decodedData, function ($a, $b) use ($sortOrder) {
    $streetA = strtolower(explode(" ", $a['attributes']['adresse'])[0]);
    $streetB = strtolower(explode(" ", $b['attributes']['adresse'])[0]);
    return $sortOrder === "asc" ? strcmp($streetA, $streetB) : strcmp($streetB, $streetA);
});
?>

<div <?php echo get_block_wrapper_attributes(); ?>>

    <div class="container mt-4">
        <h3 class="fw-bold"><?php echo esc_html($title); ?></h3>

        <!-- Dropdown für Sortierung -->
        <label for="sortSelect">Sortierung:</label>
        <select id="sortSelect" class="form-select mb-3">
            <option value="asc" <?php echo ($sortOrder === 'asc') ? 'selected' : ''; ?>>A-Z</option>
            <option value="desc" <?php echo ($sortOrder === 'desc') ? 'selected' : ''; ?>>Z-A</option>
        </select>

        <!-- Suchfeld -->
        <input type="text" id="<?php echo esc_attr($block_id); ?>_search" class="form-control mb-3" placeholder="🔍 Nach Straße suchen...">

        <!-- Tankstellen-Liste -->
        <div class="row g-4" id="<?php echo esc_attr($block_id); ?>_list">
            <?php include 'tankstellen_list.php'; ?>
        </div>
    </div>

    <!-- JavaScript für diesen Block -->
    <script src="<?php echo plugin_dir_url(__FILE__); ?>script.js"></script>
</div>
