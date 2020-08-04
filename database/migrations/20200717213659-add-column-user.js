'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 

                  'createdAt',
                  {
                      type:Sequelize.DATE,
                      allowNull:true
                  }

      )
  },

  down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'createdAt')
  }
};
