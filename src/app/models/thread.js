const { DataTypes,Model } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo de base de datos

  class Threads extends Model {}

    Threads.init(   
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: "thread",
      tableName: "threads",
      timestamps: true,
    }
    )};
