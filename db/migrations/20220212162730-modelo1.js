'use strict';

//const {GrupoShema, GRUPO_TABLE} = require('./../models/grupo.model');
//const {CondicionShema, CONDICION_TABLE} = require('./../models/condicion.model');
const {MutanteShema, MUTANTE_TABLE} = require('./../models/mutante.model');
const {Tipo_vehiculoShema, TIPO_VEHICULO_TABLE} = require('./../models/tipo_vehiculo.model');
const {Tipo_poderShema, TIPO_PODER_TABLE} = require('./../models/tipo_poder.model');
const {VehiculoShema, VEHICULO_TABLE} = require('./../models/vehiculo.model');
const {Tipo_poder_mutanteShema, TIPO_PODER_MUTANTE_TABLE} = require('./../models/tipo_poder_mutante.model');

module.exports = {
  up: async (queryInterface) => {
   // await queryInterface.createTable(GRUPO_TABLE, GrupoShema);
    //await queryInterface.createTable(CONDICION_TABLE, CondicionShema);
    await queryInterface.createTable(MUTANTE_TABLE, MutanteShema);
    await queryInterface.createTable(TIPO_VEHICULO_TABLE, Tipo_vehiculoShema);
    await queryInterface.createTable(TIPO_PODER_TABLE, Tipo_poderShema);
    await queryInterface.createTable(VEHICULO_TABLE, VehiculoShema);
    await queryInterface.createTable(TIPO_PODER_MUTANTE_TABLE, Tipo_poder_mutanteShema);
  },

   down: async (queryInterface) =>{
    //await queryInterface.drop(GRUPO_TABLE);
    //await queryInterface.drop(CONDICION_TABLE);
    await queryInterface.drop(MUTANTE_TABLE);
    await queryInterface.drop(TIPO_VEHICULO_TABLE);
    await queryInterface.drop(TIPO_PODER_TABLE);
    await queryInterface.drop(VEHICULO_TABLE);
    await queryInterface.drop(TIPO_PODER_MUTANTE_TABLE);

  }
};
