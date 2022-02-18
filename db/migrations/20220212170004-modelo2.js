'use strict';

const {CondicionShema, CONDICION_TABLE} = require('./../models/condicion.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CONDICION_TABLE, CondicionShema);

  },

   down: async (queryInterface) =>{
      await queryInterface.drop(CONDICION_TABLE);
  }
};
