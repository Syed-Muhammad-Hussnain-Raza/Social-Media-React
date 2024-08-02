import { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className={`card ${styles.postCard}`}>
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`badge rounded-pill text-bg-primary ${styles.hashtag}`}
          >
            {tag}
          </span>
        ))}
        <div className={`alert alert-success ${styles.reactions}`} role="alert">
          This post has been reacted by <strong>{post.reaction}</strong> people.
        </div>
      </div>
    </div>
  );
};

export default Post;
