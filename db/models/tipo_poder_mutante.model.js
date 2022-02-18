const {Model, DataTypes, Sequelize} = require('sequelize');

const {TIPO_PODER_TABLE}= require('./tipo_poder.model');
const {MUTANTE_TABLE}= require('./mutante.model');

const TIPO_PODER_MUTANTE_TABLE = 'poder_mutantes';

const Tipo_poder_mutanteShema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tipo_poderId: {
    field: 'tipo_poder_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TIPO_PODER_TABLE,
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
  }
}

class Tipo_poder_mutante extends Model{
  static associate(models){
    /*this.belongsTo(models.Tipo_poder,{
      as:'tipo_poder'
    });
    this.belongsTo(models.Mutante,{
      as:'mutante'
    });*/
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: TIPO_PODER_MUTANTE_TABLE,
      modelName: 'Tipo_poder_mutante',
      timestamps: false
    }
  }
}

module.exports = {TIPO_PODER_MUTANTE_TABLE, Tipo_poder_mutanteShema, Tipo_poder_mutante}
