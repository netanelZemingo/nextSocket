import { NextApiRequest, NextApiResponse } from "next";
import { Messages, Msg } from "./Services/MessagesClass";

export default function handler(req: NextApiRequest, res: NextApiResponse<readonly Msg[]>) {
  res.json(getMessages());
}
export const getMessages = () => {
  return Messages.getInstance().messages;
};
