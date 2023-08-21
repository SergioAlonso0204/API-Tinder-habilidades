exports.up = function (knex) {
    return knex.schema.createTable('empresas', function (table) {
      table.increments('id').primary();
      table.string('nombre');
      table.string('direccion');
      table.string('detalles');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('empresas');
  };
  