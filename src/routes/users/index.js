const express = require('express');

const router = express.Router();
const { fetchUserByDocumentId } = require('../../controllers/users.controller');

// Routes
router.get(
  '/api/v1/fetchUserByDocumentId/:id_identification_type/:id_number',
  fetchUserByDocumentId
);

module.exports = router;
