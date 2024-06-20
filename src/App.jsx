import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Footer from "./components/Fotter";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  const [defaultFeed, setdefaultFeed] = useState([
    // {
    //   id: Date.now(),
    //   title: "Pratik",
    //   body: "Sample",
    //   reactions: "4",
    //   userID: "sample",
    //   hashtags: ["sample", "sample"],
    // },
    // {
    //   id: Date.now(),
    //   title: "Kamble",
    //   body: "Sample",
    //   reactions: "4",
    //   userID: "sample",
    //   hashtags: ["sample", "sample"],
    // },
  ]);

  const addPost = (title, body, reactions, hashtags) => {
    const newArr = [{ title, body, reactions, hashtags }, ...defaultFeed];
    setdefaultFeed(newArr);
    alert("Post created");
  };
  const deletePost = (currItem) => {
    const newArr = defaultFeed.filter((item) => {
      return item.title !== currItem.title;
    });
    setdefaultFeed(newArr);
  };
  return (
    <>
      <div className="box-container">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className="box">
          <Navbar />
          <div className="feed-container">
            {selectedTab === "Home" ? (
              <Feed defaultFeed={defaultFeed} deletePost={deletePost} />
            ) : (
              <Post addPost={addPost} />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
