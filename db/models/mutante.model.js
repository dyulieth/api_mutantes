const {Model, DataTypes, Sequelize} = require('sequelize');

const {GRUPO_TABLE}= require('./grupo.model');
const {CONDICION_TABLE}= require('./condicion.model');
const MUTANTE_TABLE = 'mutantes';

const MutanteShema = {
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
  city: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  grupoId: {
    //field: 'group_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GRUPO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  condicionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONDICION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Mutante extends Model{
  static associate(models){
    this.belongsTo(models.Grupo,{
      as:'grupo'
    });
    this.belongsTo(models.Condicion,{
      as:'condicion'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: MUTANTE_TABLE,
      modelName: 'Mutante',
      timestamps: false
    }
  }
}

module.exports = {MUTANTE_TABLE, MutanteShema, Mutante}
