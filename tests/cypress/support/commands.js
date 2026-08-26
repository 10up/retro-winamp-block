/**
 * @10up/cypress-wp-utils@0.6 insertBlock drives the inserter UI, then
 * `cy.wrap(block.prop('id'))`. On WP 7.1 / trunk the canvas is always
 * iframed and the block wrapper often has no `id`, so that wrap is
 * `undefined` and Cypress times out looking for element `undefined`.
 *
 * Insert via the block editor store instead — same on 6.6, latest, and trunk.
 */
Cypress.Commands.overwrite( 'insertBlock', ( originalFn, type ) => {
	cy.window().should( ( win ) => {
		expect( win.wp?.blocks?.createBlock, 'wp.blocks.createBlock' ).to.be.a(
			'function'
		);
		expect(
			win.wp?.data?.dispatch,
			'wp.data.dispatch'
		).to.be.a( 'function' );
	} );

	cy.window().then( ( win ) => {
		const block = win.wp.blocks.createBlock( type );
		win.wp.data.dispatch( 'core/block-editor' ).insertBlock( block );
		return block.clientId;
	} );
} );

/**
 * Resolve the editor canvas whether or not it is iframed.
 */
Cypress.Commands.overwrite( 'getBlockEditor', () => {
	cy.get(
		'.editor-visual-editor, .edit-post-visual-editor',
		{ timeout: 15000 }
	).should( 'exist' );

	return cy.get( 'body' ).then( ( $body ) => {
		const $iframe = $body.find( 'iframe[name="editor-canvas"]' );
		if ( ! $iframe.length ) {
			return cy.wrap( $body );
		}

		return cy
			.wrap( $iframe )
			.its( '0.contentDocument.body' )
			.should( 'not.be.empty' )
			.then( cy.wrap );
	} );
} );
