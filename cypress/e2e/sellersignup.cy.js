// cypress/integration/api-tests/example.spec.js

describe('API Testing with Cypress', () => {
    const baseUrl = 'http://192.168.1.21:50009/api/v1';
  
    // it('GET - read', () => {
    //   cy.request('GET', `${baseUrl}/posts/1`).then((response) => {
    //     expect(response.status).to.eq(200);
    //     expect(response.body).to.have.property('id', 1);
    //   });
    // });
  
    it('POST - create', () => {
      const newPost = {
        Phone: '+8801627557563'
      };
  
      cy.request('POST', `${baseUrl}/seller/mobileOtpSend`, newPost).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('Phone');
      });
    });
  
   
  });
  