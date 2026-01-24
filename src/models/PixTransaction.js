import crypto from "crypto";

export class PixTransaction {
  constructor({ senderKey, senderName, value }) {
    this.id = crypto.randomUUID();
    this.senderKey = senderKey;
    this.senderName = senderName;
    this.value = value;

    this.status = "CREATED";
    this.alert = null;
    this.createdAt = new Date();
  }
}
