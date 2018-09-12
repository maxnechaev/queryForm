// jshint esversion: 6
const config = require('./knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);
const famousPeopleDb = require("./modules_knex.js");

knex('famous_people').insert({title: 'Shawshank Redemption', year: '2014'}).returning('*');

// famousPeopleDb.infoByFirstName(firstName, (err, rows) => {
//   const rowsLength = rows.length;
//   console.log(`Found ${rowsLength} famous persons:`);
//   rows.forEach((row, index) => {
//
//     console.log(`- ${index + 1}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
//     });
//     famousPeopleDb.finish();
// });

const firstName = process.argv[2];

knex
  .select("first_name", "last_name", "birthdate")
  .from("famous_people")
  .where(`first_name = ${firstName}`)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Query done!");
    knex.destroy();
  });
