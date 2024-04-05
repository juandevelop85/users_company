'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_company_roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      id_user: {
        type: Sequelize.UUID,
        references: { model: 'users', key: 'id' }
      },
      id_company: {
        type: Sequelize.UUID,
        references: { model: 'companies', key: 'id' }
      },
      id_role: {
        type: Sequelize.UUID,
        references: { model: 'roles', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_company_roles');
  }
};