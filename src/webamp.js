import { useEffect, useState, useRef } from '@wordpress/element';
import Webamp from 'webamp';

/**
 * Internal dependencies
 */
import milkdropOptions from './milkdrop';

export const WebAmp = ( props ) => {
	const { audio = [], currentSkin = '', preview = true } = props;
	const divRef = useRef( null );
	const [ webamp, setWebamp ] = useState( null );

	// Initial player load
	useEffect( () => {
		if ( divRef === null ) {
			return;
		}

		const options = {
			initialTracks: [],
		};

		audio.forEach( ( audioTrack ) =>
			options.initialTracks.push( { url: audioTrack.url } )
		);

		// Add the custom skin if it was set
		if ( currentSkin ) {
			const match = currentSkin.match(
				/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/
			);
			if ( match && match.length === 2 ) {
				options.initialSkin = {
					url: `https://cdn.webampskins.org/skins/${ match[ 1 ] }.wsz`,
				};
			}
		}

		const player = new Webamp( { ...options, ...milkdropOptions } );
		setWebamp( player );
		player.renderWhenReady( divRef.current ).then( () => {
			const webAmp = document.getElementById( 'webamp' );

			// Move the Webamp player markup into the block
			// so that the block can be interacted with while the player is visible
			const webampContainer = document.getElementById( 'webamp-container' );

			if ( webampContainer && webAmp ) {
				webampContainer.appendChild( webAmp );
			}

			// This is a hack to move the UI elements into the correct position. The
			// Webamp library tries to center the player in the window, but we want it
			// to be tucked neatly in the block.
			const webAmpUI = document.querySelectorAll( '#webamp > div > div > div' );
			const mapping = {
				0: 'translate( 0px, 0px )',
				1: 'translate( 0px, 232px )',
				2: 'translate( 0px, 116px )',
				3: 'translate( 275px, 0px )',
			};

			// make sure all the UI elements are available to manipulate
			if ( webAmpUI.length === 4 ) {
				webAmpUI.forEach( ( ui, i ) => {
					ui.style.transform = mapping[ i ];
				} );
			}

			// Add is loaded class after artifical delay to reduce page jank
			if ( webAmp ) {
				webAmp.classList.add( 'is-loaded' );
			}
		} );

		return () => {
			// Hide the player instead of destroying it. This allows the player
			// to persist between previews and playlist modification.
			const webampContainer = document.getElementById( 'webamp' );
			if ( webampContainer ) {
				webampContainer.style.display = ! preview ? 'none' : 'block';
			}
		};
	}, [ divRef.current ] );

	// Change the skin as it changes
	useEffect( () => {
		if ( webamp === null ) {
			return;
		}

		if ( currentSkin ) {
			const match = currentSkin.match(
				/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/
			);
			if ( match && match.length === 2 ) {
				webamp.setSkinFromUrl(
					`https://cdn.webampskins.org/skins/${ match[ 1 ] }.wsz`
				);
			}
		} else {
			webamp.setSkinFromUrl(
				'https://cdn.webampskins.org/skins/5e4f10275dcb1fb211d4a8b4f1bda236.wsz'
			);
		}
	}, [ currentSkin ] );

	return <div ref={ divRef } />;
};

export default WebAmp;
