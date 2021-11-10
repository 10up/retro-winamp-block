import Webamp from "webamp";
import domReady from "@wordpress/dom-ready";

domReady(() => {
	const container = document.querySelector(".wp-block-tenup-webamp-block");

	if (!container) {
		return;
	}

	const skin = container.dataset.skin || "";
	const options = {
		initialTracks: [
			{
				metaData: {
					artist: "DJ Mike Llama",
					title: "Llama Whippin' Intro",
				},
				// NOTE: Your audio file must be served from the same domain as your HTML
				// file, or served with permissive CORS HTTP headers:
				// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
				url:
					"https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
				duration: 5.322286,
			},
		],
		initialSkin: {},
	};

	if (skin) {
		const match = skin.match(/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/);
		if (match && match.length === 2) {
			options.initialSkin = {
				url: `https://cdn.webampskins.org/skins/${match[1]}.wsz`
			}
		}
	};

	new Webamp(options).renderWhenReady(container);
});
