Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Admin can publish posts with winamp block', () => {

    it('Can insert the block and publish the post', () => {
        // login to wordpress
        cy.login();

        cy.setPermalinkStructure('/%year%/%postname%/');

        // upload media used for the block
        cy.uploadMedia('tests/cypress/fixtures/example.mp3');

        // create new page
        cy.visit('/wp-admin/post-new.php');

        // close the welcome guide dialog
        //cy.get('button[aria-label="Close dialog"]').click();
        cy.closeWelcomeGuide();

        // add page title
        cy.get('h1.editor-post-title')
            .first()
            .as('title-input')
        cy.get('@title-input').click().type('Test Winamp Block');

        // insert block
        cy.insertBlock('tenup/winamp-block');

        // select mp3
        cy.get('.wp-block-tenup-winamp-block .components-button.is-tertiary').click();
        cy.contains('.filename div','example.mp3').closest('.thumbnail').click();
        cy.get('.media-modal .media-button-select').click();

        // publish page
        cy.get('.editor-post-publish-panel__toggle').click();
        cy.get('.editor-post-publish-panel__header-publish-button .editor-post-publish-button__button').click();

        cy.get('.components-snackbar', { timeout: 10000 }).should(
            'be.visible'
        );

        // verify page contains new block
        cy.get('a.components-button.components-snackbar__action').click();
        cy.get('.wp-block-audio audio')
            .should('have.attr', 'data-src')
            .and('include', 'example');
    });

});
