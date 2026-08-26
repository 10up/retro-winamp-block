Cypress.on( 'uncaught:exception', () => {
	return false;
} );

describe( 'Admin can publish posts with winamp block', () => {
	it( 'Can insert the block and publish the post', () => {
		cy.login();

		cy.setPermalinkStructure( '/%year%/%postname%/' );

		cy.uploadMedia( 'tests/cypress/fixtures/example.mp3' );

		cy.createPost( {
			title: 'Test Winamp Block',
			beforeSave: () => {
				cy.insertBlock( 'tenup/winamp-block' );

				// Block content lives in the editor canvas iframe on WP 7.1+.
				cy.getBlockEditor()
					.find( '.wp-block-tenup-winamp-block' )
					.should( 'exist' )
					.contains( 'button', 'Media Library' )
					.click();

				// Media modal renders in the admin document.
				cy.get( '#menu-item-browse' ).click();
				cy.contains( '.filename div', 'example.mp3' )
					.closest( '.thumbnail' )
					.click();
				cy.get( '.media-modal .media-button-select' ).click();
			},
		} ).then( ( post ) => {
			cy.visit( `/wp-admin/post.php?post=${ post.id }&action=edit` );

			cy.getBlockEditor()
				.find( '.wp-block-tenup-winamp-block' )
				.should( 'exist' )
				.click();

			// Block toolbar controls render in the admin document.
			cy.get( '.components-tab-button.winamp-show-media' ).click();

			cy.getBlockEditor()
				.find( '.wp-block-audio audio' )
				.should( 'have.attr', 'src' )
				.and( 'include', 'example' );

			cy.get( '.components-tab-button.winamp-show-preview' ).click();

			// Webamp mounts on document.body in the admin frame, not the canvas iframe.
			cy.get( '#webamp', { timeout: 15000 } )
				.should( 'be.visible' )
				.and( 'have.css', 'display', 'block' );
		} );
	} );
} );
