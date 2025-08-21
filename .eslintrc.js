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
		'import/core-modules': [],
		'import/ignore': [
			'node_modules',
			'\\.(css|scss|sass)$',
		],
	},

	ignorePatterns: [ '*.min.js', 'tests/*' ],
};
