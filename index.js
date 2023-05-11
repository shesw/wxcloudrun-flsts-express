const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {
  init: initDB,
  Counter
} = require("./db");

const logger = morgan("tiny");

const app = express();
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors());
app.use(logger);


app.get("/", async (req, res) => {
  res.send('welcome to Sheswland')
});

// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();