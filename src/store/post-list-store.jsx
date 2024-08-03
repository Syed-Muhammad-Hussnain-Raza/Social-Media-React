import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer Function that will deal with dispatch calls
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

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

// Default Posts that will be shown at start
const DEFAULT_POST_LIST = [
  {
    id: Date.now,
    title: "Getting Started with React Hooks",
    body: "React Hooks are a game-changer in the world of React. They allow you to use state and other React features without writing a class. In this post, we'll explore the basics of React Hooks, including useState and useEffect, and how they simplify your code. We'll also look at some common patterns and best practices for using hooks in your React applications",
    reaction: 100,
    userId: "102",
    tags: ["#react", "#hooks", "javascript"],
  },
  {
    id: Date.now,
    title: "Exploring JavaScript Destructuring",
    body: "JavaScript destructuring is a powerful feature that allows you to extract properties from objects and elements from arrays with ease. In this post, we'll explore how to use destructuring to simplify your code and make it more readable. We'll cover array destructuring, object destructuring, and nested destructuring, along with practical examples and common use cases.",
    reaction: 45,
    userId: "101",
    tags: ["#javascript", "#destructuring", "webDevelopment"],
  },
];

export default PostListProvider;
