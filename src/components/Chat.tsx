import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      Chat
    </div>
  );
};

export default Chat;
