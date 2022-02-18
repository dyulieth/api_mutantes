const {Mutante, MutanteShema} = require('./mutante.model');
const {Vehiculo, VehiculoShema} = require('./vehiculo.model');
const {Grupo, GrupoShema} = require('./grupo.model');
const {Condicion, CondicionShema} = require('./condicion.model');
const {Tipo_vehiculo, Tipo_vehiculoShema} = require('./tipo_vehiculo.model');
const {Tipo_poder, Tipo_poderShema} = require('./tipo_poder.model');
const {Tipo_poder_mutante, Tipo_poder_mutanteShema} = require('./tipo_poder_mutante.model');

function setupModels(sequelize){
  Mutante.init(MutanteShema, Mutante.config(sequelize));
  Vehiculo.init(VehiculoShema, Vehiculo.config(sequelize));
  Grupo.init(GrupoShema, Grupo.config(sequelize));
  Condicion.init(CondicionShema, Condicion.config(sequelize));
  Tipo_vehiculo.init(Tipo_vehiculoShema, Tipo_vehiculo.config(sequelize));
  Tipo_poder.init(Tipo_poderShema, Tipo_poder.config(sequelize));
  Tipo_poder_mutante.init(Tipo_poder_mutanteShema, Tipo_poder_mutante.config(sequelize));

  Mutante.associate(sequelize.models);
  Grupo.associate(sequelize.models);
  Vehiculo.associate(sequelize.models);
  Condicion.associate(sequelize.models);
  Tipo_vehiculo.associate(sequelize.models);
  Tipo_poder.associate(sequelize.models);
  Tipo_poder_mutante.associate(sequelize.models);

}

module.exports = setupModels;
