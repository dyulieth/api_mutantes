const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class Tipo_vehiculoService{

  constructor(){
    this.grupos =[];

  }

  async create(data){
    const newTipo_vehiculo = await models.Tipo_vehiculo.create(data);
    return newTipo_vehiculo;
  }

  async find(){
    const rta = await models.Tipo_vehiculo.findAll();
    return rta;
  }

  /*async findOne(id){
    const mutante = await models.Mutante.findByPk(id);
    if(!mutante){
      res.status(404).json();
    }
    return mutante;
  }*/

  async update(id, changes){
    const tipo_vehiculo = await this.findOne(id);
    const rta = await tipo_vehiculo.update(changes);
    return rta;
  }

  async delete(id){
    const tipo_vehiculo = await this.findOne(id);
    await tipo_vehiculo.destroy();
    return {id};
  }


}

module.exports = Tipo_vehiculoService;
