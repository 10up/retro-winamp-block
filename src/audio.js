/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __experimentalUseInnerBlocksProps as useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { View } from '@wordpress/primitives';

/**
 * Internal dependencies
 */
import WebAmp from './webamp';

const allowedBlocks = [ 'core/audio' ];

export const Audio = ( props ) => {
	const {
		audio,
		currentSkin,
		mediaPlaceholder,
		blockProps,
	} = props;

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		renderAppender: false,
	} );

	return (
		<figure
			{ ...innerBlocksProps }
			className={ classnames(
				blockProps.className,
				'blocks-audio-list',
			) }
		>
			<WebAmp audio={ audio } currentSkin={ currentSkin } />

			{ children }

			<View
				className="blocks-webamp-media-placeholder-wrapper"
			>
				{ mediaPlaceholder }
			</View>
		</figure>
	);
};

export default Audio;
