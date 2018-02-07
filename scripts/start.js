const app = require("../src/index.js");
const nodemon = require("nodemon");

process.on("unhandledRejection", err => {
  throw err;
});

app.listen(3001);

nodemon({
  script: "src/index.js",
  ext: "js json"
});

nodemon
  .on("start", function() {
    console.log("Moviez started! :)");
  })
  .on("quit", function() {
    console.log("Moviez has quit! :(");
    process.exit();
  })
  .on("restart", function(files) {
    console.log("Moviez restarted due to: ", files);
  });
