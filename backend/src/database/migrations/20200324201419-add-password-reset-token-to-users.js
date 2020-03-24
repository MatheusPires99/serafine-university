module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "passwordResetToken", {
      type: Sequelize.STRING,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("users", "passwordResetToken");
  },
};
