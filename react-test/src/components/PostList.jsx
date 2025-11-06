import { useState } from 'react';

import Post from "./Post"
import classes from './';
import NewPost from "./NewPost";
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} onCancel={onStopPosting} />
                </Modal>
            ) : null}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body="React.js é maravilhoso" />
                <Post author="Feranda" body="o curso me ajudou muito" />
            </ul>
        </>
    )
}

export default PostList;