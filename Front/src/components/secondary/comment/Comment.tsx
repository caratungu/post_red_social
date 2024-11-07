import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import avatar from "/avatar.png";
import comment from "/comment.png";
import share from "/share.png";
import ReactQuill from "react-quill";
import ButtonReply from "../buttonReply/ButtonReply";
import { getPost } from "../../../api/posts";

interface CommentProps {
  id: number;
  autor: string;
  contenido: string;
  fecha_creacion: Date;
  respuesta_a?: number;
  respuestas: [];
  post: number;
}

const Comment = ( commentInfo  : { commentInfo: CommentProps }) => {
  const date: Date = new Date(commentInfo.commentInfo.fecha_creacion);
  const dateString: string = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  const [replyClick, setReplayClick] = useState(false);
  const [text, setText] = useState("");
  const [post, setPost] = useState({
    id: "",
    titulo: "",
    contenido: "",
    fecha_creacion: "",
  });

  const handleOnClick = () => {
    if (replyClick === false) {
      setReplayClick(true);
    } else {
      setReplayClick(false);
    }
  };

  const handleTextChange = (value: string) => {
    setText(value);
  };

  useEffect(() => {
    async function loadPost() {
      const posts = await getPost();
      setPost(posts.data[0]);
    }
    loadPost();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <img className={styles.avatar} src={avatar} />
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.content}>
        <p>
          <strong>{commentInfo.commentInfo.autor}</strong> - {dateString}
        </p>
        <p>{commentInfo.commentInfo.contenido}</p>
        <div className={styles.actions}>
          <div className={styles.action} onClick={handleOnClick}>
            <img src={comment} />
            <p>Reply</p>
          </div>
          <div className={styles.action}>
            <img src={share} />
            <p>Share</p>
          </div>
          <div className={styles.action}>
            <p>
              <strong>· · ·</strong>
            </p>
          </div>
        </div>
        <div className={styles.reply}>
          {replyClick && (
            <>
              <ReactQuill value={text} onChange={handleTextChange} />
              <ButtonReply
                reply={text}
                postId={Number(post.id)}
                commentId={Number(commentInfo.commentInfo.id)}
              />
            </>
          )}
        </div>
      {
        commentInfo.commentInfo.respuestas.map((com: CommentProps, index) => {
          if (com.respuesta_a !== null)
            return <Comment key={index} commentInfo={com}/>;
        })}
      </div>
    </div>
  );
};

export default Comment;
