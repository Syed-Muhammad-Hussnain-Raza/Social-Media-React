import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={`card ${styles.postCard}`} style={{ width: "18rem" }}>
      <div className={`card-body ${styles.cardBody}`}>
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reaction}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            className={`badge rounded-pill text-bg-primary ${styles.hashtag}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
