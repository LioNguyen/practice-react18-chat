import ChatList from "@/components/organisms/ChatList";
import Navbar from "@/components/organisms/Navbar";
import Search from "@/components/organisms/Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <ChatList />
    </div>
  );
};

export default Sidebar;
