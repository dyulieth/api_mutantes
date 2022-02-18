const {Model, DataTypes, Sequelize} = require('sequelize');

const CONDICION_TABLE = 'condicion';

const CondicionShema = {
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

class Condicion extends Model{
  static associate(models){
    this.hasMany(models.Mutante,{
      as: 'mutantes',
      foreignKey: 'condicionId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CONDICION_TABLE,
      modelName: 'Condicion',
      timestamps: false
    }
  }
}

module.exports = {CONDICION_TABLE, CondicionShema, Condicion}
