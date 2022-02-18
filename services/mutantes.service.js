const { range } = require('express/lib/request');
const res = require('express/lib/response');
const faker = require('faker');
const { models }= require('../libs/sequelize')

class MutantesService{

  constructor(){
    this.mutantes =[];

  }

  async create(data){
    const newMutante = await models.Mutante.create(data);
    return newMutante;
  }

  async find(query){
    const options = {
      where:{}
    }
    const { name } = query; //obtener los parametros desde la query
    if (name){ //si viene un name
      options.where.name = name; //modifica el where por cual atributo va a buscar
    }
    const { city } = query;
    if (city){
      options.where.city = city;
    }
    const rta = await models.Mutante.findAll(options);
    return rta;
  }

  async findOne(id){
    const mutante = await models.Mutante.findByPk(id, {
      include:[

    'grupo',
    'condicion']
    });
    if(!mutante){
      res.status(404).json();
    }
    return mutante;
  }

  //busca por nombre
 /* async findOne(name){
    const mutante = await models.Mutante.findOne({where: {name: name}});
    if(!mutante){
      res.status(404).json();
    }
    return mutante;
  }

   //busca por ciudad
   async findOne(name, city){
    const mutante = await models.Mutante.findAll({ attributes: [name, city]});
    if(!mutante){
      res.status(404).json();
    }
    return mutante;
  }*/

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
