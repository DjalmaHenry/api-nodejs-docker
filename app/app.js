const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Seja bem vindo a API rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/persons", (req, res, next) => {
  res.json(["Djalma Henrique", "Rafael Roque"]);
});
