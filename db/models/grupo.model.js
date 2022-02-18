const {Model, DataTypes, Sequelize} = require('sequelize');

const GRUPO_TABLE = 'grupo';

const GrupoShema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Grupo extends Model{
  static associate(models){
    this.hasMany(models.Mutante,{
      as: 'mutantes',
      foreignKey: 'grupoId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: GRUPO_TABLE,
      modelName: 'Grupo',
      timestamps: false
    }
  }
}

module.exports = {GRUPO_TABLE, GrupoShema, Grupo}
