import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Lahore",
    body: "Hi, I am going to COMSATS University Islamabad, Lahore Campus on September 2, 2024 to start my 3rd semester of BSCS",
    reaction: 13,
    userId: "Syed M.Hussnain Raza",
    tags: ["#university", "#vacations", "new_journey"],
  },
  {
    id: "2",
    title: "Going to BISE Lahore",
    body: "Hi, I am going to BISE Lahore in August for getting the duplicate of HSSC Result Card",
    reaction: 5,
    userId: "Hussnain Raza",
    tags: ["#HSSC_Result_Card", "#BISE_Lahore", "Duplicate_Result_Card"],
  },
];

export default PostListProvider;
