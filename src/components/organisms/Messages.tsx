import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

import Message from "@/components/molecules/Message";
import { ChatContext } from "@/context/ChatContext";
import { db } from "@/firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext<any>(ChatContext);

  useEffect(() => {
    if (!data?.chatId) return;
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data?.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m: any) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
