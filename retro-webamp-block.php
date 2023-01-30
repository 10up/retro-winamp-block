<?php
/**
 * Plugin Name:       Retro Winamp Block
 * Plugin URI:        https://wordpress.org/plugins/retro-winamp-block/
 * Description:       A Winamp-styled audio block for all your retro music player needs.
 * Version:           1.2.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            10up
 * Author URI:        https://10up.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       winamp-block
 *
 * @package           tenup\Winamp_Block
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
			array(
				'render_callback' => function( $attributes = array(), $content = '' ) {
					// Replace src with data-src to avoid loading the file.
					return str_replace( 'src="', 'data-src="', $content );
				},
			)
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
			'winamp-block-frontend',
			plugins_url( 'build/frontend.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
);

add_filter(
	'render_block',
	function ( $block_content, $block, $instance ) {
		if ( 'core/audio' !== $block['blockName'] ) {
			return $block_content;
		}
		$attributes    = $block['attrs'] ?? array();
		$attachment_id = $attributes['id'] ?? 0;
		$attachment    = get_post( $attachment_id );

		// Stop here if $attachment can't be found.
		if ( ! $attachment ) {
			return $block_content;
		}

		$metadata  = wp_get_attachment_metadata( $attachment_id );
		$artist    = $metadata['artist'] ?? '';
		$title     = $metadata['title'] ?? '';
		$new_props = array(
			'artist' => $artist,
			'title'  => $title,
		);

		$new_attributes = array_reduce(
			array_keys( $new_props ),
			function ( $carry, $key ) use ( $new_props ) {
				$value = $new_props[ $key ];

				// Only return set values.
				return empty( $value ) ? $carry : "$carry data-$key=\"$value\"";
			}
		);

		return str_replace( '<audio ', "<audio $new_attributes ", $block_content );
	},
	100,
	3
);
