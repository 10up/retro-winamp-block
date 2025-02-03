/**
 * External dependencies
 */
import { concat } from 'lodash'; // eslint-disable-line import/no-extraneous-dependencies

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { createBlock } from '@wordpress/blocks';
import {
	PanelBody,
	TextControl,
	withNotices,
	ToggleControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { Platform, useMemo, useState } from '@wordpress/element';
import { createBlobURL } from '@wordpress/blob';

/**
 * Internal dependencies
 */
import './editor.scss';
import Audio from './audio';

const ALLOWED_MEDIA_TYPES = [ 'audio' ];
const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'winamp-block' )
	: __(
		'To view the Winamp player, drag audio files, upload new ones, or select files from your library.',
		'winamp-block'
	);

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props Block edit props.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {JSX.Element} Element to render.
 */
function Edit( props ) {
	const {
		attributes,
		clientId,
		isSelected,
		noticeOperations,
		noticeUI,
		setAttributes,
	} = props;
	const { currentSkin, preview } = attributes;
	const [ useCustomUrl, setUseCustomUrl ] = useState( false );

	const blockProps = useBlockProps(); // eslint-disable-line react-hooks/rules-of-hooks
	const { replaceInnerBlocks } = useDispatch( blockEditorStore ); // eslint-disable-line react-hooks/rules-of-hooks

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const innerBlockAudio = useSelect(
		( select ) => {
			return select( blockEditorStore ).getBlock( clientId )?.innerBlocks;
		},
		[ clientId ]
	);

	const defaultSkins = [
		'https://skins.webamp.org/skin/5e4f10275dcb1fb211d4a8b4f1bda236/base-2.91.wsz/',
		'https://skins.webamp.org/skin/cd251187a5e6ff54ce938d26f1f2de02/Winamp3_Classified_v5.5.wsz/',
		'https://skins.webamp.org/skin/6856045909b0040283b43c53a002de69/Blue_Fade.wsz/',
		'https://skins.webamp.org/skin/a5b4d732f406dd30164ef88358044f03/Samsara-amp.wsz/',
	];

	// eslint-disable-next-line react-hooks/rules-of-hooks
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
	const hasAudioIds =
		hasAudio && audio.some( ( audioItem ) => !! audioItem.id );
	const audioUploading = audio.some(
		( audioItem ) =>
			! audioItem.id && audioItem.url?.indexOf( 'blob:' ) === 0
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
					( existingAudio ) =>
						media.id === existingAudio.attributes.id
				)
		);

		const newBlocks = newAudioList.map( ( audioTrack ) => {
			return createBlock( 'core/audio', {
				id: audioTrack.id,
				src: audioTrack.url,
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
			icon={ ! hasAudio && 'format-audio' }
			onSelect={ onSelectAudio }
			isAppender={ hasAudio }
			disableMediaButtons={
				( hasAudio && ! isSelected ) || audioUploading
			}
			labels={ {
				title: ! hasAudio && __( 'Add Audio', 'winamp-block' ),
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

	const skinPreviewUrl = ( skin ) => {
		if ( skin ) {
			const match = skin.match(
				/(?:https?:)?(?:\/\/)?skins\.webamp\.org\/skin\/(\w+)\/(?:.*)?/
			);

			if ( match && match.length === 2 ) {
				return `https://cdn.webampskins.org/screenshots/${ match[ 1 ] }.png`;
			}
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Winamp Player Skin', 'winamp-block' ) }>
					{ useCustomUrl ? (
						<TextControl
							label={ __( 'Skin URL', 'winamp-block' ) }
							help={ __(
								'The URL of the player skin to use. Find skins at https://skins.webamp.org/.',
								'winamp-block'
							) }
							value={ currentSkin }
							onChange={ ( skin ) =>
								setAttributes( { currentSkin: skin } )
							}
						/>
					) : (
						<div className="preview-wrapper">
							{ defaultSkins.length &&
								defaultSkins.map( ( skin, index ) => {
									return (
										<label
											htmlFor={ skin }
											key={ index }
											className="winamp-radio-wrapper"
										>
											<input
												id={ skin }
												type="radio"
												name="current-skin"
												value={ skin }
												checked={ currentSkin === skin }
												onChange={ ( e ) =>
													setAttributes( {
														currentSkin:
															e.target.value,
													} )
												}
											/>
											<img
												src={ skinPreviewUrl( skin ) }
												width="100"
												alt="winamp-skin"
											/>
										</label>
									);
								} ) }
						</div>
					) }
					<ToggleControl
						label={ __( 'Use Custom Skin?', 'winamp-block' ) }
						checked={ useCustomUrl }
						onChange={ () => setUseCustomUrl( ! useCustomUrl ) }
					/>
					<ToggleControl
						label={ __( 'Show Preview?', 'winamp-block' ) }
						checked={ preview }
						onChange={ () => setAttributes( { preview: ! preview } ) }
					/>
				</PanelBody>
			</InspectorControls>
			{ noticeUI }
			<Audio
				audio={ audio }
				currentSkin={ currentSkin }
				mediaPlaceholder={ mediaPlaceholder }
				blockProps={ blockProps }
				preview={ preview }
				setAttributes={ setAttributes }
			/>
		</>
	);
}

export default compose( withNotices )( Edit );
