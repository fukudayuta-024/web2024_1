const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test2.db");

let sql2 = [
  `insert into Album ("name") values ("ゼイタクビョウ");`,
  `insert into Album ("name") values ("BEAM OF LIGHT");`,
  `insert into Album ("name") values ("感情エフェクト");`,
  `insert into Album ("name") values ("Nicheシンドローム");`,
  `insert into Album ("name") values ("残響リファレンス");`,
  `insert into Album ("name") values ("人生×僕＝");`,
  `insert into Album ("name") values ("35xxxv");`,
  `insert into Album ("name") values ("Ambitions");`,
  `insert into Album ("name") values ("Eye of the storm");`,
  `insert into Album ("name") values ("Luxury Disease");`,
];

for (let sql of sql2) {
  db.serialize(() => {
    db.run(sql, (error, row) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      console.log("データを追加しました");
    });
  });
}
 
