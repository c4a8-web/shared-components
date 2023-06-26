import { mockData } from '../fixtures/mockRecruit';

function fillTheForm(test) {
  const title = Cypress.currentTest.title;

  if (test.includes('faq')) {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
    cy.get('.faq details').first().click();
    cy.get('.faq__text .is-component').click();
  } else if (test.includes('text-image')) {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
    cy.get('[data-text=Initiativbewerbung]').click();
  } else {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-jobs--jobs&viewMode=story');
    cy.get('[data-text="Jetzt bewerben"]' || '[data-text="Apply now"]').click();
  }
  cy.intercept('POST', '/mock/jobApply.json', (req) => {
    req.reply({
      status: 200,
      body: mockData,
    });
  }).as('submitRequest');

  cy.wait(500);
  cy.get('.modal input[id$=firstName]:visible').type(mockData['candidate_first_name']);
  cy.wait(500);
  cy.get('.modal input[id$=lastName]:visible').type(mockData['candidate_last_name']);
  cy.wait(500);
  cy.get('.modal input[id$=email]:visible').type(mockData['candidate_email']);
  cy.wait(500);
  cy.get('.modal input[id$=phone]:visible').type(mockData['candidate_phone']);
  cy.wait(500);
  cy.get('label[for$=privacy]:visible').click();
  cy.wait(500);

  if (title.includes('Default')) {
    cy.get(`.modal .form-attachments__files`).invoke('attr', 'style', 'display: block');
    cy.get(`.modal input[type$=file]`).selectFile(mockData['resume']);
    cy.get(`.modal .form-attachments__files`).invoke('attr', 'style', 'display: none');
  } else {
    cy.get(`.modal .form-attachments:visible`).selectFile(mockData['resume'], { action: 'drag-drop' });
  }
}

function submitForm() {
  cy.wait(500);
  cy.get(`.modal [data-text="Bewerbung absenden"]:visible` || '[data-text="Submit application"]:visible').click();
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

  cy.get('.modal [data-text="Schließen"]:visible' || '.modal [data-text="Close"]:visible').click();
}

describe('Job Test', () => {
  beforeEach(() => {
    cy.viewport(2000, 2000);
  });
  it('Initiative Text Image Application', () => {
    fillTheForm('text-image');
    submitForm();
  });
  it('FAQ Application', () => {
    fillTheForm('faq');
    submitForm();
  });
  it('Both', () => {
    fillTheForm('faq');
    submitForm();
    fillTheForm('text-image');
    submitForm();
  });
  it('Job Detail', () => {
    fillTheForm('job-detail');
    submitForm();
  });
});
