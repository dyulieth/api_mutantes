'use strict';

const {MutanteShema, MUTANTE_TABLE} = require('./../models/mutante.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(MUTANTE_TABLE, 'grupoId', MutanteShema.grupoId);

  },

   down: async (queryInterface) =>{
    await queryInterface.removeColumn(MUTANTE_TABLE, 'grupoId', MutanteShema.grupoId);
  }
};
