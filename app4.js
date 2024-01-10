const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test2.db");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   var omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
//   var rand1 = Math.floor(Math.random() * 6);
//   var rand2 = Math.floor(Math.random() * 6);
//   var rand3 = Math.floor(Math.random() * 6);
//   res.render("omikuji", {
//     omikuji: omikuji[rand1],
//     kuji: omikuji[rand2],
//     mikuji: omikuji[rand3],
//   });
// });

app.get("/fr", (req, res) => {
  let sql = `
  select id, name, recommend ,album_id from song;
  `;
  db.serialize(() => {
    db.all(sql, (error, row) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      // for (let data of row) {
      //   console.log(data.id + " : " + data.name + " : " + data.album_id);
      // }
      res.render("test", { data: row });
    });
  });
});

app.get("/pop", (req, res) => {
  let sql = `
  select 
   id, name, recommend ,album_id from song
  where 
   id IN (21,5,16,32,30,56,4,19,46,54)
  ;
  `;
  db.serialize(() => {
    db.all(sql, (error, row) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      // for (let data of row) {
      //   console.log(data.id + " : " + data.name + " : " + data.album_id);
      // }
      console.log(row);
      res.render("test3", { data: row });
    });
  });
});

app.get("/al/:id", (req, res) => {
  let sql =
    `
  select song.id,song.name,song.recommend,song.album_id,album.name as album_name from song join album
   on song.album_id = album.id
   where song.album_id = ` +
    req.params.id +
    ` ;
  `;
  db.serialize(() => {
    db.all(sql, (error, row) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      for (let data of row) {
        console.log(data.id + " : " + data.name);
      }
      res.render("test2", { data: row });
    });
  });
});

app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));
