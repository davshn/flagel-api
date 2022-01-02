const { DataTypes,Model } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo de base de datos

  class Posts extends Model {}

    Posts.init(   
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: "post",
      tableName: "posts",
      timestamps: true,
    }
    )};
