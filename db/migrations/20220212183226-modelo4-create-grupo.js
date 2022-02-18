'use strict';

const {GrupoShema, GRUPO_TABLE} = require('./../models/grupo.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(GRUPO_TABLE, GrupoShema);

  },

   down: async (queryInterface) =>{
      await queryInterface.drop(GRUPO_TABLE);
  }
};
