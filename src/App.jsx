import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <Post></Post>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
