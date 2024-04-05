'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex('users', ['id_identification_type', 'id_number'], {
      unique: true,
      name: 'users_identification_index'
    });

    await queryInterface.addIndex('users', ['email'], {
      unique: true,
      name: 'users_email_index'
    });

    await queryInterface.addIndex('companies', ['nit'], {
      unique: true,
      name: 'companies_nit_index'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('users', 'users_identification_index');
    await queryInterface.removeIndex('users', 'users_email_index');
    await queryInterface.removeIndex('users', 'companies_nit_index');
  }
};
