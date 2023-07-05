import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import PostForm from "../components/PostForm";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";
import { useObserver } from "hooks/useObserver";
import MySelect from "components/UI/select/MySelect";

function Posts() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
  };
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });
  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов"
        option={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      ></MySelect>
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}

export default Posts;
