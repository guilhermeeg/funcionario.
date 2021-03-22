let {Sequelize, DataTypes} = require("sequelize");
let db = require("./db");

const funcionario = db.define("funcionario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: DataTypes.STRING
    }
);

module.exports = funcionario;