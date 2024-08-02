import { createContext } from "react";

const PostList = createContext({});

const PostListProvider = ({ children }) => {
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
