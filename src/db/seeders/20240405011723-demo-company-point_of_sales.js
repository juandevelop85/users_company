module.exports = {
  async up(queryInterface, Sequelize) {
    const companies = await queryInterface.sequelize.query(
      'SELECT id from companies;'
    );
    const pointOfSales = await queryInterface.sequelize.query(
      'SELECT id from point_of_sales;'
    );

    const companiesRows1 = companies[0];
    const pointOfSalesRows1 = pointOfSales[0];

    await queryInterface.bulkInsert(
      'company_point_of_sales',
      [
        {
          id_company: companiesRows1[0]?.id,
          id_point_of_sales: pointOfSalesRows1[0]?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_company: companiesRows1[0]?.id,
          id_point_of_sales: pointOfSalesRows1[1]?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_company: companiesRows1[1]?.id,
          id_point_of_sales: pointOfSalesRows1[1]?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_company: companiesRows1[0]?.id,
          id_point_of_sales: pointOfSalesRows1[1]?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
