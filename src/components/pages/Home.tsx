import ChatBox from "@/components/templates/ChatBox";
import Sidebar from "@/components/templates/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
