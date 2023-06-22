import { mockData } from '../fixtures/mockRecruit';

describe('Job Test', () => {
  beforeEach(() => {
    const title = Cypress.currentTest.title;
    if (title.includes('(Exception)')) {
      cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
      cy.get('[data-text=Initiativbewerbung]').click();
    } else {
      cy.visit('http://localhost:6006/iframe.html?args=&id=pages-jobs--jobs&viewMode=story');
      cy.get('[data-text="Jetzt bewerben"' || '[data-text="Apply now"]').click();
    }

    cy.intercept('POST', '/mock/jobApply.json', (req) => {
      req.reply({
        status: 200,
        body: mockData,
      });
    }).as('submitRequest');

    cy.wait(500);
    cy.get('.modal #firstName').type(mockData['candidate_first_name']);
    cy.wait(500);
    cy.get('.modal #lastName').type(mockData['candidate_last_name']);
    cy.wait(500);
    cy.get('.modal #email').type(mockData['candidate_email']);
    cy.wait(500);
    cy.get('.modal #phone').type(mockData['candidate_phone']);
    cy.wait(500);
    cy.get('.modal .form__checkbox-label').click();

    if (title.includes('Default')) {
      cy.get('.modal .form-attachments__files').invoke('attr', 'style', 'display: block');
      cy.get('.modal input[type=file]').selectFile(mockData['resume']);
      cy.get('.modal .form-attachments__files').invoke('attr', 'style', 'display: none');
    } else {
      cy.get('.modal .form-attachments').selectFile(mockData['resume'], { action: 'drag-drop' });
    }
  });
  afterEach(() => {
    cy.wait(500);
    cy.get('[data-text="Bewerbung absenden"]' || '[data-text="Submit application"]').click();

    cy.wait('@submitRequest', { timeout: 1000 }).then((interception) => {
      const arrayOfObjects = interception.request.body.fields;
      const body = arrayOfObjects.reduce((result, { key, value }) => {
        result[key] = value;
        return result;
      }, {});

      for (let key in mockData) {
        !key.includes('resume') ? expect(body[key]).to.equal(mockData[key]) : cy.wrap(body[key]).should('exist');
      }

      expect(interception.response.statusCode).to.equal(200);
    });
  });
  it('Default Submit', () => {});
  it('Drag and Drop Submit', () => {});
  it('Carrer Test (Exception) Default', () => {});
  it('Career Test (Exception) Drag and Drop ', () => {});
});
