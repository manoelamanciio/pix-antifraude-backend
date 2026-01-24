import { PixTransaction } from "../models/PixTransaction.js";
import { processPix, receiverDecision } from "../services/pixService.js";

const transactions = [];

export function receivePix(req, res) {
  const { senderKey, senderName, value } = req.body;

  console.log("\n📥 PIX ENVIADO");
  console.log("👤 Pessoa A (remetente):", senderName);
  console.log("💰 Valor: R$", value);

  const transaction = new PixTransaction({
    senderKey,
    senderName,
    value,
  });

  const processedTransaction = processPix(transaction);

  console.log("📌 STATUS:", processedTransaction.status);

  if (processedTransaction.alert) {
    console.log("⚠️ ALERTA PARA A PESSOA B:");
    console.log(processedTransaction.alert.legal);
  }

  transactions.push(processedTransaction);
  res.status(201).json(processedTransaction);
}

export function receiverConfirm(req, res) {
  const { transactionId, accepted } = req.body;

  const transaction = transactions.find((t) => t.id === transactionId);

  if (!transaction) {
    return res.status(404).json({ error: "Transação não encontrada" });
  }

  const result = receiverDecision(transaction, accepted);

  console.log("📩 DECISÃO DA PESSOA B:", result.status);

  res.json(result);
}
