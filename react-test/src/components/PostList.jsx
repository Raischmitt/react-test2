import { useState } from 'react';

import Post from "./Post"
import classes from './';
import NewPost from "./NewPost";
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
    return (
        <>
            {isPosting ? (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} />
                </Modal>
            ) : null}
            <ul className={classes.posts}>
                <Post author="Feranda" body="o curso me ajudou muito" />
            </ul>
        </>
    )
}

export default PostList;