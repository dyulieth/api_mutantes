const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum();


const createMutanteSchema = Joi.object({
  name : name.required(),
});

const updateMutanteSchema = Joi.object({
  name : name.required(),
});


module.exports ={createMutanteSchema, updateMutanteSchema};
