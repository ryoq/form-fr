const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

// aアップロードされたファイルの保存先
const upload = multer({ dest: "/tmp/" });
//herokuでは環境変数にPORTが与えられるから、process.env.PORTと書けばPORTが指定できる。
const PORT = process.env.PORT || 5050;
//expressを使う際に必要
const app = express();
//POSTされた値を変数に代入するのに必要
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json())

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("."));
//ここまでexpress初期テンプレート（理解できていない）

// /にGETが来たらindex.ejsを返す
app.get("/", (req, res) => {
  console.log("GET /");
  res.render("pages/index");
});
// /completeに来たらcomplete.ejsを返す
app.get("/complete", (req, res) => {
  console.log("GET /complete");
  res.render("pages/complete");
});
