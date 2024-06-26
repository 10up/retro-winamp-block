=== Retro Winamp Block ===
Contributors:      10up, dinhtungdu, fabiankaegy, dkotter, melchoyce, jeffpaul
Tags:              winamp, webamp, mp3, music, audio, player, playlist, equalizer, block
Tested up to:      6.5
Stable tag:        1.3.2
License:           GPLv2 or later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A Winamp-styled audio block for all your retro music player needs.

== Description ==

Do you miss the days of filling up your computer's harddrive with MP3 files, burning CDs with your favorite party mixes, the glam and grunge fashion styles, waiting every week for the latest episodes of Friends and Sex and the City (sorry, no binging on streaming episodes), and all that came with the 90s?  Do you wish the WordPress core blocks offered you more styles to match your interests?  Then look no further, because this plugin transforms a bland audio block into a llama-riffic Winamp-stlyed audio block!

**Disclaimer:** _[Winamp](https://en.wikipedia.org/wiki/Winamp) and the Winamp logo are property of [Nullsoft Inc.](https://en.wikipedia.org/wiki/Nullsoft) and its owner [Radionomy Group](https://en.wikipedia.org/wiki/Radionomy) (now defunct).  This project also leverages the [MIT-licensed](https://github.com/captbaritone/webamp/blob/master/LICENSE.txt) [Webamp player](https://webamp.org/), many thanks to  Jordan Eldredge for his efforts there._

== Installation ==

1. Install the plugin via the plugin installer, either by searching for it or uploading a ZIP file.
1. Activate the plugin.
1. Use a Winamp-styled audio player block on your site; what retro fun!

== Changing Player Skins ==

In order to select alternate player skins, browse [the Winamp Skin Museum](https://skins.webamp.org/) and find a preferred skin, copy the URL of the specific skin (e.g., [https://skins.webamp.org/skin/bb0bf8064d108271afea419308dcb6ea/NES_Duck_Hunt.wsz/](https://skins.webamp.org/skin/bb0bf8064d108271afea419308dcb6ea/NES_Duck_Hunt.wsz/)), and paste that URL in the `Skin URL` field in the Winamp Block Skin settings.

== Frequently Asked Questions ==

= This is amazing, how can I help contribute to this plugin? =

Great question and I could not agree with you more!  You can help contribute to this [Winamp Block plugin on GitHub](https://github.com/10up/retro-winamp-block) or to the [Webamp project on GitHub](https://github.com/captbaritone/webamp).

= Ok this is making me nostalgic, how can I submit a new skin for the player? =

Details on how to create a new skin is available [here](https://github.com/WACUP/Winamp-Skinning-Archive/blob/master/Classic%20Skins/Winamp_skinning_tutorial_1_5_0.pdf).  We recommend downloading the [base Winamp skin](https://skins.webamp.org/skin/5e4f10275dcb1fb211d4a8b4f1bda236/base-2.91.wsz/), renaming the file extension from .WSZ to .ZIP, unzipping that file and inspecting all the bitmap and textfiles.  Then use your favorite design program to craft a skin design, cut it up into the component bitmap parts, add your info to the relevant textfiles, then ZIP all that up and rename the extension to WSZ.  Finally, [upload your custom skin](https://skins.webamp.org/upload/) to the Winamp Skin Museum and once its accepted you'll be able to reference it within the Winamp Block's Skin settings.  Good luck!

== Screenshots ==

1. The Winamp player with the base, default skin.
2. Winamp Block settings showing the Skin URL setting updated to an alternate Winamp skin.
3. Winamp Milkdrop visualisations.
4. Winamp player skin selector.

== Changelog ==

= 1.3.2 - 2024-06-20 =
* **Added:** Support for the WordPress.org plugin preview (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc), [@ravinderk](https://github.com/ravinderk) via [#116](https://github.com/10up/retro-winamp-block/pull/116), [#118](https://github.com/10up/retro-winamp-block/pull/118)).
* **Added:** "Testing" section in the "CONTRIBUTING.md" file (props [@kmgalanakis](https://github.com/kmgalanakis), [@jeffpaul](https://github.com/jeffpaul) via [#132](https://github.com/10up/retro-winamp-block/pull/132)).
* **Changed:** Winamp skin preview setting to be on by default (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
* **Changed:** Move preview toggle to inspector controls from block controls (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
* **Changed:** Nest webamp component inside the block to activate block selection when interacting with the component (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
* **Changed:** Bump WordPress "tested up to" version 6.5 (props [@severine-pozzo](https://github.com/severine-pozzo), [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#114](https://github.com/10up/retro-winamp-block/pull/114), [#131](https://github.com/10up/retro-winamp-block/pull/131)).
* **Changed:** Bump WordPress minimum from 6.1 to 6.3 (props [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#131](https://github.com/10up/retro-winamp-block/pull/131)).
* **Changed:** Clean up NPM dependencies and update node to v20 (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter) via [#123](https://github.com/10up/retro-winamp-block/pull/123)).
* **Changed:** Replaced [lee-dohm/no-response](https://github.com/lee-dohm/no-response) with [actions/stale](https://github.com/actions/stale) to help with closing no-response/stale issues (props [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#128](https://github.com/10up/retro-winamp-block/pull/128)).
* **Security:** Updates `axios` from 0.25.0 to 1.6.2 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#117](https://github.com/10up/retro-winamp-block/pull/117)).
* **Security:** Updates `@wordpress/scripts` from 24.6.0 to 26.19.0 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#117](https://github.com/10up/retro-winamp-block/pull/117)).
* **Security:** Updates `express` from 4.18.2 to 4.19.2 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
* **Security:** Updates `follow-redirects` from 1.15.5 to 1.15.6 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
* **Security:** Updates `ip` from 1.1.8 to 1.1.9 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
* **Security:** Updates `webpack-dev-middleware` from 5.3.3 to 5.3.4 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).

= 1.3.1 - 2023-10-19 =
* **Added:** Check for minimum required PHP version before loading the plugin (props [@kmgalanakis](https://github.com/kmgalanakis), [@Sidsector9](https://github.com/Sidsector9) via [#103](https://github.com/10up/retro-winamp-block/pull/103)).
* **Changed:** Update our dependency review GitHub Action (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#97](https://github.com/10up/retro-winamp-block/pull/97)).
* **Changed:** Bump WordPress "tested up to" version 6.3 (props [@kmgalanakis](https://github.com/kmgalanakis), [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#102](https://github.com/10up/retro-winamp-block/pull/102), [#105](https://github.com/10up/retro-winamp-block/pull/105)).
* **Security:** Bump `semver` from 5.7.1 to 5.7.2 (props [@dependabot](https://github.com/apps/dependabot), [@ravinderk](https://github.com/ravinderk) via [#98](https://github.com/10up/retro-winamp-block/pull/98)).
* **Security:** Bump `word-wrap` from 1.2.3 to 1.2.5 (props [@dependabot](https://github.com/apps/dependabot), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#106](https://github.com/10up/retro-winamp-block/pull/106)).
* **Security:** Bump `tough-cookie` from 4.1.2 to 4.1.3 and `@cypress/request` from 2.88.11 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#107](https://github.com/10up/retro-winamp-block/pull/107)).
* **Security:** Bump `cypress` from 10.11.0 to 13.1.0 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#108](https://github.com/10up/retro-winamp-block/pull/108)).
* **Security:** Bump `@cypress/request` from 2.88.11 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#108](https://github.com/10up/retro-winamp-block/pull/108)).
* **Security:** Bump `postcss` from 8.4.20 to 8.4.31 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#110](https://github.com/10up/retro-winamp-block/pull/110)).

= 1.3.0 - 2023-04-18 =
* **Added:** E2E tests using Cypress (props [@vikrampm1](https://github.com/vikrampm1), [@barneyjeffries](https://github.com/barneyjeffries), [@iamdharmesh](https://github.com/iamdharmesh), [@cadic](https://github.com/cadic)) via [#87](https://github.com/10up/retro-winamp-block/pull/87).
* **Changed:** Bump WordPress "tested up to" version from 6.1 to 6.2 (props [@jayedul](https://github.com/jayedul), [@peterwilsoncc](https://github.com/peterwilsoncc)) via [#92](https://github.com/10up/retro-winamp-block/pull/92)
* **Changed:** [Support Level](https://github.com/10up/retro-winamp-block#support-level) from `Active` to `Stable` (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)) via [#94](https://github.com/10up/retro-winamp-block/pull/94).
* **Security:** Bump `simple-git` from `3.15.1` to `3.16.0` (props [@Sidsector9](https://github.com/Sidsector9)) via [#82](https://github.com/10up/retro-winamp-block/pull/82).
* **Security:** Bump `http-cache-semantics` from `4.1.0` to `4.1.1` (props [@peterwilsoncc](https://github.com/peterwilsoncc)) via [#85](https://github.com/10up/retro-winamp-block/pull/85).
* **Security:** Bump `@sideway/formula` from `3.0.0` to `3.0.1` (props [@faisal-alvi](https://github.com/faisal-alvi)) via [#86](https://github.com/10up/retro-winamp-block/pull/86).
* **Security:** Bump `webpack` from `5.73.0` to `5.76.2` (props [@faisal-alvi](https://github.com/faisal-alvi)) via [#90](https://github.com/10up/retro-winamp-block/pull/90).

[View historical changelog details here](https://github.com/10up/retro-winamp-block/blob/develop/CHANGELOG.md).

== Upgrade Notice ==

= 1.1.0 - 2021-06-21 =
**Note that this release changes the minimum WordPress version to 5.8 and minimum PHP version to 5.6.**
