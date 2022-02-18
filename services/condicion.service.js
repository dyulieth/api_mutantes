const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class CondicionService{

  constructor(){
    this.grupos =[];

  }

  async create(data){
    const newCondicion = await models.Condicion.create(data);
    return newCondicion;
  }

  async find(){
    const rta = await models.Condicion.findAll();
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
    const condicion = await this.findOne(id);
    const rta = await condicion.update(changes);
    return rta;
  }

  async delete(id){
    const condicion = await this.findOne(id);
    await condicion.destroy();
    return {id};
  }


}

module.exports = CondicionService;
