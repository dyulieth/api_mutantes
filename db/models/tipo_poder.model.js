const {Model, DataTypes, Sequelize} = require('sequelize');

const TIPO_PODER_TABLE = 'tipo_poder';

const Tipo_poderShema = {
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

class Tipo_poder extends Model{
  static associate(models){
    this.belongsToMany(models.Mutante, {
      as: 'poder',
      through: models.Tipo_poder_mutante,
      foreignKey: 'poderId',
      otherKey: 'mutanteId'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TIPO_PODER_TABLE,
      modelName: 'Tipo_poder',
      timestamps: false
    }
  }
}

module.exports = {TIPO_PODER_TABLE, Tipo_poderShema, Tipo_poder}
