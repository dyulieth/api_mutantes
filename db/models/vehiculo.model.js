const {Model, DataTypes, Sequelize} = require('sequelize');

const VEHICULO_TABLE = 'vehiculos';
const {TIPO_VEHICULO_TABLE} = require('./tipo_vehiculo.model')
const {MUTANTE_TABLE} = require('./mutante.model')

const VehiculoShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  año: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  tipo_vehiculoId: {
    field: 'tipo_vehiculo_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TIPO_VEHICULO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  mutanteId: {
    field: 'mutante_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MUTANTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

}


class Vehiculo extends Model{
  static associate(models){
     this.belongsTo(models.Tipo_vehiculo,{
      as:'tipo_vehiculo'
    });
    this.belongsTo(models.Mutante,{
      as:'Mutante'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: VEHICULO_TABLE,
      modelName: 'Vehiculo',
      timestamps: false
    }
  }
}

module.exports = {VEHICULO_TABLE, VehiculoShema, Vehiculo}
