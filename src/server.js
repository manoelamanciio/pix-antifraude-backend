import express from "express";
import { receivePix, receiverConfirm } from "./controllers/pixController.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("🚀 Sistema Pix Antifraude está rodando");
});

app.post("/pix/receive", receivePix);
app.post("/pix/receiver-decision", receiverConfirm);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Sistema Pix Antifraude rodando na porta ${PORT}`);
});
