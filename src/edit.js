import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { currentSkin },
	setAttributes,
}) {
	return (
		<p { ...useBlockProps() }>
			<InspectorControls key="skin">
				<PanelBody title={ __( 'Skin', 'webamp-block' ) }>
					<TextControl
						label={ __( 'Skin URL', 'webamp-block' ) }
						help={ __( 'The URL of the skin to use. Find skins at https://skins.webamp.org/', 'webamp-block' ) }
						value={ currentSkin }
						onChange={ skin => setAttributes( { currentSkin: skin } ) }
					/>
				</PanelBody>
			</InspectorControls>
			{ __( 'Webamp Block – hello from the editor!', 'webamp-block' ) }
		</p>
	);
}
