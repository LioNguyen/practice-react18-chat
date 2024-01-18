import { useContext } from "react";

import Input from "@/components/molecules/Input";
import Messages from "@/components/organisms/Messages";
import { ChatContext } from "@/context/ChatContext";

const ChatBox = () => {
  const { data } = useContext<any>(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default ChatBox;
