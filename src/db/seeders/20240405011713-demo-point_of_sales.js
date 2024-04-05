module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'point_of_sales',
      [
        {
          name: 'Punto de venta 1',
          address: 'Direccion 1',
          phone: '123123213',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Punto de venta 2',
          address: 'Direccion 2',
          phone: '123123213',
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
