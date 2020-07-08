const express = require("express");

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Hello BC DevExchange from Kubernetes! App is working and public facing! \n");
=======
  res.send("Hello BC DevExchange! App is working and public facing!!! \n");
>>>>>>> 92efe3e37551382ec87b86825a5eef194e276e2f
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});