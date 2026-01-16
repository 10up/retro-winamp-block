/**
 * Internal dependencies
 */

module.exports = {
	extends: 'plugin:@wordpress/eslint-plugin/recommended-with-formatting',

	root: true,

	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: [ require.resolve( '@wordpress/babel-preset-default' ) ],
		},
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
				moduleDirectory: [ 'node_modules', 'src' ],
			},
		},
		'import/core-modules': [
			'@wordpress/api-fetch',
			'@wordpress/blob',
			'@wordpress/block-editor',
			'@wordpress/blocks',
			'@wordpress/components',
			'@wordpress/compose',
			'@wordpress/data',
			'@wordpress/date',
			'@wordpress/dom-ready',
			'@wordpress/edit-post',
			'@wordpress/element',
			'@wordpress/hooks',
			'@wordpress/i18n',
			'@wordpress/keycodes',
			'@wordpress/plugins',
			'@wordpress/primitives',
			'@wordpress/rich-text',
		],
		'import/ignore': [
			'node_modules',
			'\\.(css|scss|sass)$',
		],
	},

	ignorePatterns: [ '*.min.js', 'tests/*' ],
};
