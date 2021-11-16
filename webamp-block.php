<?php
/**
 * Plugin Name:       Webamp Block
 * Plugin URI:        https://wordpress.org/plugins/webamp-block/
 * Description:       A Winamp-styled audio block for all your retro music player needs.
 * Version:           0.1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            10up
 * Author URI:        https://10up.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       webamp-block
 *
 * @package           tenup\Webamp_Block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
add_action(
	'init',
	function () {
		register_block_type(
			__DIR__,
			[
				'render_callback' => function( $attributes = [], $content = '' ) {
					// Replace src with data-src to avoid loading the file.
					return str_replace( 'src="', 'data-src="', $content );
				},
			]
		);
	}
);

/**
 * Register our script.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		$asset_file = include plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php';

		wp_register_script(
			'webamp-block-frontend',
			plugins_url( 'build/frontend.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
);
