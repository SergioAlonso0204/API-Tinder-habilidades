const knex = require('../knex');

class Servicio {
  static async create(data) {
    return knex('servicios').insert(data).returning('*');
  }

}

module.exports = Servicio;
