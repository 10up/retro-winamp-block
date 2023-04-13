=== Retro Winamp Block ===
Contributors:      10up, dinhtungdu, fabiankaegy, dkotter, melchoyce, jeffpaul
Tags:              winamp, webamp, mp3, music, audio, player, playlist, equalizer, block
Requires at least: 5.8
Tested up to:      6.2
Stable tag:        1.2.0
Requires PHP:      7.4
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

== Changelog ==

= 1.2.0 - 2023-01-25 =
**Note that this release changes the minimum PHP version to from 5.6 to 7.4.**

* **Added:** Ability to change player skin from predefined list of skins with an option for custom skin input (props [@zamanq](https://github.com/zamanq), [@Sidsector9](https://github.com/Sidsector9) via [#60](https://github.com/10up/retro-winamp-block/pull/60)).
* **Added:** Support for Milkdrop visualisations (props [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul), [@iansvo](https://github.com/iansvo) via [#67](https://github.com/10up/retro-winamp-block/pull/67)).
* **Added:** Pre-release build ZIP Github Action workflow (props [@vikrampm1](https://github.com/vikrampm1), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#80](https://github.com/10up/retro-winamp-block/pull/80)).
* **Changed:** Bump minimum PHP version from 5.6 to 7.4 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
* **Changed:** Bump minimum Node version from 12 to 16 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
* **Changed:** Bump minimum Composer version to 2 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
* **Changed:** Bump WordPress "tested up to" version to 6.1 ([@jayedul](https://github.com/jayedul), [@dkotter](https://github.com/dkotter) via [#72](https://github.com/10up/retro-winamp-block/pull/72)).
* **Fixed:** Updated initialTracks to include metaData to prevent a LockedStream console error (props [@iansvo](https://github.com/iansvo), [@ajmaurya99](https://github.com/ajmaurya99), [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#71](https://github.com/10up/retro-winamp-block/pull/71)).
* **Fixed:** Page jank and scrolling as the Webamp widget loads (props [@iansvo](https://github.com/iansvo), [@cadic](https://github.com/cadic), [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#56](https://github.com/10up/retro-winamp-block/pull/56), [#78](https://github.com/10up/retro-winamp-block/pull/78)).
* **Security:** Bump `terser` from 5.14.1 to 5.14.2 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/58)).
* **Security:** Bump `moment` from 2.29.3 to 2.29.4 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/59)).
* **Security:** Bump `moment-timezone` from 0.5.34 to 0.5.37 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/61)).
* **Security:** Bump `markdown-it` from 12.0.4 to 12.3.2 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#63](https://github.com/10up/retro-winamp-block/pull/63)).
* **Security:** Bump `@wordpress/scripts` from 19.2.4 to 24.3.0 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#63](https://github.com/10up/retro-winamp-block/pull/63)).
* **Security:** Bump `got` from 10.7.0 to 11.8.5 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#62](https://github.com/10up/retro-winamp-block/pull/62)).
* **Security:** Bump `@wordpress/env` from 4.9.0 to 5.4.0 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#62](https://github.com/10up/retro-winamp-block/pull/62)).
* **Security:** Bump `loader-utils` from 2.0.3 to 2.0.4 (props [@Sidsector9](https://github.com/Sidsector9) via [#70](https://github.com/10up/retro-winamp-block/pull/70)).
* **Security:** Bump `simple-git` from 3.14.1 to 3.16.0 (props [@jeffpaul](https://github.com/jeffpaul) via [#73](https://github.com/10up/retro-winamp-block/pull/73), [#82](https://github.com/10up/retro-winamp-block/pull/82)).
* **Security:** Bump `json5` from 1.0.1 to 1.0.2 (props [@peterwilsoncc](https://github.com/peterwilsoncc) via [#76](https://github.com/10up/retro-winamp-block/pull/76)).

= 1.1.0 - 2021-06-21 =
**Note that this release changes the minimum WordPress version to 5.8 and minimum PHP version to 5.6.**

* **Added:** PHP 8 compatibility and GitHub Action workflow (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi), [@jeffpaul](https://github.com/jeffpaul) via [#39](https://github.com/10up/retro-winamp-block/pull/39)).
* **Added:** Dependency security scanning (props [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#48](https://github.com/10up/retro-winamp-block/pull/48)).
* **Added:** PHPCS ruleset (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@iamdharmesh](https://github.com/iamdharmesh) via [#53](https://github.com/10up/retro-winamp-block/pull/53)).
* **Changed:** Bump WordPress version "tested up to" 6.0 (props [@jeffpaul](https://github.com/jeffpaul), [@sudip-10up](https://github.com/sudip-10up), [@peterwilsoncc](https://github.com/peterwilsoncc), [@dinhtungdu](https://github.com/dinhtungdu), [@vikrampm1](https://github.com/vikrampm1) via [#35](https://github.com/10up/retro-winamp-block/pull/35), [#51](https://github.com/10up/retro-winamp-block/pull/51), [#52](https://github.com/10up/retro-winamp-block/pull/52).
* **Security:** Bump `follow-redirects` from 1.14.5 to 1.14.8 (props [@dependabot](https://github.com/apps/dependabot) via [#36](https://github.com/10up/retro-winamp-block/pull/36)).
* **Security:** Bump `nanoid` from 3.1.30 to 3.3.1 (props [@dependabot](https://github.com/apps/dependabot) via [#37](https://github.com/10up/retro-winamp-block/pull/37)).
* **Security:** Bump `minimist` from 1.2.5 to 1.2.6 (props [@dependabot](https://github.com/apps/dependabot) via [#41](https://github.com/10up/retro-winamp-block/pull/41)).
* **Security:** Bump `ansi-regex` from 4.1.0 to 4.1.1 (props [@dependabot](https://github.com/apps/dependabot) via [#42](https://github.com/10up/retro-winamp-block/pull/42)).
* **Security:** Bump `moment` from 2.29.1 to 2.29.2 (props [@dependabot](https://github.com/apps/dependabot) via [#43](https://github.com/10up/retro-winamp-block/pull/43)).
* **Security:** Bump `async` from 2.6.3 to 2.6.4 (props [@dependabot](https://github.com/apps/dependabot) via [#49](https://github.com/10up/retro-winamp-block/pull/49)).

= 1.0.1 - 2021-12-08 =
* **Changed:** Documentation and linting updates (props [@dkotter](https://profiles.wordpress.org/dkotter/), [@mitogh](https://profiles.wordpress.org/mitogh/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Fixed:** WordPress 5.9 compatibility to ensure `useInnerBlocksProps` import works and does not crash the block when selecting audio files (props [@fabiankaegy](https://profiles.wordpress.org/fabiankaegy/), [@helen](https://profiles.wordpress.org/helen/)).
* **Fixed:** `block.json` errors limiting appearance in Block Directory (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/), [@fabiankaegy](https://profiles.wordpress.org/fabiankaegy/)).

= 1.0.0 - 2021-11-18 =
* Initial release of the Winamp Block plugin. 🎉

== Upgrade Notice ==

= 1.1.0 - 2021-06-21 =
**Note that this release changes the minimum WordPress version to 5.8 and minimum PHP version to 5.6.**
