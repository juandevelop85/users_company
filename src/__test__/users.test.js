const app = require('../server/app');
const request = require('supertest');


describe('GET /users/api/v1/fetchUserByDocumentId/:id_identification_type/:id_number', () => {
  test('should get a user', async () => {
    const id_identification_type = 1;
    const id_number = '1234567890';
    return request(app)
      .get(
        `/users/api/v1/fetchUserByDocumentId/${id_identification_type}/${id_number}`
      )
      .then((res) => {
        console.log(res.body)
        expect(res.statusCode).toBe(200);
      });
  });

  test('not get a user', async () => {
    const id_identification_type = 1;
    const id_number = '12345678902';
    return request(app)
      .get(
        `/users/api/v1/fetchUserByDocumentId/${id_identification_type}/${id_number}`
      )
      .then((res) => {
        console.log(res.body)
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('Usuario no existe');
      });
  });
});
