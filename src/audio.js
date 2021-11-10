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

const allowedBlocks = [ 'core/audio' ];

export const Audio = ( props ) => {
	const {
		mediaPlaceholder,
		blockProps,
	} = props;

	const { children, ...innerBlocksProps } = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		orientation: 'horizontal',
		renderAppender: false,
		__experimentalLayout: { type: 'default', alignments: [] },
	} );

	return (
		<figure
			{ ...innerBlocksProps }
			className={ classnames(
				blockProps.className,
				'blocks-audio-grid',
			) }
		>
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
