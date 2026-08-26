import { useEffect, useState, useRef } from '@wordpress/element';
import Webamp from 'webamp';

/**
 * Internal dependencies
 */
import milkdropOptions from './milkdrop';

const WINDOW_TRANSFORMS = {
	0: 'translate( 0px, 0px )',
	1: 'translate( 0px, 232px )',
	2: 'translate( 0px, 116px )',
	3: 'translate( 0px, 348px )',
};

/**
 * In WP 7.1 the editor canvas is an iframe. Editor scripts still run in the
 * admin document, which is also where Webamp injects #webamp and its skin CSS.
 * Do not move those nodes into the iframe or the skin is lost. Pin #webamp
 * over the block instead.
 *
 * @param {HTMLElement} blockEl Block element in the canvas.
 */
function pinWebampToBlock( blockEl ) {
	const webAmp = document.getElementById( 'webamp' );
	if ( ! webAmp || ! blockEl ) {
		return;
	}

	const canvasWin = blockEl.ownerDocument.defaultView;
	const iframe = canvasWin ? canvasWin.frameElement : null;
	const blockRect = blockEl.getBoundingClientRect();
	const iframeRect = iframe ? iframe.getBoundingClientRect() : { top: 0, left: 0 };

	webAmp.style.position = 'fixed';
	webAmp.style.top = `${ iframeRect.top + blockRect.top }px`;
	webAmp.style.left = `${ iframeRect.left + blockRect.left }px`;
	webAmp.style.right = 'auto';
	webAmp.style.bottom = 'auto';
}

function layoutWindows( webAmp ) {
	const webAmpUI = webAmp.querySelectorAll( ':scope > div > div > div' );
	if ( webAmpUI.length === 4 ) {
		webAmpUI.forEach( ( ui, i ) => {
			ui.style.transform = WINDOW_TRANSFORMS[ i ];
		} );
	}
}

function getScrollTargets( element ) {
	const targets = [ window ];
	const canvasWin = element.ownerDocument.defaultView;
	if ( canvasWin && canvasWin !== window ) {
		targets.push( canvasWin );
	}
	return targets;
}

export const WebAmp = ( props ) => {
	const { audio = [], currentSkin = '', preview = true } = props;
	const divRef = useRef( null );
	const [ webamp, setWebamp ] = useState( null );

	// Initial player load
	useEffect( () => {
		if ( ! divRef.current ) {
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

		const reposition = () => {
			const blockEl = divRef.current && divRef.current.parentElement;
			pinWebampToBlock( blockEl );
		};

		player.renderWhenReady( divRef.current ).then( () => {
			const webAmp = document.getElementById( 'webamp' );
			if ( ! webAmp ) {
				return;
			}

			layoutWindows( webAmp );
			reposition();
			webAmp.classList.add( 'is-loaded' );
		} );

		const scrollTargets = getScrollTargets( divRef.current );
		scrollTargets.forEach( ( target ) => {
			target.addEventListener( 'scroll', reposition, true );
			target.addEventListener( 'resize', reposition );
		} );

		return () => {
			scrollTargets.forEach( ( target ) => {
				target.removeEventListener( 'scroll', reposition, true );
				target.removeEventListener( 'resize', reposition );
			} );

			// Hide the player instead of destroying it. This allows the player
			// to persist between previews and playlist modification.
			const webAmp = document.getElementById( 'webamp' );
			if ( webAmp ) {
				webAmp.style.display = ! preview ? 'none' : 'block';
			}
		};
	}, [ audio, currentSkin, preview ] );

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
	}, [ currentSkin, webamp ] );

	return <div ref={ divRef } />;
};

export default WebAmp;
