// import { Button } from "@/Components/Button";
import { Button } from "@/Components/Button";

import { Fragment, KeyboardEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { getMessages } from "./api/messages";
import { Input } from "@/Components/Input";
import { Msg } from "./api/Services/MessagesClass";
import { useGlobalContext } from "../../context/UsernameContext";
import { useRouter } from "next/router";

interface chatProps {
  msgsProps: Msg[];
}
export async function getServerSideProps() {
  return {
    props: { msgsProps: getMessages() }, // will be passed to the page component as props
  };
}

const Home = ({ msgsProps }: chatProps) => {
  const router = useRouter();

  const { username } = useGlobalContext();

  useEffect(() => {
    if (!username) {
      router.replace("/activateSubsription");
    }
  }, [router, username]);

  const [messages, setMessages] = useState<Msg[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  //   SocketClient.getInstance().on("update-input", (msg) => {
  //     console.log(msg);
  //   });

  const emitInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const onMessageSend = async (msg: Msg) => {
    const res = await fetch(`/api/postMessage`, {
      body: JSON.stringify(msg),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    setInputValue("");
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code !== "Enter") return;
    onMessageSend({ username, msg: inputValue });
  };

  return (
    <MessagesView>
      <MessagesList>
        {messages.map((msg, i) => (
          <Fragment key={i}>
            <MessageUsername username={msg.username} />
            <MessagesItem>{msg.msg}</MessagesItem>
          </Fragment>
        ))}
      </MessagesList>
      <InputAndButton>
        <Input
          onKeyDown={onKeyDown}
          placeholder="enter message"
          type="text"
          value={inputValue}
          onChange={emitInputChange}
        />
        <Button onClick={() => onMessageSend({ username, msg: inputValue })}>Send</Button>
      </InputAndButton>
    </MessagesView>
  );
};
export default Home;

const MessageUsername = ({ username }: { username: string }) => {
  return <MessagesItem color="gray">{username}</MessagesItem>;
};

const MessagesView = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const InputAndButton = styled.div`
  display: flex;
`;
const MessagesList = styled.ul`
  list-style: none;
  /* padding: 0; */
  height: 100%;
  /* width: 100%; */
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MessagesItem = styled.li`
  /* margin: 5px; */
  font-size: large;
`;
