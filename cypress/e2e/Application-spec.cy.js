import { mockData } from '../fixtures/mockRecruit';

let selector;

describe('Job Test', () => {
  before(() => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
  });
  beforeEach(() => {
    const title = Cypress.currentTest.title;

    if (title.includes('Career')) {
      cy.get('[data-text=Initiativbewerbung]').click();
      selector = '';
    } else if (title.includes('Initiative Text Image')) {
      cy.get('[data-text=Initiativbewerbung]').click();
      selector = '.text-image .modal';
    } else {
      cy.get('[data-text="Jetzt bewerben"' || '[data-text="Apply now"]').click();
      selector = '';
    }
    cy.intercept('POST', '/mock/jobApply.json', (req) => {
      req.reply({
        status: 200,
        body: mockData,
      });
    }).as('submitRequest');

    cy.wait(500);
    cy.get(`${selector} #firstName`).type(mockData['candidate_first_name']);
    cy.wait(500);
    cy.get(`${selector} #lastName`).type(mockData['candidate_last_name']);
    cy.wait(500);
    cy.get(`${selector} #email`).type(mockData['candidate_email']);
    cy.wait(500);
    cy.get(`${selector} #phone`).type(mockData['candidate_phone']);
    cy.wait(500);
    cy.get(`${selector} .form__checkbox-label`).click();

    if (title.includes('Default')) {
      cy.get(`${selector} .form-attachments__files`).invoke('attr', 'style', 'display: block');
      cy.get(`${selector} input[type=file]`).selectFile(mockData['resume']);
      cy.get(`${selector} .form-attachments__files`).invoke('attr', 'style', 'display: none');
    } else {
      cy.get(`${selector} .form-attachments`).selectFile(mockData['resume'], { action: 'drag-drop' });
    }
  });
  afterEach(() => {
    cy.wait(500);
    cy.get(`${selector} [data-text="Bewerbung absenden"]` || '[data-text="Submit application"]').click();

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
  it('Initiative Text Image Bewerbung', () => {});
  it('Initiative Text Image Bewerbung', () => {});
  // it('Default Submit', () => {});
  // it('Drag and Drop Submit', () => {});
  // it('Carrer Default', () => {});
  // it('Career Drag and Drop ', () => {});
});
