<!-- HTML-Generierung der einzelnen Tankstellen -->
<!-- Diese Datei enthält die eigentliche Liste der Tankstellen, damit sie sauber getrennt von der Hauptlogik ist -->

<?php 
// Prüfen, ob $decodedData ein Array ist und nicht leer, um fehlerhafte Eingaben zu vermeiden
if (is_array($decodedData) && !empty($decodedData)) : 
    $count = 0; // Zähler für angezeigte Tankstellen initialisieren
    // Iteriere durch alle Elemente im Array $decodedData
    foreach ($decodedData as $item) : 
        // Falls die maximale Anzahl an anzuzeigenden Elementen erreicht ist, Schleife beenden
        if ($count >= $maxItems) break;

        // Objekt-ID aus den Attributen holen, Standardwert 'N/A' falls nicht vorhanden
        $objectid = $item['attributes']['objectid'] ?? 'N/A';
        // Adresse aus den Attributen holen, Standardwert 'Keine Adresse'
        $adresse = $item['attributes']['adresse'] ?? 'Keine Adresse';
        // Koordinaten aus dem Geometrie-Array holen, Standardwert 0
        $x = $item['geometry']['x'] ?? 0;
        $y = $item['geometry']['y'] ?? 0;

        // Adresse mittels regulärem Ausdruck in Straße, Hausnummer, PLZ und Stadt zerlegen
        preg_match('/(.+?) (\d+)\s?\((\d{5}) (.+)\)/', $adresse, $addressParts);
        // Falls der Ausdruck Treffer liefert, werden die Teile zugewiesen, ansonsten Fallbacks verwendet
        $street = $addressParts[1] ?? $adresse;
        $houseNumber = $addressParts[2] ?? '';
        $postalCode = $addressParts[3] ?? '';
        $city = $addressParts[4] ?? '';
?>
        <!-- HTML-Ausgabe für eine einzelne Tankstelle -->
        <div class="col-12 col-md-6 col-lg-4 tankstellen-card" data-street="<?php echo esc_attr(strtolower($street)); ?>">
            <div class="card shadow-sm border-0 rounded-4">
                <div class="card-body">
                    <!-- Anzeige des Titels mit der Objekt-ID der Tankstelle -->
                    <h5 class="card-title fw-bold">⛽ Tankstelle <?php echo esc_html($objectid); ?></h5>
                    <p class="card-text">
                        <!-- Anzeige der Adresse: Straße und Hausnummer -->
                        <span class="text-muted">📍 <?php echo esc_html($street) . ' ' . esc_html($houseNumber); ?></span><br>
                        <!-- Anzeige der PLZ und Stadt -->
                        <span class="text-muted">🏙 <?php echo esc_html($postalCode) . ' ' . esc_html($city); ?></span><br>
                        <?php 
                        // Falls die Option zum Anzeigen der Koordinaten aktiviert ist, diese ausgeben
                        if ($showCoordinates) : ?>
                            <span class="text-muted">
                                📌 Koordinaten: 
                                <strong>
                                    <?php 
                                    // Formatierung der Koordinaten mit 5 Dezimalstellen
                                    echo esc_html(number_format($x, 5)) . ', ' . esc_html(number_format($y, 5)); 
                                    ?>
                                </strong>
                            </span>
                        <?php endif; ?>
                    </p>
                </div>
            </div>
        </div>
<?php
        $count++; // Zähler erhöhen, um die Anzahl der ausgegebenen Tankstellen zu verfolgen
    endforeach;
else : // Wenn $decodedData kein gültiges Array ist oder leer
?>
    <p>Keine gültigen Daten verfügbar.</p>
<?php endif; ?>
