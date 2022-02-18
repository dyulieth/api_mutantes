function validatorHandler (schema, property){
  return (req, res, next) =>{
    const data = req[property];
    const {error} = schema.validate(data);
    if (error){
      throw new Error('error');
    }
    next();

  }
}


module.exports = validatorHandler;
