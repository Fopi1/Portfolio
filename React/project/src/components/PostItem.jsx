import React from "react";

function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="pst__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default PostItem;
