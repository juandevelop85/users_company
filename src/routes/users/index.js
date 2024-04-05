const express = require('express');

const router = express.Router();
const { fetchUserByDocumentId, createUser } = require('../../controllers/users.controller');

// Routes
router.post('/api/v1/createUser', createUser)
router.get(
  '/api/v1/fetchUserByDocumentId/:id_identification_type/:id_number',
  fetchUserByDocumentId
);

module.exports = router;
