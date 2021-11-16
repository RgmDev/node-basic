'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    // login: admin@mail.com/Password123
    await queryInterface.bulkInsert('Users', [
      { firstName: 'User', lastName: 'Admin', email: 'admin@mail.com', password: '$2b$10$OtcfYcmQl4V9LGELJJHgKunRHy2zU6fY7JeBvYoAhA3Ex/f587e2e', role: 'admin' }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
