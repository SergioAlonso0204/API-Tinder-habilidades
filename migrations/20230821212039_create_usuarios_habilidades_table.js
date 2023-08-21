exports.up = function (knex) {
    return knex.schema.createTable('usuarios_habilidades', function (table) {
      table.integer('id_usuario').unsigned().references('id').inTable('usuarios');
      table.integer('id_habilidad').unsigned().references('id').inTable('habilidades');
      table.primary(['id_usuario', 'id_habilidad']);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('usuarios_habilidades');
  };
  