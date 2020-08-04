'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 

                  'updatedAt',
                  {
                      type:Sequelize.DATE,
                      allowNull:true
                  }

      )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'updatedAt')
  
  }
};