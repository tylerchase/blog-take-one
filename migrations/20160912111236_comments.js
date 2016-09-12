
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('comment_on_blog_id');
    table.string('commented_by');
    table.text('comment_content');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
