import express from "express";

const app = express();
const PORT = 4001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});
