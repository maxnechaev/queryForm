// jshint esversion: 6

const faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
  knex.raw("ALTER SEQUENCE famous_people_id_seq RESTART WITH 1"),
  knex('famous_people')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('famous_people').insert([
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          // birthday: faker.date.past(),
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          // birthday: faker.date.past(),
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          // birthday: faker.date.past(),
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          // birthday: faker.date.past(),
        },
        {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          // birthday: faker.date.past(),
        }
      ]);
    })
  ]);
};
