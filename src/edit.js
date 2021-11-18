/**
 * External dependencies
 */
import { concat } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { createBlock } from '@wordpress/blocks';
import { PanelBody, TextControl, withNotices } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { Platform, useMemo } from '@wordpress/element';
import { createBlobURL } from '@wordpress/blob';

/**
 * Internal dependencies
 */
import './editor.scss';
import Audio from './audio';

const ALLOWED_MEDIA_TYPES = [ 'audio' ];
const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'webamp-block' )
	: __( 'To view the Webamp player, drag audio files, upload new ones, or select files from your library.', 'webamp-block' );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit( {
	attributes,
	clientId,
	isSelected,
	noticeOperations,
	noticeUI,
	setAttributes,
} ) {

	const { currentSkin } = attributes;
	const blockProps = useBlockProps();
	const { replaceInnerBlocks } = useDispatch( blockEditorStore );

	const innerBlockAudio = useSelect(
		( select ) => {
			return select( blockEditorStore ).getBlock( clientId )?.innerBlocks;
		},
		[ clientId ]
	);

	const audio = useMemo(
		() =>
			innerBlockAudio?.map( ( block ) => ( {
				clientId: block.clientId,
				id: block.attributes.id,
				url: block.attributes.src,
				attributes: block.attributes,
				fromSavedContent: Boolean( block.originalContent ),
			} ) ),
		[ innerBlockAudio ]
	);

	const hasAudio = !! audio.length;
	const hasAudioIds = hasAudio && audio.some( ( audioItem ) => !! audioItem.id );
	const audioUploading = audio.some(
		( audioItem ) => ! audioItem.id && audioItem.url?.indexOf( 'blob:' ) === 0
	);

	function onSelectAudio( selectedAudio ) {
		const newFileUploads =
			Object.prototype.toString.call( selectedAudio ) ===
			'[object Array]';

		const audioArray = newFileUploads
			? Array.from( selectedAudio ).map( ( file ) => {
				if ( ! file.url ) {
					return {
						url: createBlobURL( file ),
					};
				}

				return file;
			  } )
			: selectedAudio;

		const processedAudio = audioArray
			.filter( ( file ) => file.url )
			.map( ( file ) => {
				if ( ! file.url ) {
					return {
						url: createBlobURL( file ),
					};
				}

				return file;
			} );

		// Because we are reusing existing innerAudio blocks any reordering
		// done in the media library will be lost so we need to reapply that ordering
		// once the new audio blocks are merged in with existing.
		const newOrderMap = processedAudio.reduce(
			( result, media, index ) => (
				( result[ media.id ] = index ), result
			),
			{}
		);

		const existingAudioBlocks = ! newFileUploads
			? innerBlockAudio.filter( ( block ) =>
					processedAudio.find(
						( img ) => img.id === block.attributes.id
					)
			  )
			: innerBlockAudio;

		const newAudioList = processedAudio.filter(
			( media ) =>
				! existingAudioBlocks.find(
					( existingAudio ) => media.id === existingAudio.attributes.id
				)
		);

		const newBlocks = newAudioList.map( ( audio ) => {
			return createBlock( 'core/audio', {
				id: audio.id,
				src: audio.url,
			} );
		} );

		replaceInnerBlocks(
			clientId,
			concat( existingAudioBlocks, newBlocks ).sort(
				( a, b ) =>
					newOrderMap[ a.attributes.id ] -
					newOrderMap[ b.attributes.id ]
			)
		);
	}

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	const mediaPlaceholder = (
		<MediaPlaceholder
			addToGallery={ hasAudioIds }
			icon={ ! hasAudio && "format-audio" }
			onSelect={ onSelectAudio }
			isAppender={ hasAudio }
			disableMediaButtons={
				( hasAudio && ! isSelected ) || audioUploading
			}
			labels={ {
				title: ! hasAudio && __( 'Add Audio', 'webamp-block' ),
				instructions: ! hasAudio && PLACEHOLDER_TEXT,
			} }
			accept="audio/*"
			allowedTypes={ ALLOWED_MEDIA_TYPES }
			multiple={ true }
			value={ hasAudioIds ? audio : {} }
			onError={ onUploadError }
			notices={ hasAudio ? undefined : noticeUI }
		/>
	);

	if ( ! hasAudio ) {
		return <div { ...blockProps }>{ mediaPlaceholder }</div>;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Webamp Player Skin', 'webamp-block' ) }>
					<TextControl
						label={ __( 'Skin URL', 'webamp-block' ) }
						help={ __( 'The URL of the player skin to use. Find skins at https://skins.webamp.org/.', 'webamp-block' ) }
						value={ currentSkin }
						onChange={ skin => setAttributes( { currentSkin: skin } ) }
					/>
				</PanelBody>
			</InspectorControls>
			{ noticeUI }
			<Audio
				audio={ audio }
				currentSkin={ currentSkin }
				mediaPlaceholder={ mediaPlaceholder }
				blockProps={ blockProps }
			/>
		</>
	);
}

export default compose( withNotices )( Edit );
