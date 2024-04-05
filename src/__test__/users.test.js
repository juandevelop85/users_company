const app = require('../server/app');
const request = require('supertest');
const { faker } = require('@faker-js/faker');

describe('GET /users/api/v1/fetchUserByDocumentId/:id_identification_type/:id_number', () => {
  test('should get a user', async () => {
    const id_identification_type = 1;
    const id_number = '1234567890';
    return request(app)
      .get(
        `/users/api/v1/fetchUserByDocumentId/${id_identification_type}/${id_number}`
      )
      .then((res) => {
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
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('Usuario no existe');
      });
  });
});

describe('POST /api/v1/createUser', () => {
  test('create an user', async () => {
    return request(app)
      .post('/users/api/v1/createUser')
      .send({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        id_identification_type: 1,
        id_number: faker.number.bigInt().toString(),
        email: faker.internet.email(),
        phone: '444444',
        role: 'Admin',
        company_nit: '900123123',
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.roles_by_company.length).toBeGreaterThan(0);
      });
  });

  test('not create an user', async () => {
    return request(app)
      .post('/users/api/v1/createUser')
      .send({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        id_identification_type: 1,
        id_number: faker.number.bigInt().toString(),
        email: faker.internet.email(),
        phone: '444444',
        role: 'Admins',
        company_nit: '900123123',
      })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('El rol no es valido');
      });
  });

  test('not create an user, company does not exists', async () => {
    return request(app)
      .post('/users/api/v1/createUser')
      .send({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        id_identification_type: 1,
        id_number: faker.number.bigInt().toString(),
        email: faker.internet.email(),
        phone: '444444',
        role: 'Admin',
        company_nit: '900123123s',
      })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('La compañia no es valida');
      });
  });
});
