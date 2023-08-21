exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
      table.increments('id').primary();
      table.string('nombres').notNullable();
      table.string('tipodocumento');
      table.string('numerodocumento');
      table.string('correo').unique().notNullable();
      table.string('celular');
      table.string('tipousuario');
      // Otras columnas según necesites
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
  };
