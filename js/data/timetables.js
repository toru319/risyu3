const timetables = {
    // 経済学部-経済学科-1年生のサンプルデータ
    "経済学部-経済学科（現代経済専攻、経済分析専攻）-1": {
      timetable: [
        [ // 1限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 2限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 3限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 4限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 5限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 6限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        [ // 7限
          { name: "経済学入門" }, // 月
          { name: "基礎演習" }, // 火
          { name: "英語" }, // 水
          { name: "情報処理" }, // 木
          { name: "統計学" }, // 金
          { name: "" } // 土
        ],
        // 2限〜7限も同様に定義
      ],
      comments: [
        {
          author: "経済学部3年",
          text: "情報システム社会論、経済学、経済情報処理、基礎経済数学は楽単！"
        },
        // 他のコメントも同様に定義
      ]
    },

    "経営学部-国際経営学科-1": {
  timetable: [
    [ // 1限
      { name: "" }, // 月
      { name: "英語II（中級）/中級英語II前半 経営 [d]" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" } // 土
    ],
    [ // 2限
      { name: "" }, // 月
      { name: "英語I（中級）/中級英語I前半 経営 [d]" }, // 火
      { name: "政治学" }, // 水
      { name: "文学/文学I" }, // 木
      { name: "会計の基礎" }, // 金
      { name: "FYS（経営②）" } // 土
    ],
    [ // 3限
      { name: "" }, // 月
      { name: "言語学/言語学I" }, // 火
      { name: "科学技術史" }, // 水
      { name: "科学技術と社会" }, // 木
      { name: "英語II（中級）/中級英語II後半 経営 [d]" }, // 金
      { name: "" } // 土
    ],
    [ // 4限
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "経営の基礎" }, // 水
      { name: "基礎生物学/基礎生物学I" }, // 木
      { name: "英語I（中級）/中級英語I後半 経営 [d]" }, // 金
      { name: "" } // 土
    ],
    [ // 5限 (17:10〜18:50)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" } // 土
    ],
    [ // 6限 (19:00〜20:40)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" } // 土
    ],
    [ // 7限 (20:50〜22:30)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" } // 土
    ],
  ],
  comments: [
    {
      author: "経済学部3年",
      text: "情報システム社会論、経済学、経済情報処理、基礎経済数学は楽単！"
    },
    // 他のコメントも同様に定義
  ]
},

"経営学部-国際経営学科-1": {
  timetable: [
    [ // 1限 (09:00〜10:40)
      { name: "" }, // 月
      { name: "英語II（中級）/中級英語II前半" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" }  // 土
    ],
    [ // 2限 (10:50〜12:30)
      { name: "" }, // 月
      { name: "英語I（中級）/中級英語I前半" }, // 火
      { name: "文学" }, // 水
      { name: "会計の基礎" }, // 木
      { name: "FYS（経営30）" }, // 金
      { name: "" }  // 土
    ],
    [ // 3限 (13:30〜15:10)
      { name: "" }, // 月
      { name: "キャリアデザイン" }, // 火
      { name: "社会心理学" }, // 水
      { name: "科学技術と社会" }, // 木
      { name: "英語II（中級）/中級英語II後半" }, // 金
      { name: "" }  // 土
    ],
    [ // 4限 (15:20〜17:00)
      { name: "経営の基礎" }, // 月
      { name: "デザイン経営論/商品企画論" }, // 火
      { name: "基礎生物学" }, // 水
      { name: "英語I（中級）/中級英語I後半" }, // 木
      { name: "" }, // 金
      { name: "" }  // 土
    ],
    [ // 5限 (17:10〜18:50)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" }  // 土
    ],
    [ // 6限 (19:00〜20:40)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" }  // 土
    ],
    [ // 7限 (20:50〜22:30)
      { name: "" }, // 月
      { name: "" }, // 火
      { name: "" }, // 水
      { name: "" }, // 木
      { name: "" }, // 金
      { name: "" }  // 土
    ],
  ],
  comments: [
    {
      author: "経済学部3年",
      text: "情報システム社会論、経済学、経済情報処理、基礎経済数学は楽単！"
    },
    // 他のコメントも同様に定義
  ]
},


    // 他の学部・学科の時間割も同様に定義
  };
  