/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

// since we want to support both 5.6+ & 5.9 we need to conditional import it this way
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps
	? wp.blockEditor.useInnerBlocksProps
	: wp.blockEditor.__experimentalUseInnerBlocksProps;

import { useState } from '@wordpress/element';
import { View } from '@wordpress/primitives';

/**
 * Internal dependencies
 */
import WebAmp from './webamp';

const allowedBlocks = [ 'core/audio' ];

export const Audio = ( props ) => {
	const { audio, currentSkin, mediaPlaceholder, blockProps, preview: isPreview } = props;

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		renderAppender: false,
	} );

	return (
		<figure
			{ ...innerBlocksProps }
			className={ classnames(
				blockProps.className,
				'blocks-audio-list'
			) }
		>
			{ isPreview ? (
				<WebAmp audio={ audio } currentSkin={ currentSkin } />
			) : (
				<>
					{ children }

					<View className="blocks-winamp-media-placeholder-wrapper">
						{ mediaPlaceholder }
					</View>
				</>
			) }
		</figure>
	);
};

export default Audio;
