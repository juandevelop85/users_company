const app = require('../server/app');
const request = require('supertest');


describe('GET /companies/api/v1/fetchPointsOfSalesByCompany/:nit', () => {
  test('should get a user', async () => {
    const nit = '900123123';
    return request(app)
      .get(
        `/companies/api/v1/fetchPointsOfSalesByCompany/${nit}`
      )
      .then((res) => {
        console.log(res.body)
        expect(res.statusCode).toBe(200);
      });
  });

  test('not get a user', async () => {
    const nit = '9000000202';
    return request(app)
      .get(
        `/companies/api/v1/fetchPointsOfSalesByCompany/${nit}`
      )
      .then((res) => {
        console.log(res.body)
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('Usuario no existe');
      });
  });
});
