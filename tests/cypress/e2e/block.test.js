Cypress.on( 'uncaught:exception', () => {
	return false;
} );

/**
 * The editor preview pins #webamp over the block with position: fixed, which
 * covers the block toolbar. Disable interaction with the overlay first.
 *
 * @param {string} selector Block toolbar button selector.
 */
function clickWinampToolbarButton( selector ) {
	cy.get( 'body' ).then( ( $body ) => {
		if ( $body.find( '#webamp' ).length ) {
			cy.get( '#webamp' ).invoke( 'css', 'pointer-events', 'none' );
		}
	} );

	cy.get( selector ).click( { force: true } );
}

/**
 * Assert Webamp mounted.
 *
 * @param {Object} options
 * @param {boolean} options.expectVisibleWindow
 *        Use `be.visible` on #main-window when nothing covers the overlay
 *        (frontend). Skip it in the editor, where the canvas iframe covers it.
 */
function assertWebampMounted( { expectVisibleWindow = false } = {} ) {
	cy.get( '#webamp', { timeout: 15000 } )
		.should( 'have.class', 'is-loaded' )
		.and( 'have.css', 'display', 'block' );

	cy.get( '#webamp #main-window', { timeout: 15000 } ).should( 'exist' );

	if ( expectVisibleWindow ) {
		cy.get( '#webamp #main-window' ).should( 'be.visible' );
	}

	cy.get( '#webamp #main-window' ).should( ( $mainWindow ) => {
		const { width, height } = $mainWindow[ 0 ].getBoundingClientRect();
		expect( width ).to.be.greaterThan( 0 );
		expect( height ).to.be.greaterThan( 0 );
	} );
}

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
			clickWinampToolbarButton( '.components-tab-button.winamp-show-media' );

			cy.getBlockEditor()
				.find( '.wp-block-audio audio' )
				.should( 'have.attr', 'src' )
				.and( 'include', 'example' );

			clickWinampToolbarButton( '.components-tab-button.winamp-show-preview' );

			// Webamp mounts on document.body in the admin frame, not the canvas iframe.
			assertWebampMounted();

			cy.visit( post.link );

			cy.get( '.wp-block-tenup-winamp-block' ).should( 'exist' );
			assertWebampMounted( { expectVisibleWindow: true } );
		} );
	} );
} );
