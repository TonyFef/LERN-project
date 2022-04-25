const express = require("express");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db/db.json");
const db = low(adapter);
module.exports = db

let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false });

// import { usersArr } from "./routes/auth.routes";

// Set some defaults
db.defaults({ users: {} }).write();
// Add a post
// db.get("users").push({ id: 1, title: "user1" }).write();
// db.set("user.name", "typicode").write();

const app = express();

app.use(express.json({ extended: true }));

app.post("/", urlencodedParser, function(request, response) {
    db.get("users")
      .push({ name: request.body.user })
      .write();
    response.redirect("/");
  });

app.use("/api/auth", require("./routes/auth.routes"));

app.listen(8080, () => console.log("started"));
