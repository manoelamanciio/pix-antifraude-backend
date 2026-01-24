import express from "express";
import { receivePix, receiverConfirm } from "./controllers/pixController.js";

const app = express();
app.use(express.json());

app.post("/pix/receive", receivePix);
app.post("/pix/receiver-decision", receiverConfirm);

app.listen(3000, () => {
  console.log("🚀 Sistema Pix Antifraude rodando na porta 3000");
});
