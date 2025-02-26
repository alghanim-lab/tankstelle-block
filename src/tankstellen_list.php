<!-- HTML-Generierung der einzelnen Tankstellen --> 
<!-- Diese Datei enthält die eigentliche Liste der Tankstellen, damit sie sauber getrennt von der Hauptlogik ist --> 

<?php if (is_array($decodedData) && !empty($decodedData)) :
    $count = 0;
    foreach ($decodedData as $item) :
        if ($count >= $maxItems) break;

        $objectid = $item['attributes']['objectid'] ?? 'N/A';
        $adresse = $item['attributes']['adresse'] ?? 'Keine Adresse';
        $x = $item['geometry']['x'] ?? 0;
        $y = $item['geometry']['y'] ?? 0;

        preg_match('/(.+?) (\d+)\s?\((\d{5}) (.+)\)/', $adresse, $addressParts);
        $street = $addressParts[1] ?? $adresse;
        $houseNumber = $addressParts[2] ?? '';
        $postalCode = $addressParts[3] ?? '';
        $city = $addressParts[4] ?? '';
?>
        <div class="col-12 col-md-6 col-lg-4 tankstellen-card" data-street="<?php echo esc_attr(strtolower($street)); ?>">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-body">
                    <h5 class="card-title fw-bold">⛽ Tankstelle <?php echo esc_html($objectid); ?></h5>
                    <p class="card-text">
                        <span class="text-muted">📍 <?php echo esc_html($street) . ' ' . esc_html($houseNumber); ?></span><br>
                        <span class="text-muted">🏙 <?php echo esc_html($postalCode) . ' ' . esc_html($city); ?></span><br>
                        <?php if ($showCoordinates) : ?>
                            <span class="text-muted">📌 Koordinaten: <strong><?php echo esc_html(number_format($x, 5)) . ', ' . esc_html(number_format($y, 5)); ?></strong></span>
                        <?php endif; ?>
                    </p>
                </div>
            </div>
        </div>
<?php
        $count++;
    endforeach;
else :
?>
    <p>Keine gültigen Daten verfügbar.</p>
<?php endif; ?>
