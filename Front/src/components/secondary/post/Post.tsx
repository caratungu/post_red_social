import styles from "./Post.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import comment from "/comment.png";
import share from "/share.png";
import save from "/save.png";
import ButtonComment from "../buttonComment/ButtonComment";
import { useEffect, useState } from "react";
import { getPost } from "../../../api/posts";
import { getComments } from "../../../api/comments";
import Comment from "../comment/Comment";

interface CommentProps {
  id: number;
  autor: string;
  contenido: string;
  fecha_creacion: Date;
  respuesta_a?: number;
  respuestas: [];
  post: number;
}

const Post = () => {
  const [text, setText] = useState("");
  const [post, setPost] = useState({
    id: "",
    titulo: "",
    contenido: "",
    fecha_creacion: "",
  });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const posts = await getPost();
      setPost(posts.data[0]);
    }
    loadPost();

    async function loadComments() {
      const allComments = await getComments();
      setComments(allComments.data);
    }
    loadComments();
  }, []);

  const handleTextChange = (value: string) => {
    setText(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.post}>
          <h2>{post.titulo}</h2>
          <p>{post.contenido}</p>
          <div className={styles.actions}>
            <div className={styles.action}>
              <img src={comment} />
              <p>Comments</p>
            </div>
            <div className={styles.action}>
              <img src={share} />
              <p>Share</p>
            </div>
            <div className={styles.action}>
              <img src={save} />
              <p>Save</p>
            </div>
            <div className={styles.action}>
              <p>
                <strong>· · ·</strong>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.linkImage}></div>
      </div>
      <div className={styles.insertComment}>
        <p>Comenta como Guest</p>
        <ReactQuill value={text} onChange={handleTextChange} />
      </div>
      <div className={styles.btnComment}>
        <ButtonComment comment={text} postId={Number(post.id)} />
      </div>
      {comments.map((com: CommentProps, index) => {
        if (com.respuesta_a === null)
          return <Comment key={index} commentInfo={com}/>;
      })}
    </div>
  );
};

export default Post;
