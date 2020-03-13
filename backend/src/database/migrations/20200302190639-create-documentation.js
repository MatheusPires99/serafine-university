module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("documentations", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: "categories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: false,
      },
      document_id: {
        type: Sequelize.INTEGER,
        references: { model: "documents", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("documentations");
  },
};
