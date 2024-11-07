import styles from './ButtonReply.module.css'
import { createComment } from '../../../api/comments';

const ButtonReply = ({ reply, postId, commentId } : {reply: string, postId: number, commentId: number}) => {
    const plainText: string = reply.replace(/^<p>|<\/p>$/g, '');

    const handleOnClick = async () => {
        console.log(plainText);
        try {
            async function addComment () {
                const newComment = await createComment({
                    autor: "Guest",
                    contenido: plainText,
                    respuesta_a: commentId,
                    post: postId
                })
                console.log(newComment)
            }
            addComment()
            window.location.href = window.location.href
        } catch (error) {
            console.log(error)
            alert('No se pudo')
        }
    }

    return(
        <div className={styles.container} onClick={handleOnClick}>Replay</div>
    )
}

export default ButtonReply;