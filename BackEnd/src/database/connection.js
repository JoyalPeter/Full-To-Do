const knex=require('knex');
const config=require('./knexfile');

const knexInstance=knex(config[process.env.ENVIRONMENT]);

module.exports = knexInstance;