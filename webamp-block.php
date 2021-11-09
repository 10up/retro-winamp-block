<?php
/**
 * Plugin Name:       Webamp Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       webamp-block
 *
 * @package           tenup
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
		register_block_type( __DIR__ );
	}
);

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
