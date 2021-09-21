///$env:PERCY_TOKEN = "token"

describe('TicketBox', () => {
  beforeEach(() => cy.visit('index.html'));

  it('check for the inicial state', () => {

    cy.percySnapshot();

    
  });

it('Check of invalid email', () => {
  cy.get('#email').type('matheus-exemplo.com');
  cy.percySnapshot();


});

it('Enable Submission', () => {
  cy.fillMandatoryFields();
  cy.percySnapshot();
});
it('updates agreement base on full name, tickets quantity, and type', () => {
  
  cy.get('#first-name').type('Matheus');
  cy.get('#last-name').type('Santos');
  cy.get('#ticket-quantity').select('4');
  cy.get('#vip').check();
  cy.percySnapshot();


});

const successfulFormSubmission = 'Shows a success message after form submission'
  it(successfulFormSubmission, () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.percySnapshot(successfulFormSubmission, {
      percyCSS: `.success span { display: none; }`
    });
  });
});
