'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('movies')
  .select('id', 'title', 'score')
  .orderBy('score', 'ASC')
  .limit(1)
  .then((result) => {
    console.log('----------------------------');
    console.log(result);
    knex.destroy();
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
    process.exit(1);
  });

knex('movies')
  .select('id', 'title', 'duration')
  .where('title', 'X-Men: Apocalypse')
  .orWhere('title', 'The Princess Bride')
  .then((result) => {
    console.log(result);
    knex.destroy()
  })
  .catch((error) => {
    console.log('----------------------------');
    console.error(error);
    knex.destroy();
    process.exit(1);
  });

knex('movies')
  .select('id', 'title', 'released_at')
  .orderBy('released_at', 'ASC')
  .then((result) => {
    console.log('----------------------------');
    console.log(result);
    knex.destroy()
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
    process.exit(1);
  });

knex('movies')
  .select('id', 'title', 'genre', 'score')
  .where('rating', 'PG')
  .where('score', '>', '7.5')
  .where('score', '<', '8.5')
  .then((result) => {
    console.log('----------------------------');
    console.log(result);
    knex.destroy()
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
    process.exit(1);
  });

knex('movies')
  .select('title', 'score', 'awards.kind', 'awards.name')
  .innerJoin('awards', 'movies.id', 'awards.movie_id')
  .orderBy('title', 'ASC')
  .then((result) => {
    console.log('----------------------------');
    console.log(result);
    knex.destroy();
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
    process.exit(1);
  });

knex('movies')
  .select('title', 'actors.name', 'actors_movies.role')
  .innerJoin('actors_movies', 'movies.id', 'actors_movies.movie_id')
  .innerJoin('actors', 'actors.id', 'actors_movies.actor_id')
  .where('title', 'Pulp Fiction')
  .orderBy('birthed_at', 'ASC')
  .then((result) => {
    console.log('----------------------------');
    console.log(result);
    knex.destroy();
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
    process.exit(1);
  });
