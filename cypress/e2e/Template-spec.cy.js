// Succesful Template Test
describe('Template Test Success!', () => {
  it('Template Success Test!', () => {
    expect(true).to.equal(true);
  });
});

// Fail Template Test
// describe('Template Test Fail!', () => {
//   it('Template Fail Test!', () => {
//     expect(true).to.equal(false);
//   });
// });

// describe('Template Example Test!', () => {
//   it('Template Example Test!', () => {
//     let image;

//     cy.visit('http://localhost:6006/iframe.html?args=&id=components-accordion--default&viewMode=story');

//     // Clicks on all Buttons
//     cy.get('.accordion__btn').each((item, index) => {
//       if (index != 0) {
//         cy.wrap(item).click();
//         cy.wait(500);
//       }

//       // Checks if Accordion Card Text is not empty
//       cy.get('.accordion__text').should('not.be.empty');

//       // Checks for no duplicate Images
//       cy.get('.v-img')
//         .invoke('attr', 'src')
//         .then((src) => {
//           expect(false).to.equal(src === image);
//           image = src;
//         });
//     });
//   });
// });
