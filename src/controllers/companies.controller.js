const {
  default: FetchPointsOfSalesByCompany,
} = require('../domains/companies_domain/functions/FetchPointsOfSalesByCompany');

const fetchPointsOfSalesByCompany = async (req, res) => {
  const { params } = req;

  const response = await FetchPointsOfSalesByCompany(params).catch((e) => {
    res.status(400).json({ message: e.message });
  });

  res.json(response);
};

module.exports = {
  fetchPointsOfSalesByCompany,
};
