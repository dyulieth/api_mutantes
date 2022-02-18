const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class Tipo_poder_mutanteService{

  constructor(){
    this.mutantes =[];

  }

  async create(data){
    const newe = await models.Mutante.create(data);
    return newMutante;
  }

  async find(){
    const rta = await models.Mutante.findAll();
    return rta;
  }

  async findOne(id){
    const mutante = await models.Mutante.findByPk(id);
    if(!mutante){
      res.status(404).json();
    }
    return mutante;
  }

  async update(id, changes){
    const mutante = await this.findOne(id);
    const rta = await mutante.update(changes);
    return rta;
  }

  async delete(id){
    const mutante = await this.findOne(id);
    await mutante.destroy();
    return {id};
  }


}

module.exports = MutantesService;
