const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class GruposService{

  constructor(){
    this.grupos =[];

  }

  async create(data){
    const newGrupo = await models.Grupo.create(data);
    return newGrupo;
  }

  async find(){
    const rta = await models.Grupo.findAll();
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
    const grupo = await this.findOne(id);
    const rta = await grupo.update(changes);
    return rta;
  }

  async delete(id){
    const grupo = await this.findOne(id);
    await grupo.destroy();
    return {id};
  }


}

module.exports = GruposService;
