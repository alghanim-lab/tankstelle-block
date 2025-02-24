
# Tankstellen-in-Köln 

# Installation des Plugins

## 1. Plugin installieren

1. Klone oder lade das Plugin herunter und verschiebe es in das Verzeichnis:
   ```sh
   /wordpress/wp-content/plugins/
   ```

2. Lade **Bootstrap Gutenberg Blocks for WordPress** herunter, installiere es und aktiviere es in WordPress unter **Plugins** im Dashboard.

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


=== Tankstelle Block ===
Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example block scaffolded with Create Block tool.

== Description ==

This is the long description. No limit, and you can use Markdown (as well as in the following sections).

For backwards compatibility, if this section is missing, the full length of the short description will be used, and
Markdown parsed.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/tankstelle-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
