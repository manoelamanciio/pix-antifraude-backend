import { trustedContacts } from "../data/trustedContacts.js";

export function processPix(transaction) {
  const isTrusted = trustedContacts.includes(transaction.senderKey);

  if (isTrusted) {
    transaction.status = "CONFIRMED_AUTOMATIC";
    return transaction;
  }

  transaction.status = "PENDING_RECEIVER_DECISION";
  transaction.alert = {
    title: "⚠️ ALERTA LEGAL",
    message:
      "Você recebeu um Pix de um remetente desconhecido. Caso este Pix tenha sido enviado por engano, a não devolução pode configurar crime.",
    legal:
      "Art. 169 do Código Penal — Apropriar-se de coisa alheia recebida por erro.",
    receiverOptions: ["ACEITAR", "RECUSAR"],
  };

  return transaction;
}

export function receiverDecision(transaction, accepted) {
  if (accepted) {
    transaction.status = "ACCEPTED_BY_RECEIVER";
  } else {
    transaction.status = "DECLINED_BY_RECEIVER";
  }

  return transaction;
}
