# Winamp Block for WordPress

> A Winamp-styled audio block for all your retro music player needs.

[![Support Level](https://img.shields.io/badge/support-stable-blue.svg)](#support-level) [![Release Version](https://img.shields.io/github/release/10up/retro-winamp-block.svg)](https://github.com/10up/retro-winamp-block/releases/latest) ![WordPress tested up to version](https://img.shields.io/wordpress/plugin/tested/retro-winamp-block?label=WordPress) [![GPLv2 License](https://img.shields.io/github/license/10up/retro-winamp-block.svg)](https://github.com/10up/retro-winamp-block/blob/develop/LICENSE.md)

[![E2E test](https://github.com/10up/retro-winamp-block/actions/workflows/cypress.yml/badge.svg)](https://github.com/10up/retro-winamp-block/actions/workflows/cypress.yml) [![JS and CSS lint](https://github.com/10up/retro-winamp-block/actions/workflows/eslint.yml/badge.svg)](https://github.com/10up/retro-winamp-block/actions/workflows/eslint.yml) [![PHPCS](https://github.com/10up/retro-winamp-block/actions/workflows/phpcs.yml/badge.svg)](https://github.com/10up/retro-winamp-block/actions/workflows/phpcs.yml) [![PHP Compatibility](https://github.com/10up/retro-winamp-block/actions/workflows/php-compatibility.yml/badge.svg)](https://github.com/10up/retro-winamp-block/actions/workflows/php-compatibility.yml)

## Overview

Do you miss the days of filling up your computer's harddrive with MP3 files, burning CDs with your favorite party mixes, the glam and grunge fashion styles, waiting every week for the latest episodes of Friends and Sex and the City (sorry, no binging on streaming episodes), and all that came with the 90s?  Do you wish the WordPress core blocks offered you more styles to match your interests?  Then look no further, because this plugin transforms a bland audio block into a llama-riffic Winamp-stlyed audio block!

**Disclaimer:** _[Winamp](https://en.wikipedia.org/wiki/Winamp) and the Winamp logo are property of [Nullsoft Inc.](https://en.wikipedia.org/wiki/Nullsoft) and its owner [Radionomy Group](https://en.wikipedia.org/wiki/Radionomy) (now defunct).  This project also leverages the [MIT-licensed](https://github.com/captbaritone/webamp/blob/master/LICENSE.txt) [Webamp player](https://webamp.org/), many thanks to  Jordan Eldredge for his efforts there._

![Winamp Block](.wordpress-org/screenshot-1.png "The Winamp player with the base, default skin.")

![Winamp Milkdrop visualisations](.wordpress-org/screenshot-3.png "The Winamp player with the Mildrop visualizer enabled.")

## Requirements

* PHP >=7.4
* [WordPress](http://wordpress.org/) >=6.1

## Installation

1. Install the plugin via the plugin installer, either by searching for it or uploading a ZIP file.
1. Activate the plugin.
1. Use a Winamp-styled audio player block on your site; what retro fun!

## Changing Player Skins

There are four default skins included in the plugin, these can be selected via the visual options in the "Winamp Player Skin" block sidebar option.

![Winamp player skin selector](.wordpress-org/screenshot-4.png "Winamp Block settings showing the default skin selections and toggle to enable custom Skin URL entry.")

In order to select alternate player skins, browse [the Winamp Skin Museum](https://skins.webamp.org/) and find a preferred skin, copy the URL of the specific skin (e.g., https://skins.webamp.org/skin/bb0bf8064d108271afea419308dcb6ea/NES_Duck_Hunt.wsz/), enable the "Use Custom Skin?" option, and paste the URL in the `Skin URL` field in the Winamp Block Skin settings.

![Winamp Block settings](.wordpress-org/screenshot-2.png "Winamp Block settings showing the Skin URL setting updated to an alternate Winamp skin.")

## Frequently Asked Questions

### This is amazing, how can I help contribute to this plugin?

Great question and I could not agree with you more!  You can help contribute to this [Winamp Block plugin on GitHub](https://github.com/10up/winamp-block) or to the [Webamp project on GitHub](https://github.com/captbaritone/webamp).

### Ok this is making me nostalgic, how can I submit a new skin for the player?

Details on how to create a new skin is available [here](https://github.com/WACUP/Winamp-Skinning-Archive/blob/master/Classic%20Skins/Winamp_skinning_tutorial_1_5_0.pdf).  We recommend downloading the [base Winamp skin](https://skins.webamp.org/skin/5e4f10275dcb1fb211d4a8b4f1bda236/base-2.91.wsz/), renaming the file extension from .WSZ to .ZIP, unzipping that file and inspecting all the bitmap and textfiles.  Then use your favorite design program to craft a skin design, cut it up into the component bitmap parts, add your info to the relevant textfiles, then ZIP all that up and rename the extension to WSZ.  Finally, [upload your custom skin](https://skins.webamp.org/upload/) to the Winamp Skin Museum and once its accepted you'll be able to reference it within the Winamp Block's Skin settings.  Good luck!

## Support Level

**Stable:** 10up is not planning to develop any new features for this, but will still respond to bug reports and security concerns. We welcome PRs, but any that include new features should be small and easy to integrate and should not include breaking changes. We otherwise intend to keep this tested up to the most recent version of WordPress.

## Changelog

A complete listing of all notable changes to Winamp Block for WordPress are documented in [CHANGELOG.md](https://github.com/10up/retro-winamp-block/blob/develop/CHANGELOG.md).

## Contributing

Please read [CODE_OF_CONDUCT.md](https://github.com/10up/retro-winamp-block/blob/develop/CODE_OF_CONDUCT.md) for details on our code of conduct, [CONTRIBUTING.md](https://github.com/10up/retro-winamp-block/blob/develop/CONTRIBUTING.md) for details on the process for submitting pull requests to us, and [CREDITS.md](https://github.com/10up/retro-winamp-block/blob/develop/CREDITS.md) for a listing of maintainers of, contributors to, and libraries used by Winamp Block for WordPress.

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10up.com/uploads/2016/10/10up-Github-Banner.png" width="850" alt="Work with us at 10up"></a>
