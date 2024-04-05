module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstname: 'Emma',
          lastname: 'Vernaza Ramos',
          id_identification_type: 1,
          id_number: '1234567890',
          email: 'emma.vernaza@gmail.com',
          phone: '233233233',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          firstname: 'Paola',
          lastname: 'Ramos Garzón',
          id_identification_type: 1,
          id_number: '987654321',
          email: 'paola.ramos@gmail.com',
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
