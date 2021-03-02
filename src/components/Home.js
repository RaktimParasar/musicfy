import Sidebar from "./homepages/Sidebar";
import Browse from "./homepages/Browse";

const Home = () => {
  return (
    <main className="main__container">
      <div className="main__sections">
        <Sidebar />
        <Browse />
      </div>
    </main>
  );
};

export default Home;
