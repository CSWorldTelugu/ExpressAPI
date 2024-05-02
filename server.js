const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(4000, (req, res) => {
  console.log("server started");
});

app.get("/mobiles", (req, res) => {
  db.getMobiles()
    .then((persons) => {
      res.json(persons);
    })
    .catch(function (err) {
      res.send(err);
    });
});
app.get("/mobiles/:id", (req, res) => {
  db.getMobiles(req.params.id)
    .then((persons) => {
      res.json(persons);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.post("/mobiles", (req, res) => {
  db.addMobile(req.body.name, req.body.price, req.body.ram, req.body.storage)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put("/mobiles", (req, res) => {
  db.updateMobile(
    req.body.name,
    req.body.price,
    req.body.ram,
    req.body.storage,
    req.body.id
  )
    .then(() => {
      res.json(req.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete("/mobiles", (req, res) => {
  db.deleteMobile(req.body.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
