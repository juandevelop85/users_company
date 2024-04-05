'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company_point_of_sales', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      id_company: {
        type: Sequelize.UUID,
        references: { model: 'companies', key: 'id' }
      },
      id_point_of_sales: {
        type: Sequelize.UUID,
        references: { model: 'point_of_sales', key: 'id' }
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
    await queryInterface.dropTable('company_point_of_sales');
  }
};