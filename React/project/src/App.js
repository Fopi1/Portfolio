import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter.jsx";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/button/input/MyInput";
import { useRef } from "react";

function App() {
  const [title, setTitle] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(bodyInputRef.current.value);
  };
  const bodyInputRef = useRef();
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput ref={bodyInputRef} type="text" placeholder="Название поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
