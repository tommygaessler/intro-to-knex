'use strict';

const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// inserts and returns data about the insert
knex('movies')
  .insert({
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: new Date('2016-02-12 00:00:00 UTC'),
    score: 8.2
  })
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });

// inserts and returns what was inserted
knex('movies')
  .insert({
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: new Date('2016-02-12 00:00:00 UTC'),
    score: 8.2
  }, '*')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });

// updates and returns how many are updated
knex('movies')
  .update({
    is_3d: true,
    score: 9.1
  })
  .where('id', 5)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });

// updates and returns what is updated
knex('movies')
  .update({
    is_3d: true,
    score: 9.1
  }, '*')
  .where('id', 5)
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });


// deletes and returns how many it deleted
knex('movies')
  .del()
  .where('title', 'Deadpool')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
