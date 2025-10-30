import Post from "./Post"
import classes from './';
import NewPost from "./NewPost";

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Daniel" body="React.js é maravilhoso" />
                <Post author="Feranda" body="o curso me ajudou muito" />
            </ul>
        </>
    )
}

export default PostList;