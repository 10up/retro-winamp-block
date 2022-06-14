# Changelog

All notable changes to this project will be documented in this file, per [the Keep a Changelog standard](http://keepachangelog.com/), and will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - TBD

## [1.1.0] - 2021-12-08
### Added
- Dependency security scanning (props [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc)) via [#48](https://github.com/10up/retro-winamp-block/pull/48))
- PHP8 compatibility workflow (props [@Sidsector9](https://github.com/Sidsector9), [@jeffpaul](https://github.com/jeffpaul)) via [#39](https://github.com/10up/retro-winamp-block/pull/39))

### Changed
- Bump WordPress version "tested up to" 6.0. (props [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) [@sudip-10up](https://github.com/sudip-10up)) via [#35](https://github.com/10up/retro-winamp-block/pull/35))

### Security
- Bump ansi-regex from 4.1.0 to 4.1.1 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#42](https://github.com/10up/retro-winamp-block/pull/42))
- Bump async from 2.6.3 to 2.6.4 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#49](https://github.com/10up/retro-winamp-block/pull/49))
- Bump follow-redirects from 1.14.5 to 1.14.8 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#36](https://github.com/10up/retro-winamp-block/pull/36))
- Bump minimist from 1.2.5 to 1.2.6 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#41](https://github.com/10up/retro-winamp-block/pull/41))
- Bump moment from 2.29.1 to 2.29.2 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#43](https://github.com/10up/retro-winamp-block/pull/43))
- Bump nanoid from 3.1.30 to 3.3.1 (props [@dependabot[bot]](https://github.com/apps/dependabot), [@jeffpaul](https://github.com/jeffpaul)) via [#37](https://github.com/10up/retro-winamp-block/pull/37))

## [1.0.1] - 2021-12-08
### Changed
- Documentation and linting updates (props [@dkotter](https://github.com/dkotter), [@mitogh](https://github.com/mitogh), [@jeffpaul](https://github.com/jeffpaul) via [#27](https://github.com/10up/retro-winamp-block/pull/27), [#28](https://github.com/10up/retro-winamp-block/pull/28)).

### Fixed
- WordPress 5.9 compatibility to ensure `useInnerBlocksProps` import works and does not crash the block when selecting audio files (props [@fabiankaegy](https://github.com/fabiankaegy), [@helen](https://github.com/helen) via [#31](https://github.com/10up/retro-winamp-block/pull/31)).
- `block.json` errors limiting appearance in Block Directory (props [@jeffpaul](https://github.com/jeffpaul), [@fabiankaegy](https://github.com/fabiankaegy) via [#29](https://github.com/10up/retro-winamp-block/pull/29)).

## [1.0.0] - 2021-11-18
- Initial release of the Winamp Block plugin. 🎉

[Unreleased]: https://github.com/10up/retro-winamp-block/compare/trunk...develop
[1.0.1]: https://github.com/10up/retro-winamp-block/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/10up/retro-winamp-block/tree/1.0.0
