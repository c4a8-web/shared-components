const mockData = {
  candidate_first_name: 'Max',
  candidate_last_name: 'Mustermann',
  candidate_email: 'maxmustermann@googlemail.com',
  candidate_phone: '+4912341234',
  resume: 'cypress/fixtures/mock.pdf',
  cancellation: '',
  salary: '',
  message: '',
  candidate__gotcha: '',
};

describe('Job Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=pages-jobs--jobs&viewMode=story');
    cy.get('[data-text="Jetzt bewerben"' || '[data-text="Apply now"]').click();

    cy.intercept('POST', '/mock/jobApply.json', (req) => {
      req.reply({
        status: 200,
        body: mockData,
      });
    }).as('submitRequest');

    cy.get('#firstName').type(mockData['candidate_first_name']);
    cy.wait(500);
    cy.get('#lastName').type(mockData['candidate_last_name']);
    cy.wait(500);
    cy.get('#email').type(mockData['candidate_email']);
    cy.wait(500);
    cy.get('#phone').type(mockData['candidate_phone']);
    cy.wait(500);
    cy.get('.form__checkbox-label').click();
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
        if (!key.includes('resume')) {
          expect(body[key]).to.equal(mockData[key]);
        } else {
          cy.wrap(body[key]).should('exist');
        }
      }

      expect(interception.response.statusCode).to.equal(200);
    });
  });
  it('Default Submit', () => {
    cy.get('.form-attachments__files').invoke('attr', 'style', 'display: block');
    cy.get('input[type=file]').selectFile(mockData['resume']);
    cy.get('.form-attachments__files').invoke('attr', 'style', 'display: none');
  });
  it('Drag and Drop Submit', () => {
    cy.get('.form-attachments').selectFile(mockData['resume'], { action: 'drag-drop' });
  });
});
