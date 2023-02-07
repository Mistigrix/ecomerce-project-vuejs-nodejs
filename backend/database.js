var mysql = require('mysql2');

var connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpassword"
});

connexion.connect(function(err) {
  if (err) throw err;
  console.log("Connexion...");
});

connexion.query("USE alibaba_copy", function(error, result) {
    if (error) throw error;
    console.log("Connexion to database is success!")
})

module.exports = connexion
