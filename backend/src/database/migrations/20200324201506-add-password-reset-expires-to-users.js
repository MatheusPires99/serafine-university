module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "passwordResetExpires", {
      type: Sequelize.DATE,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "passwordResetExpires");
  },
};
