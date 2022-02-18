const {Model, DataTypes, Sequelize} = require('sequelize');

const TIPO_VEHICULO_TABLE = 'tipo_vehiculo';

const Tipo_vehiculoShema = {
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
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Tipo_vehiculo extends Model{
  static associate(models){
    this.hasMany(models.Vehiculo,{
      as: 'vehiculos',
      foreignKey: 'tipo_vehiculoId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TIPO_VEHICULO_TABLE,
      modelName: 'Tipo_vehiculo',
      timestamps: false
    }
  }
}

module.exports = {TIPO_VEHICULO_TABLE, Tipo_vehiculoShema, Tipo_vehiculo}
