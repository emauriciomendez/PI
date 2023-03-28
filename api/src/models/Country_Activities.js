
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country_activities', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    activityId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      
    
  },{timestamps: true});
};
