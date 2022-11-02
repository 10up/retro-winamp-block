import Webamp from 'webamp';
import butterchurnPresets from 'butterchurn-presets';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	const container = document.querySelector( '.wp-block-tenup-winamp-block' );

	// Ensure our container exists
	if ( ! container ) {
		return;
	}

	// Ensure we actually have some audio to play
	const audioElements = container.querySelectorAll( 'audio' );
	if ( ! audioElements ) {
		return;
	}

	const options = {
		initialTracks: [],
	};

	audioElements.forEach( ( audio ) =>
		options.initialTracks.push( { url: audio.dataset.src } )
	);

	// Ensure our audio tracks were added correctly
	if ( options.initialTracks.length === 0 ) {
		return;
	}

	const skin = container.dataset.skin || '';

	// Add the custom skin if it was set
	if ( skin ) {
		const match = skin.match(
			/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/
		);
		if ( match && match.length === 2 ) {
			options.initialSkin = {
				url: `https://cdn.webampskins.org/skins/${ match[ 1 ] }.wsz`,
			};
		}
	}

	options.__butterchurnOptions = {
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
	};

	options.__initialWindowLayout = {
		main: { position: { x: 0, y: 0 } },
		equalizer: { position: { x: 0, y: 116 } },
		playlist: { position: { x: 0, y: 232 }, size: [ 0, 1 ] },
		milkdrop: { position: { x: 275, y: 0 }, size: [ 7, 9 ] },
	};

	// Render the player
	new Webamp( options ).renderWhenReady( container );
} );
