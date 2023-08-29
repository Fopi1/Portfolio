import React, { useRef, useState } from "react";
import "./styles/style.css";
import PostItem from "./PostItem";
import PostList from "./PostList";
import MyButton from "./components/button/MyButton";
import MyInput from "./components/input/MyInput";
import PostForm from "./PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Javascript - имба" },
    { id: 2, title: "Javascript", body: "Javascript - имба" },
    { id: 3, title: "Javascript", body: "Javascript - имба" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
