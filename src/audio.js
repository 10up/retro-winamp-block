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

import { View } from '@wordpress/primitives';
import { __ } from '@wordpress/i18n';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';

/**
 * Internal dependencies
 */
import WebAmp from './webamp';

const allowedBlocks = [ 'core/audio' ];

export const Audio = ( props ) => {
	const { audio, currentSkin, mediaPlaceholder, blockProps, preview: isPreview, setAttributes } = props;

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
			<BlockControls>
				<ToolbarGroup>
					{ isPreview ? (
						<ToolbarButton
							className="components-tab-button winamp-show-media"
							onClick={ () => {
								setAttributes( { preview: ! isPreview } );
							} }
						>
							<span>{ __( 'Manage Media', 'winamp-block' ) }</span>
						</ToolbarButton>
					) : (
						<ToolbarButton
							className="components-tab-button winamp-show-preview"
							onClick={ () => {
								setAttributes( { preview: ! isPreview } );
							} }
						>
							<span>{ __( 'Show Preview', 'winamp-block' ) }</span>
						</ToolbarButton>
					) }
				</ToolbarGroup>
			</BlockControls>
			{ isPreview ? (
				<div id="webamp-container">
					<WebAmp audio={ audio } currentSkin={ currentSkin } preview={ isPreview } />
				</div>
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
