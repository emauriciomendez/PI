const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      //defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.JSON,
    },
    region:{
      type: DataTypes.STRING,
     
    },
    capital:{
      type: DataTypes.STRING,
    },
    subregion:{
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population:{
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },{timestamps: false});
};
