const EmergencyPage = 'http://localhost:6006/iframe.html?args=&id=pages-emergency--emergency&viewMode=story';
// TODO move to fixtures
const mockData = {
  name: 'Emergency Test Name',
  company: 'Emergency Test Company',
  email: 'test@example.com',
  phone: 'Emergency Test Phone',
  message: 'Emergency Test Message',
};

const waitDelay = 500;

const wait = () => {
  cy.wait(waitDelay);
};

const fillInput = (id, value) => {
  cy.get(`.modal [id=${id}]:visible`).type(value);
};

const dataToFill = ['name', 'company', 'email', 'phone', 'message'];

const fillOutForm = () => {
  cy.intercept('POST', 'http://localhost:6006/mock/emergency.json', (req) => {
    req.reply({
      status: 200,
      body: mockData,
    });
  }).as('submitRequest');
  wait();

  dataToFill.forEach((data) => {
    fillInput(data, mockData[data]);
    wait();
  });

  cy.get(`.modal [id=phone]:visible`).click();
  wait();

  cy.get('.modal label[for=dataprotection]:visible').click();
  wait();
};

const submitForm = () => {
  cy.get('.modal .cta:visible').click();
  cy.wait('@submitRequest', { timeout: 3000 }).then((interception) => {
    const response = interception.response;

    Object.keys(response.body).forEach((key, value) => {
      expect(response.body[key]).to.equal(mockData[key]);
    });

    expect(interception.response.statusCode).to.equal(200);
  });
};

describe('Emergency Form Test', () => {
  beforeEach(() => {
    cy.viewport(2000, 2000);
  });

  it('Hero Modal Application', () => {
    cy.visit(EmergencyPage);
    wait();
    cy.get('.hero-text-image .cta').click();

    fillOutForm();
    submitForm();
  });

  it('Fab Action Modal Application', () => {
    cy.visit(EmergencyPage);
    wait();

    cy.get('.fab-button__icon:visible').click();

    fillOutForm();
    submitForm();
  });
});
