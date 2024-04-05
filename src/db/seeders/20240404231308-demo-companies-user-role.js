module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query('SELECT id from users;');
    const companies = await queryInterface.sequelize.query(
      'SELECT id from companies;'
    );
    const adminRole = await queryInterface.sequelize.query(
      "SELECT id from roles where name = 'Admin';"
    );
    const asesorRole = await queryInterface.sequelize.query(
      "SELECT id from roles where name = 'Admin';"
    );
    const usersRows = users[0];
    const companiesRows = companies[0];
    const roleRows = adminRole[0];
    const asesorRoleRows = asesorRole[0];

    await queryInterface.bulkInsert(
      'user_company_roles',
      [
        {
          id_user: usersRows[0]?.id,
          id_company: companiesRows[0]?.id,
          id_role: roleRows[0]?.id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id_user: usersRows[0]?.id,
          id_company: companiesRows[0]?.id,
          id_role: asesorRoleRows[0]?.id,
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
