/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';

// since we want to support both 5.6+ & 5.9 we need to conditional import it this way
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps
	? wp.blockEditor.useInnerBlocksProps
	: wp.blockEditor.__experimentalUseInnerBlocksProps;

import { __ } from '@wordpress/i18n';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { View } from '@wordpress/primitives';

/**
 * Internal dependencies
 */
import WebAmp from './webamp';

const allowedBlocks = [ 'core/audio' ];

export const Audio = ( props ) => {
	const { audio, currentSkin, mediaPlaceholder, blockProps } = props;

	const [ isPreview, setIsPreview ] = useState();

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		renderAppender: false,
	} );

	function switchToPreview() {
		setIsPreview( true );
	}

	function switchToList() {
		setIsPreview( false );
	}

	return (
		<figure
			{ ...innerBlocksProps }
			className={ classnames(
				blockProps.className,
				'blocks-audio-list'
			) }
		>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ ! isPreview }
						onClick={ switchToList }
					>
						<span>{ __( 'Audio List', 'winamp-block' ) }</span>
					</ToolbarButton>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ isPreview }
						onClick={ switchToPreview }
					>
						<span>{ __( 'Preview Player', 'winamp-block' ) }</span>
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>

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
