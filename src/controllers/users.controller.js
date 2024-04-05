const {
  default: FetchUserByDocumentId,
} = require('../domains/users_domain/functions/FetchUserByDocumentId');

const fetchUserByDocumentId = async (req, res) => {
  const { params } = req;
  console.log({ params });
  const response = await FetchUserByDocumentId(params).catch((e) => {
    res.status(400).json({ message: e.message });
  });

  res.json(response);
};

module.exports = {
  fetchUserByDocumentId,
};
