// jshint esversion: 6
var firstName = process.argv[2];
// var lastName = process.argv[2];
const famousPeopleDb = require("./modules");

famousPeopleDb.infoByFirstName(firstName, (err, rows) => {
  const rowsLength = rows.length;
  console.log(`Found ${rowsLength} famous persons:`);
  rows.forEach((row, index) => {

    console.log(`- ${index + 1}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`)
    });
    famousPeopleDb.finish();
});

// famousPeopleDb.infoByLastName(lastName, (err, rows) => {
//   const rowsLength = rows.length;
//   console.log(`Found ${rowsLength} famous persons:`);
//   rows.forEach((row, index) => {
//
//     console.log(`- ${index + 1}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`)
//     });
//     famousPeopleDb.finish();
// });
