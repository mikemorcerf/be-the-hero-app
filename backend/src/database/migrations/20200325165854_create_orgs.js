
exports.up = function(knex) {
    return knex.schema.createTable('orgs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('city').notNullable();
      table.string('state', 2).notNullable();
      table.string('website').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('orgs');
  };
  