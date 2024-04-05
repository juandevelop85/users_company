const {
  default: FetchUserByDocumentId,
} = require('../domains/users_domain/functions/FetchUserByDocumentId');
const {
  default: CreateUser,
} = require('../domains/users_domain/functions/CreateUser');

const fetchUserByDocumentId = async (req, res) => {
  const { params } = req;
  console.log({ params });
  const response = await FetchUserByDocumentId(params).catch((e) => {
    res.status(400).json({ message: e.message });
  });

  res.json(response);
};

const createUser = async (req, res) => {
  const { body } = req;
  const response = await CreateUser(body).catch((e) => {
    res.status(400).json({ message: e.message });
  });

  res.status(201).json(response);
};

module.exports = {
  fetchUserByDocumentId,
  createUser,
};
