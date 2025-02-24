
# Tankstellen-in-Köln 

# Installation des Plugins

## 1. Plugin installieren

1. Klone oder lade das Plugin herunter und verschiebe es in das Verzeichnis:
   ```sh
   /wordpress/wp-content/plugins/
   ```

2. Lade **Bootstrap Gutenberg Blocks for WordPress** [hier herunter](https://de.wordpress.org/plugins/wp-bootstrap-blocks/), installiere es und aktiviere es in WordPress unter **Plugins** im Dashboard.

## 2. Bootstrap für WordPress aktivieren

Füge die folgenden Funktionen in die `functions.php`-Datei deines Themes oder Child-Themes hinzu.

### WordPress Bootstrap für das Frontend

```php
function bootstrap_enqueue_scripts() {
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'bootstrap_enqueue_scripts');
```

### WordPress Bootstrap für den Editor (Backend)

```php
function bootstrap_enqueue_editor_scripts() {
    wp_enqueue_style('bootstrap-css-editor', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js-editor', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array(), false, true);
}
add_action('enqueue_block_editor_assets', 'bootstrap_enqueue_editor_scripts');
```

## 3. Speichern und Fertig!

Speichere alle Änderungen – das Plugin ist nun installiert und einsatzbereit!


<p align="center">
  <img src="https://github.com/alghanim-lab/tankstelle-block/blob/main/img/plugin-demo.gif" width="800" height="400" title="Tankstellen in Köln">
  <!-- <img src="your_relative_path_here_number_2_large_name" width="350" alt="accessibility text"> -->
</p>
