import { mockData, mockResume, mockDocument } from '../fixtures/mockRecruit';

function fillTheForm(test) {
  const title = Cypress.currentTest.title;

  if (test.includes('faq')) {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
    cy.get('.faq details').first().click();
    cy.get('.faq__text .is-component').first().click();
  } else if (test.includes('text-image')) {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-career--career&viewMode=story');
    cy.get('[data-text=Initiativbewerbung]').click();
  } else {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-jobs--jobs&viewMode=story');
    cy.get('[data-text="Jetzt bewerben"]' || '[data-text="Apply now"]').click();
  }

  cy.intercept('POST', '/mock/jobDocuments.json', (req) => {
    req.reply({
      status: 200,
      body: mockDocument,
    });
  }).as('submitDocumentRequest');

  cy.intercept('POST', '/mock/jobApply.json', (req) => {
    req.reply({
      status: 200,
      body: mockData,
    });
  }).as('submitRequest');

  const attributes = mockData.attributes;
  const phone = attributes.find((attribute) => attribute.id === 'phone');

  cy.wait(500);
  cy.get('.modal input[id$=firstName]:visible').type(mockData['first_name']);
  cy.wait(500);
  cy.get('.modal input[id$=lastName]:visible').type(mockData['last_name']);
  cy.wait(500);
  cy.get('.modal input[id$=email]:visible').type(mockData['email']);
  cy.wait(500);
  cy.get('.modal input[id$=phone]:visible').type(phone.value);
  cy.wait(500);
  cy.get('label[for$=privacy]:visible').click();
  cy.wait(500);

  cy.get(`.modal .form-attachments__interactable:visible`).selectFile(mockResume, { action: 'drag-drop' });
}

function submitForm() {
  cy.wait(500);
  cy.get('.modal .cta:visible').click();

  cy.wait('@submitDocumentRequest', { timeout: 1000 })
    .then((interception) => {
      // TODO find a way to read form multipart data and compare it to mock data
      expect(interception.response.statusCode).to.equal(200);
    })
    .debug();

  cy.wait('@submitRequest', { timeout: 1000 }).then((interception) => {
    const body = interception.request.body;

    // TODO compoare files and attributes
    for (let key in mockData) {
      if (!key.includes('files') && !key.includes('attributes') && body[key]) {
        expect(body[key]).to.equal(mockData[key]);
      }
    }

    expect(interception.response.statusCode).to.equal(200);
  });

  cy.get('.modal .cta:visible').click();
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
