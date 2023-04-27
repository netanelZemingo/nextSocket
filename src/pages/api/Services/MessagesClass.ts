import { NextApiRequest, NextApiResponse } from "next";
import { NextApiResponseWithSocket } from "../types";
import fs from "fs";
import path from "path";

export interface Msg {
  username: string;
  msg: string;
}
export class Messages {
  private static instance: Messages;
  constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Messages();
      this.instance.messages = [];
    }
    return this.instance;
  }
  messages: Msg[] = [];

  // private pathToMessages = path.join(process.cwd(), "tmp") + "/messages.json";
  private pathToMessages = "/tmp/messages.json";

  addMessage(msg: Msg) {
    this.messages.push(msg);
  }
}
