exports.up = function (knex) {
    return knex.schema.createTable('servicios', function (table) {
      table.increments('id').primary();
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios');
      table.string('descripcion');
      table.string('tarifa');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('servicios');
  };
  