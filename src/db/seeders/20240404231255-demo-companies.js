module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'companies',
      [
        {
          name: 'Empresa Uno',
          nit: '900123123',
          address: 'Calle 1 Numero 2',
          phone: '233233233',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Empresa Dos',
          nit: '902123123',
          address: 'Calle 1 Numero 2',
          phone: '233233233',
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
