'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
                  id:{
                        type:Sequelize.INTEGER,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true
                  },

                  name:{
                        type:Sequelize.STRING,
                        allowNull: false,
                  },

                  email:{
                        type:Sequelize.STRING,
                        allowNull: false,
                  },
                  password:{
                        type:Sequelize.STRING,
                        allowNull: false,
                  }

      })
  },

  down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
  }
};
