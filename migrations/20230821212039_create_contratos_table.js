exports.up = function (knex) {
    return knex.schema.createTable('contratos', function (table) {
      table.increments('id').primary();
      table.integer('id_empresa').unsigned().references('id').inTable('usuarios');
      table.integer('id_persona').unsigned().references('id').inTable('usuarios');
      table.timestamp('fecha_inicio');
      table.timestamp('hora_inicio');
      table.integer('duracion_contrato');
      table.decimal('monto_total');
      table.string('estado');

      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('contratos');
  };
  