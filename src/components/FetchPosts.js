import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const dispatch = useDispatch();

	const posts = useSelector(state => state.posts.fetchPosts);

  const isLoading = useSelector(state => state.app.loading)


 if(isLoading){
    return (
      <div className='spinner-border text-danger' role='status'>
        <span className='sr-only'> loading...</span>
      </div>
    )
 } 

	if (!posts.length) {
		return (
			<button
				onClick={() => {
					dispatch(fetchPosts());
				}}
				className="btn btn-primary"
			>
				Загрузить
			</button>
		);
	}

	return posts.map(post => <Post key={post.id} post={post} />);
};
