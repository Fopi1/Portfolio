import React, { useState } from "react";
import MyInput from "./components/input/MyInput";
import MyButton from "./components/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form action="">
      <MyInput
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        value={post.title}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        value={post.body}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
