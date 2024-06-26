Cypress.on( 'uncaught:exception', ( err, runnable ) => {
	return false;
} );

describe( 'Admin can publish posts with winamp block', () => {
	it( 'Can insert the block and publish the post', () => {
		// login to wordpress
		cy.login();

		cy.setPermalinkStructure( '/%year%/%postname%/' );

		// upload media used for the block
		cy.uploadMedia( 'tests/cypress/fixtures/example.mp3' );

		// create new page
		cy.createPost({
			title: 'Test Winamp Block',
			beforeSave: () => {
				cy.get( 'body' ).then( $body => {
					if ( $body.find( 'button[aria-label="Toggle block inserter"]' ).length > 0 ) {
						cy.get( 'button[aria-label="Toggle block inserter"]' ).click();
						cy.get( '.block-editor-inserter__search input' ).type( 'tenup/winamp-block' );
						cy.get( '.editor-block-list-item-tenup-winamp-block' ).click();
					} else {
						cy.insertBlock( 'tenup/winamp-block' );
					}
				} );
				// select mp3
				cy.get('.wp-block-tenup-winamp-block').contains('button', 'Media Library').click();
				cy.get('#menu-item-browse').click();
				cy.contains( '.filename div', 'example.mp3' )
					.closest( '.thumbnail' )
					.click();
				cy.get( '.media-modal .media-button-select' ).click();
			}
		}).then( post => {
			cy.visit( `/wp-admin/post.php?post=${post.id}&action=edit` );
			// verify page contains new block
			cy.get( '.wp-block-tenup-winamp-block' );
			// toggle to 'Manage Media' view
			cy.get( '.components-tab-button.winamp-show-media').click();
			// Confirm the audio file is present
			cy.get('.wp-block-audio audio')				
				.should( 'have.attr', 'src' )
				.and( 'include', 'example' );
			// toggle to 'Show Preview' view
			cy.get( '.components-tab-button.winamp-show-preview').click();
			// confirm webamp is showing
			cy.get( '#webamp' )
				.should( 'have.css', 'display', 'block' );

		});
	} );
} );