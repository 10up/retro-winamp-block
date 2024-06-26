# Changelog

All notable changes to this project will be documented in this file, per [the Keep a Changelog standard](http://keepachangelog.com/), and will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - TBD

## [1.3.2] - 2024-06-20
### Added
- Support for the WordPress.org plugin preview (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc), [@ravinderk](https://github.com/ravinderk) via [#116](https://github.com/10up/retro-winamp-block/pull/116), [#118](https://github.com/10up/retro-winamp-block/pull/118)).
- "Testing" section in the "CONTRIBUTING.md" file (props [@kmgalanakis](https://github.com/kmgalanakis), [@jeffpaul](https://github.com/jeffpaul) via [#132](https://github.com/10up/retro-winamp-block/pull/132)).

### Changed
- Winamp skin preview setting to be on by default (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
- Move preview toggle to inspector controls from block controls (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
- Nest webamp component inside the block to activate block selection when interacting with the component (props [@jeffpaul](https://github.com/jeffpaul), [@psorensen](https://github.com/psorensen), [@dkotter](https://github.com/dkotter) via [#124](https://github.com/10up/retro-winamp-block/pull/124)).
- Bump WordPress "tested up to" version 6.5 (props [@severine-pozzo](https://github.com/severine-pozzo), [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#114](https://github.com/10up/retro-winamp-block/pull/114), [#131](https://github.com/10up/retro-winamp-block/pull/131)).
- Bump WordPress minimum from 6.1 to 6.3 (props [@sudip-md](https://github.com/sudip-md), [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#131](https://github.com/10up/retro-winamp-block/pull/131)).
- Clean up NPM dependencies and update node to v20 (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter) via [#123](https://github.com/10up/retro-winamp-block/pull/123)).
- Replaced [lee-dohm/no-response](https://github.com/lee-dohm/no-response) with [actions/stale](https://github.com/actions/stale) to help with closing no-response/stale issues (props [@jeffpaul](https://github.com/jeffpaul), [@dkotter](https://github.com/dkotter) via [#128](https://github.com/10up/retro-winamp-block/pull/128)).

### Security
- Updates `axios` from 0.25.0 to 1.6.2 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#117](https://github.com/10up/retro-winamp-block/pull/117)).
- Updates `@wordpress/scripts` from 24.6.0 to 26.19.0 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#117](https://github.com/10up/retro-winamp-block/pull/117)).
- Updates `express` from 4.18.2 to 4.19.2 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
- Updates `follow-redirects` from 1.15.5 to 1.15.6 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
- Updates `ip` from 1.1.8 to 1.1.9 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).
- Updates `webpack-dev-middleware` from 5.3.3 to 5.3.4 (props [@dependabot](https://github.com/apps/dependabot), [@desrosj](https://github.com/desrosj), [@Sidsector9](https://github.com/Sidsector9) via [#130](https://github.com/10up/retro-winamp-block/pull/130)).

## [1.3.1] - 2023-10-19
### Added
- Check for minimum required PHP version before loading the plugin (props [@kmgalanakis](https://github.com/kmgalanakis), [@Sidsector9](https://github.com/Sidsector9) via [#103](https://github.com/10up/retro-winamp-block/pull/103)).

### Changed
- Update our dependency review GitHub Action (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#97](https://github.com/10up/retro-winamp-block/pull/97)).
- Bump WordPress "tested up to" version 6.3 (props [@kmgalanakis](https://github.com/kmgalanakis), [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#102](https://github.com/10up/retro-winamp-block/pull/102), [#105](https://github.com/10up/retro-winamp-block/pull/105)).

### Security
- Bump `semver` from 5.7.1 to 5.7.2 (props [@dependabot](https://github.com/apps/dependabot), [@ravinderk](https://github.com/ravinderk) via [#98](https://github.com/10up/retro-winamp-block/pull/98)).
- Bump `word-wrap` from 1.2.3 to 1.2.5 (props [@dependabot](https://github.com/apps/dependabot), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#106](https://github.com/10up/retro-winamp-block/pull/106)).
- Bump `tough-cookie` from 4.1.2 to 4.1.3 and `@cypress/request` from 2.88.11 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#107](https://github.com/10up/retro-winamp-block/pull/107)).
- Bump `cypress` from 10.11.0 to 13.1.0 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#108](https://github.com/10up/retro-winamp-block/pull/108)).
- Bump `@cypress/request` from 2.88.11 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot), [@Sidsector9](https://github.com/Sidsector9) via [#108](https://github.com/10up/retro-winamp-block/pull/108)).
- Bump `postcss` from 8.4.20 to 8.4.31 (props [@dependabot](https://github.com/apps/dependabot), [@faisal-alvi](https://github.com/faisal-alvi) via [#110](https://github.com/10up/retro-winamp-block/pull/110)).

## [1.3.0] - 2023-04-18
### Added
- E2E tests using Cypress (props [@vikrampm1](https://github.com/vikrampm1), [@barneyjeffries](https://github.com/barneyjeffries), [@iamdharmesh](https://github.com/iamdharmesh), [@cadic](https://github.com/cadic) via [#87](https://github.com/10up/retro-winamp-block/pull/87)).

### Changed
- Bump WordPress "tested up to" version from 6.1 to 6.2 (props [@jayedul](https://github.com/jayedul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#92](https://github.com/10up/retro-winamp-block/pull/92)).
- [Support Level](https://github.com/10up/retro-winamp-block#support-level) from `Active` to `Stable` (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#94](https://github.com/10up/retro-winamp-block/pull/94)).

### Security
- Bump `simple-git` from `3.15.1` to `3.16.0` (props [@Sidsector9](https://github.com/Sidsector9) via [#82](https://github.com/10up/retro-winamp-block/pull/82)).
- Bump `http-cache-semantics` from `4.1.0` to `4.1.1` (props [@peterwilsoncc](https://github.com/peterwilsoncc) via [#85](https://github.com/10up/retro-winamp-block/pull/85)).
- Bump `@sideway/formula` from `3.0.0` to `3.0.1` (props [@faisal-alvi](https://github.com/faisal-alvi) via [#86](https://github.com/10up/retro-winamp-block/pull/86)).
- Bump `webpack` from `5.73.0` to `5.76.2` (props [@faisal-alvi](https://github.com/faisal-alvi) via [#90](https://github.com/10up/retro-winamp-block/pull/90)).

## [1.2.0] - 2023-01-30
**Note that this release changes the minimum PHP version to from 5.6 to 7.4.**

### Added
- Ability to change player skin from predefined list of skins with an option for custom skin input (props [@zamanq](https://github.com/zamanq), [@Sidsector9](https://github.com/Sidsector9) via [#60](https://github.com/10up/retro-winamp-block/pull/60)).
- Support for Milkdrop visualisations (props [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh), [@jeffpaul](https://github.com/jeffpaul), [@iansvo](https://github.com/iansvo) via [#67](https://github.com/10up/retro-winamp-block/pull/67)).
- Pre-release build ZIP Github Action workflow (props [@vikrampm1](https://github.com/vikrampm1), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#80](https://github.com/10up/retro-winamp-block/pull/80)).

### Changed
- Bump minimum PHP version from 5.6 to 7.4 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
- Bump minimum Node version from 12 to 16 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
- Bump minimum Composer version to 2 (props [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#66](https://github.com/10up/retro-winamp-block/pull/66)).
- Bump WordPress "tested up to" version to 6.1 ([@jayedul](https://github.com/jayedul), [@dkotter](https://github.com/dkotter) via [#72](https://github.com/10up/retro-winamp-block/pull/72)).

### Fixed
- Updated initialTracks to include metaData to prevent a LockedStream console error (props [@iansvo](https://github.com/iansvo), [@ajmaurya99](https://github.com/ajmaurya99), [@Sidsector9](https://github.com/Sidsector9), [@cadic](https://github.com/cadic) via [#71](https://github.com/10up/retro-winamp-block/pull/71)).
- Page jank and scrolling as the Webamp widget loads (props [@iansvo](https://github.com/iansvo), [@cadic](https://github.com/cadic), [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#56](https://github.com/10up/retro-winamp-block/pull/56), [#78](https://github.com/10up/retro-winamp-block/pull/78)).

### Security
- Bump `terser` from 5.14.1 to 5.14.2 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/58)).
- Bump `moment` from 2.29.3 to 2.29.4 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/59)).
- Bump `moment-timezone` from 0.5.34 to 0.5.37 (props [@jeffpaul](https://github.com/jeffpaul) via [#58](https://github.com/10up/retro-winamp-block/pull/61)).
- Bump `markdown-it` from 12.0.4 to 12.3.2 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#63](https://github.com/10up/retro-winamp-block/pull/63)).
- Bump `@wordpress/scripts` from 19.2.4 to 24.3.0 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#63](https://github.com/10up/retro-winamp-block/pull/63)).
- Bump `got` from 10.7.0 to 11.8.5 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#62](https://github.com/10up/retro-winamp-block/pull/62)).
- Bump `@wordpress/env` from 4.9.0 to 5.4.0 (props [@faisal-alvi](https://github.com/faisal-alvi) via [#62](https://github.com/10up/retro-winamp-block/pull/62)).
- Bump `loader-utils` from 2.0.3 to 2.0.4 (props [@Sidsector9](https://github.com/Sidsector9) via [#70](https://github.com/10up/retro-winamp-block/pull/70)).
- Bump `simple-git` from 3.14.1 to 3.16.0 (props [@jeffpaul](https://github.com/jeffpaul) via [#73](https://github.com/10up/retro-winamp-block/pull/73), [#82](https://github.com/10up/retro-winamp-block/pull/82)).
- Bump `json5` from 1.0.1 to 1.0.2 (props [@peterwilsoncc](https://github.com/peterwilsoncc) via [#76](https://github.com/10up/retro-winamp-block/pull/76)).

## [1.1.0] - 2021-06-21
**Note that this release changes the minimum WordPress version to 5.8 and minimum PHP version to 5.6.**

### Added
- PHP 8 compatibility and GitHub Action workflow (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi), [@jeffpaul](https://github.com/jeffpaul) via [#39](https://github.com/10up/retro-winamp-block/pull/39)).
- Dependency security scanning (props [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#48](https://github.com/10up/retro-winamp-block/pull/48)).
- PHPCS ruleset (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@iamdharmesh](https://github.com/iamdharmesh) via [#53](https://github.com/10up/retro-winamp-block/pull/53)).

### Changed
- Bump WordPress version "tested up to" 6.0 (props [@jeffpaul](https://github.com/jeffpaul), [@sudip-10up](https://github.com/sudip-10up), [@peterwilsoncc](https://github.com/peterwilsoncc), [@dinhtungdu](https://github.com/dinhtungdu), [@vikrampm1](https://github.com/vikrampm1) via [#35](https://github.com/10up/retro-winamp-block/pull/35), [#51](https://github.com/10up/retro-winamp-block/pull/51), [#52](https://github.com/10up/retro-winamp-block/pull/52).

### Security
- Bump `follow-redirects` from 1.14.5 to 1.14.8 (props [@dependabot](https://github.com/apps/dependabot) via [#36](https://github.com/10up/retro-winamp-block/pull/36)).
- Bump `nanoid` from 3.1.30 to 3.3.1 (props [@dependabot](https://github.com/apps/dependabot) via [#37](https://github.com/10up/retro-winamp-block/pull/37)).
- Bump `minimist` from 1.2.5 to 1.2.6 (props [@dependabot](https://github.com/apps/dependabot) via [#41](https://github.com/10up/retro-winamp-block/pull/41)).
- Bump `ansi-regex` from 4.1.0 to 4.1.1 (props [@dependabot](https://github.com/apps/dependabot) via [#42](https://github.com/10up/retro-winamp-block/pull/42)).
- Bump `moment` from 2.29.1 to 2.29.2 (props [@dependabot](https://github.com/apps/dependabot) via [#43](https://github.com/10up/retro-winamp-block/pull/43)).
- Bump `async` from 2.6.3 to 2.6.4 (props [@dependabot](https://github.com/apps/dependabot) via [#49](https://github.com/10up/retro-winamp-block/pull/49)).

## [1.0.1] - 2021-12-08
### Changed
- Documentation and linting updates (props [@dkotter](https://github.com/dkotter), [@mitogh](https://github.com/mitogh), [@jeffpaul](https://github.com/jeffpaul) via [#27](https://github.com/10up/retro-winamp-block/pull/27), [#28](https://github.com/10up/retro-winamp-block/pull/28)).

### Fixed
- WordPress 5.9 compatibility to ensure `useInnerBlocksProps` import works and does not crash the block when selecting audio files (props [@fabiankaegy](https://github.com/fabiankaegy), [@helen](https://github.com/helen) via [#31](https://github.com/10up/retro-winamp-block/pull/31)).
- `block.json` errors limiting appearance in Block Directory (props [@jeffpaul](https://github.com/jeffpaul), [@fabiankaegy](https://github.com/fabiankaegy) via [#29](https://github.com/10up/retro-winamp-block/pull/29)).

## [1.0.0] - 2021-11-18
- Initial release of the Winamp Block plugin. 🎉

[Unreleased]: https://github.com/10up/retro-winamp-block/compare/trunk...develop
[1.3.2]: https://github.com/10up/retro-winamp-block/compare/1.3.1...1.3.2
[1.3.1]: https://github.com/10up/retro-winamp-block/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/10up/retro-winamp-block/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/10up/retro-winamp-block/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/10up/retro-winamp-block/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/10up/retro-winamp-block/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/10up/retro-winamp-block/tree/1.0.0
