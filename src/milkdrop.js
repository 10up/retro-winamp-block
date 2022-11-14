import butterchurnPresets from 'butterchurn-presets';

export const milkdropOptions = {
	__butterchurnOptions: {
		butterchurnOpen: true,
		importButterchurn: () => import( 'butterchurn' ),
		getPresets: () => {
			const presets = butterchurnPresets.getPresets();

			return Object.keys( presets ).map( ( name ) => {
				return {
					name,
					butterchurnPresetObject: presets[ name ],
				};
			} );
		},
	},
	__initialWindowLayout: {
		main: { position: { x: 0, y: 0 } },
		equalizer: { position: { x: 0, y: 116 } },
		playlist: { position: { x: 0, y: 232 }, size: [ 0, 1 ] },
		milkdrop: { position: { x: 275, y: 0 }, size: [ 7, 9 ] },
	},
};

export default milkdropOptions;
