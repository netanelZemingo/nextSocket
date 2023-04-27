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
  constructor() {
    this.messages = this.readFile();
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Messages();
      this.instance.messages = this.instance.readFile();
    }
    return this.instance;
  }
  messages: ReadonlyArray<Msg> = [];

  // private pathToMessages = path.join(process.cwd(), "tmp") + "/messages.json";
  private pathToMessages = "/tmp/messages.json";

  private readFile(): Msg[] {
    return JSON.parse(fs.readFileSync(this.pathToMessages, "utf8"));
  }

  addMessage(msg: Msg) {
    const fileContents = this.readFile();

    fileContents.push(msg);
    fs.writeFileSync(this.pathToMessages, JSON.stringify(fileContents));

    this.messages = fileContents;
  }
}
