import { useEffect, useState } from '@wordpress/element';
import Webamp from "webamp";

export const WebAmp = ( props ) => {
	const {
		audio = [],
		currentSkin = '',
	} = props;
	const [ divRef, setDivRef ] = useState( null );
	const [ webamp, setWebamp ] = useState( null );

	// Initial player load
	useEffect( () => {
		if ( divRef === null ) {
			return;
		}

		const options = {
			initialTracks: []
		};

		audio.forEach( audio => options.initialTracks.push( { url: audio.url } ) );

		// Add the custom skin if it was set
		if ( currentSkin ) {
			const match = currentSkin.match( /(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/ );
			if ( match && match.length === 2 ) {
				options.initialSkin = {
					url: `https://cdn.webampskins.org/skins/${match[1]}.wsz`
				}
			}
		};

		const player = new Webamp( options );
		setWebamp( player );
		player.renderWhenReady( divRef );

		return () => {
			player.dispose();
		};
	}, [ divRef ] );

	// Add/remove tracks as they change
	useEffect( () => {
		if ( webamp === null ) {
			return;
		}

		const tracks = [];
		audio.forEach( audio => tracks.push( { url: audio.url } ) );
		webamp.setTracksToPlay( tracks );
		webamp.stop();
	}, audio );

	// Change the skin as it changes
	useEffect( () => {
		if ( webamp === null ) {
			return;
		}

		if ( currentSkin ) {
			const match = currentSkin.match( /(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/ );
			if ( match && match.length === 2 ) {
				webamp.setSkinFromUrl( `https://cdn.webampskins.org/skins/${match[1]}.wsz` );
			}
		};
	}, [ currentSkin ] );

	return (
		<div style={{"minHeight": "350px"}} ref={ setDivRef } />
	);
}

export default WebAmp;
