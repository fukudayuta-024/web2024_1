const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test2.db");

let sql2 = [
  // アルバム一個目
  `insert into song ("name", "recommend","album_id") values ("Borderline",3,1);`,
  `insert into song ("name", "recommend","album_id") values ("努努-ゆめゆめ-",5,1);`,
  `insert into song ("name", "recommend","album_id") values ("内秘心書",3,1);`,
  `insert into song ("name", "recommend","album_id") values ("カゲロウ",5,1);`,
  `insert into song ("name", "recommend","album_id") values ("欲望に満ちた青年団",5,1);`,

  // 二個目
  `insert into song ("name", "recommend","album_id") values ("必然メーカー",3,2);`,
  `insert into song ("name", "recommend","album_id") values ("100％",4,2);`,
  `insert into song ("name", "recommend","album_id") values ("燦さん星",3,2);`,
  `insert into song ("name", "recommend","album_id") values ("Crazy Botch",3,2);`,
  `insert into song ("name", "recommend","album_id") values ("Yap",3,2);`,

  // 三個目
  `insert into song ("name", "recommend","album_id") values ("恋のアイボウ心ノクピド",4,3);`,
  `insert into song ("name", "recommend","album_id") values ("皆無",3,3);`,
  `insert into song ("name", "recommend","album_id") values ("20years old",4,3);`,
  `insert into song ("name", "recommend","album_id") values ("存在証明",3,3);`,
  `insert into song ("name", "recommend","album_id") values ("JUST",3,3);`,
  // 四個目
  `insert into song ("name", "recommend","album_id") values ("完全感覚Dreamer",5,4);`,
  `insert into song ("name", "recommend","album_id") values ("Yes I am",4,4);`,
  `insert into song ("name", "recommend","album_id") values ("Shake it down",4,4);`,
  `insert into song ("name", "recommend","album_id") values ("じぶんROCK",5,4);`,
  `insert into song ("name", "recommend","album_id") values ("Liar",4,4);`,
  `insert into song ("name", "recommend","album_id") values ("Wherever you are",5,4);`,
  `insert into song ("name", "recommend","album_id") values ("アダルトスーツ",4,4);`,
  `insert into song ("name", "recommend","album_id") values ("未完成行響曲",4,4);`,
  `insert into song ("name", "recommend","album_id") values ("Nobody's Home",5,4);`,

  // 五個目
  `insert into song ("name", "recommend","album_id") values ("アンサイズニア",5,5);`,
  `insert into song ("name", "recommend","album_id") values ("c.h.a.o.s.m.y.t.h",5,5);`,
  `insert into song ("name", "recommend","album_id") values ("Mr.現代スピーカー",4,5);`,
  `insert into song ("name", "recommend","album_id") values ("Re:make",5,5);`,
  `insert into song ("name", "recommend","album_id") values ("Pierce",4,5);`,
  `insert into song ("name", "recommend","album_id") values ("キミシダイ列車",5,5);`,
  // 六個目
  `insert into song ("name", "recommend","album_id") values ("ONION!",5,6);`,
  `insert into song ("name", "recommend","album_id") values ("The Beginning",5,6);`,
  `insert into song ("name", "recommend","album_id") values ("Clock Strikes",5,6);`,
  `insert into song ("name", "recommend","album_id") values ("Be the light",4,6);`,
  `insert into song ("name", "recommend","album_id") values ("Nothing Helps",4,6);`,
  `insert into song ("name", "recommend","album_id") values ("Deeper Deeper",5,6);`,
  `insert into song ("name", "recommend","album_id") values ("the same as...",3,6);`,

  // 七個目
  `insert into song ("name", "recommend","album_id") values ("Take me to the top",4,7);`,
  `insert into song ("name", "recommend","album_id") values ("Cry out",5,7);`,
  `insert into song ("name", "recommend","album_id") values ("Mighty Long Fall",3,7);`,
  `insert into song ("name", "recommend","album_id") values ("Heartache",5,7);`,
  `insert into song ("name", "recommend","album_id") values ("Memories",4,7);`,
  `insert into song ("name", "recommend","album_id") values ("Decision",4,7);`,
  `insert into song ("name", "recommend","album_id") values ("Fight the night",5,7);`,

  // 八個目
  `insert into song ("name", "recommend","album_id") values ("Taking off",5,8);`,
  `insert into song ("name", "recommend","album_id") values ("We are",5,8);`,
  `insert into song ("name", "recommend","album_id") values ("20/20",5,8);`,
  `insert into song ("name", "recommend","album_id") values ("Bedroom Warfare",4,8);`,
  `insert into song ("name", "recommend","album_id") values ("I was king",4,8);`,
  `insert into song ("name", "recommend","album_id") values ("Listen",4,8);`,
  `insert into song ("name", "recommend","album_id") values ("One Way Ticket",5,8);`,
  `insert into song ("name", "recommend","album_id") values ("Take what you want",4,8);`,

  // 九個目
  `insert into song ("name", "recommend","album_id") values ("Eye of the Storm",4,9);`,
  `insert into song ("name", "recommend","album_id") values ("Stand Out fit In",4,9);`,
  `insert into song ("name", "recommend","album_id") values ("Head high",3,9);`,
  `insert into song ("name", "recommend","album_id") values ("Wasted Nights",5,9);`,
  `insert into song ("name", "recommend","album_id") values ("Change",5,9);`,
  `insert into song ("name", "recommend","album_id") values ("In the Stars",3,9);`,

  // 十個目
  `insert into song ("name", "recommend","album_id") values ("Save Yourself",5,10);`,
  `insert into song ("name", "recommend","album_id") values ("Neon",5,10);`,
  `insert into song ("name", "recommend","album_id") values ("Vandalize",4,10);`,
  `insert into song ("name", "recommend","album_id") values ("When They Turn the Lights On",4,10);`,
  `insert into song ("name", "recommend","album_id") values ("Prove",4,10);`,
  `insert into song ("name", "recommend","album_id") values ("Mad World",5,10);`,
  `insert into song ("name", "recommend","album_id") values ("Renegades",5,10);`,
  `insert into song ("name", "recommend","album_id") values ("Wonder",4,10);`,
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
