// jshint esversion: 6


module.exports = (function () {
  const { Client } = require("pg");
  const settings = require("./settings"); // settings.json

  const client = new Client({
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  });

  client.connect();

  function infoByFirstName (firstName, callback){
      client.query(`SELECT *
        FROM famous_people
        WHERE first_name = $1:: TEXT;`, [firstName], (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback (null, res.rows);
        }
      });
    }

  // function infoByLastName (lasttName, callback){
  //     client.query(`SELECT *
  //       FROM famous_people
  //       WHERE last_name = $1:: TEXT;`, [lasttName], (err, res) => {
  //       if (err) {
  //         callback(err);
  //       } else {
  //         callback (null, res.rows);
  //       }
  //     });
  //   }

      return {
        infoByFirstName: infoByFirstName,
        // infoByLastName: infoByLastName,
        finish: function () {
          client.end();
        }

  };
})();
