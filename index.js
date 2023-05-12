// const path = require("path");
const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const {
//   init: initDB,
//   Counter
// } = require("./db");

// const logger = morgan("tiny");
const utils = require("./utils");
const bonus = require("./game/bonus");

const app = express();
// app.use(express.urlencoded({
//   extended: false
// }));
// app.use(express.json());
// app.use(cors());
// app.use(logger);

app.get("/", async (req, res) => {
  res.send("Sheswland")
});

app.get("/obj/*", async (req, res) => {
  var prefix = req.params[0]

  function onError(err) {
    res.send(err.stack)
  }

  function onSuccess(data) {
    res.send(data)
  }
  utils.listObj(prefix, onError, onSuccess)
});

app.get("/bonus/new_task", async (req, res) => {
  res.send(bonus.newTask(null).toString())
})

// // 小程序调用，获取微信 Open ID
// app.get("/api/wx_openid", async (req, res) => {
//   if (req.headers["x-wx-source"]) {
//     res.send(req.headers["x-wx-openid"]);
//   }
// });

const port = process.env.PORT || 81;

async function bootstrap() {
  // await initDB();
  app.listen(port, () => {
    console.log("启动成功", port);
  });
}

bootstrap();