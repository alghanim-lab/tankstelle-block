<?php
/**
 * Plugin Name:       Tankstelle Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tankstelle-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// if (!function_exists('esc_html')) {
//     require_once(ABSPATH . 'wp-load.php');
// }


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

// function create_block_tankstelle_block_block_init() {
// 	register_block_type( __DIR__ . '/build' );
// }
// add_action( 'init', 'create_block_tankstelle_block_block_init' );


 function create_block_tankstelle_block_block_init() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'render_tankstelle_block', // Das stellt sicher, dass WordPress geladen ist, bevor render.php aufgerufen wird.
    ));
}
add_action( 'init', 'create_block_tankstelle_block_block_init' );

function render_tankstelle_block($attributes) {
    ob_start(); // Das speichert die HTML-Ausgabe von render.php und gibt sie als String zurück.
    include plugin_dir_path(__FILE__) . 'src/backend/render.php'; // Das lädt render.php sicher innerhalb von WordPress.
    return ob_get_clean(); // Das speichert die HTML-Ausgabe von render.php und gibt sie als String zurück.
}


// wp_enqueue_script('tankstelle-script', plugin_dir_url(__FILE__) . 'src/backend/script.js', array('wp-blocks', 'wp-element', 'wp-editor'), true);
