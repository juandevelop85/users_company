const express = require('express');

const router = express.Router();
const {
  fetchPointsOfSalesByCompany,
} = require('../../controllers/companies.controller');

// Routes
router.get(
  '/api/v1/fetchPointsOfSalesByCompany/:nit',
  fetchPointsOfSalesByCompany
);

module.exports = router;
