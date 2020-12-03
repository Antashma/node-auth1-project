
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'jandaw', password: '12345'},
        {username:'jondoe', password: 'qwerty'},
        {username:'jamboo', password: 'password'},

      ]);
    });
};
