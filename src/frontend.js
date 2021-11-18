import Webamp from "webamp";
import domReady from "@wordpress/dom-ready";

domReady(() => {
	const container = document.querySelector(".wp-block-tenup-winamp-block");

	// Ensure our container exists
	if (!container) {
		return;
	}

	// Ensure we actually have some audio to play
	const audioElements = container.querySelectorAll("audio");
	if (!audioElements) {
		return;
	}

	const options = {
		initialTracks: []
	};

	audioElements.forEach(audio => options.initialTracks.push( { url: audio.dataset.src } ));

	// Ensure our audio tracks were added correctly
	if (options.initialTracks.length === 0) {
		return;
	}

	const skin = container.dataset.skin || "";

	// Add the custom skin if it was set
	if (skin) {
		const match = skin.match(/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/);
		if (match && match.length === 2) {
			options.initialSkin = {
				url: `https://cdn.webampskins.org/skins/${match[1]}.wsz`
			}
		}
	};

	// Render the player
	new Webamp(options).renderWhenReady(container);
});
