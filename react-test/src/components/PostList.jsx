import { useState } from 'react';

import Post from "./Post"
import classes from './';
import NewPost from "./NewPost";
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            ) : null}
            <ul className={classes.posts}>
                <Post author="Feranda" body="o curso me ajudou muito" />
            </ul>
        </>
    )
}

export default PostList;