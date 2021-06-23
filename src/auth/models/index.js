'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const NODE_ENV = process.env.NODE_ENV;

let sequelize = new Sequelize(DATABASE_URL, NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}: {});

const users = userSchema(sequelize, DataTypes)

module.exports = {
  db: sequelize,
  users: users,
}
