let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://bhytqahsxuumdz:9e44cef7553b89a800449dcf73ef6090bcb5360d7e85e2f76fa15ffce57a4660@ec2-52-203-27-62.compute-1.amazonaws.com:5432/dsq3cr977d0mj",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, 
            }
        }
    }
);

module.exports = db;