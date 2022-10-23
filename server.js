const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
// const figlet = require('figlet')

// user will send a request for a single pokemon
// expected response object will be the sprite / json of the pokemon

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherpage") {
    fs.readFile("otherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherotherpage") {
    fs.readFile("otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("student" in params) {
      if (params["student"] == "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
        };
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] != "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if

    // if ("pokemon" in params) {
    //   let pokemonData = fetch(
    //     `https://pokeapi.co/api/v2/pokemon/${params["pokemon"]}`
    //   );
    //   pokemonData
    //     .then((resolved) => resolved.json())
    //     .then((data) => {
    //       console.log(data);
    //       document.querySelector("h2").innerText =
    //         data.name.charAt(0).toUpperCase() +
    //         data.name.slice(1) +
    //         "'s" +
    //         " Normal and Shiny Sprites:";
    //       document.getElementById("normal").src = data.sprites.front_default;
    //       document.getElementById("shiny").src = data.sprites.front_shiny;
    //     }); // assuming this turns it into a json
    // }
  } //else if
  else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
  // else {
  //   figlet("404!!", function (err, data) {
  //     if (err) {
  //       console.log("Something went wrong...");
  //       console.dir(err);
  //       return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

server.listen(8000);
