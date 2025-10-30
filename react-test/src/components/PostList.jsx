import { useState } from 'react';

import Post from "./Post"
import classes from './';
import NewPost from "./NewPost";
import Modal from './Modal';

function PostList() {
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
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body="React.js é maravilhoso" />
                <Post author="Feranda" body="o curso me ajudou muito" />
            </ul>
        </>
    )
}

export default PostList;