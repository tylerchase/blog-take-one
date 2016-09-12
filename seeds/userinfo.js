
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: "My first user",
          password: "userpassword",
          email: "yaho@yaho.com",
          created_at: null,
          updated_at: null,
        }),
        knex('users').insert({
          username: "My second user",
          password: "userpassword",
          email: "yaho@yaho.com",
          created_at: null,
          updated_at: null,
        }),
        knex('users').insert({
          username: "My third user",
          password: "unknown",
          email: "yaho@yaho.com",
          created_at: null,
          updated_at: null,
        })
      ]);
    });
};
