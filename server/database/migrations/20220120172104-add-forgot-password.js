'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('User', 'resetPasswordLink', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('User', 'resetPasswordLink', {})
  }
};
