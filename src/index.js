const express = require("express");
const readTorrent = require("read-torrent");
const app = express();

app.post("/create", (req, res) => {
  const { magnet } = req.body;
  readTorrent(magnet, onFinish);

  const onFinish = (err, torrent) => {
    if (err) return res.send({ error: true, content: err });
    const infoHash = torrent.infoHash;
  };
  res.send("ok!");
});

module.exports = app;
