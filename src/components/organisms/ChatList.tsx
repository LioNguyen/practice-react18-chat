import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/context/AuthContext";
import { ChatContext } from "@/context/ChatContext";
import { db } from "@/firebase";

const ChatList = () => {
  const [chats, setChats] = useState(null);

  console.log("🚀 @log ~ Chats ~ chats:", chats);

  const { currentUser } = useContext<any>(AuthContext);
  const { dispatch } = useContext<any>(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc: any) => {
          setChats(doc.data());
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u: any) => {
    if (!dispatch) return;
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  if (!chats) {
    return <></>;
  }

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a: any, b: any) => b[1].date - a[1].date)
        .map((chat: any) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatList;
