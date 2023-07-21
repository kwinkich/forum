import styles from './Post.module.css';

interface PostProps {
  postContent: PostContent;
}

interface PostContent {
  title: string;
  userLink: string;
  userNick: string;
  postDate: string;
  image?: string;
  textContent: string;
}

function Post(props: PostProps) {
  const { title, userLink, userNick, postDate, image, textContent } = props.postContent;

  return (
    <article className={styles.post}>
      <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{title}</h3>
        <div className={styles.infoPost}>
          <a href={userLink} className={styles.infoLink}>
            <div className={styles.userImg}></div>
            <div className={styles.infoBlock}>
              <p className={styles.infoUser}>Від: {userNick}</p>
              <p className={styles.infoDate}>{postDate.toString()}</p>
            </div>
          </a>
        </div>
        {image && (
          <div className={styles.postImage}>
            <img src={image} alt="PostImage" />
          </div>
        )}
        <p className={styles.postContentText}>{textContent}</p>
      </div>
    </article>
  );
}

export default Post;
