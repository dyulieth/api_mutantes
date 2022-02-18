const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class Tipo_poderService{

  constructor(){
    this.grupos =[];

  }

  async create(data){
    const newTipo_poder = await models.Tipo_poder.create(data);
    return newTipo_poder;
  }

  async find(){
    const rta = await models.Tipo_poder.findAll();
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
    const tipo_poder = await this.findOne(id);
    const rta = await tipo_poder.update(changes);
    return rta;
  }

  async delete(id){
    const tipo_poder = await this.findOne(id);
    await tipo_poder.destroy();
    return {id};
  }


}

module.exports = Tipo_poderService;
