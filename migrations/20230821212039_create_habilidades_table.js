exports.up = function (knex) {
    return knex.schema.createTable('habilidades', function (table) {
      table.increments('id').primary();
      table.string('nombre');
    
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('habilidades');
  };
  