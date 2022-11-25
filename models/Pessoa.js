const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Pessoa = sequelize.define('Pessoa', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

module.exports = Pessoa;