const EmergencyPage = 'http://localhost:6006/iframe.html?args=&id=pages-emergency--emergency&viewMode=story';
// TODO move to fixtures
const mockData = {
  name: 'Emergency Test Name',
  company: 'Emergency Test Company',
  email: 'test@example.com',
  phone: 'Emergency Test Phone',
  message: 'Emergency Test Message',
};

const waitDelay = 700;

const wait = () => {
  cy.wait(waitDelay);
};

const fillInput = (id, value) => {
  cy.get(`.modal [id=${id}]:visible`).type(value);
};

const dataToFill = ['name', 'company', 'email', 'phone', 'message'];

const fillOutForm = () => {
  cy.task('log', 'before intercept');

  // cy.intercept('POST', 'mock/emergency.json', (req) => {
  //   cy.task('log', 'in intercept');

  //   req.reply({
  //     status: 200,
  //     body: mockData,
  //   });
  // }).as('testRequest');

  cy.intercept('POST', 'mock/emergency.json', { fixture: 'users.json' }).as('testRequest');

  wait();

  dataToFill.forEach((data) => {
    fillInput(data, mockData[data]);
    wait();
  });

  cy.get('.modal label[for=dataprotection]:visible').click();
  wait();
};

const submitForm = () => {
  console.log('hier');
  cy.task('log', 'in submit');

  // wait();
  // triggers request and times out
  cy.get('.modal .cta', { timeout: 1000 }).click();

  cy.wait('@testRequest', { timeout: 1000 }).then((interception) => {
    cy.task('log', 'interception', interception);

    // const arrayOfObjects = interception.request.body.fields;
    // const body = arrayOfObjects.reduce((result, { key, value }) => {
    //   result[key] = value;
    //   return result;
    // }, {});
    // for (let key in mockData) {
    //   !key.includes('resume') ? expect(body[key]).to.equal(mockData[key]) : cy.wrap(body[key]).should('exist');
    // }
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

    cy.task('log', 'after submit');

    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();
    wait();

    // cy.get('.modal .cta:visible').click();
  });
});
