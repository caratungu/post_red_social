import styles from './ButtonComment.module.css'
import { createComment } from '../../../api/comments';

const ButtonComment = ({ comment, postId } : {comment: string, postId: number}) => {
    const plainText: string = comment.replace(/^<p>|<\/p>$/g, '');

    const handleOnClick = async () => {
        console.log(plainText);
        try {
            async function addComment () {
                const newComment = await createComment({
                    autor: "Guest",
                    contenido: plainText,
                    respuesta_a: null,
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
        <div className={styles.container} onClick={handleOnClick}>Comment</div>
    )
}

export default ButtonComment;