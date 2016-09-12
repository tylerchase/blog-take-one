
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', function(table){
    table.increments();
    table.string('made_by_user');
    table.string('blog_title');
    table.text('blog_content');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts')
};
