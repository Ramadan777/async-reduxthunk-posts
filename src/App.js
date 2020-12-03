import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadPosts } from './actions'

function App() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);


  return (
    <div>
      Posts:
      <div>
        {loading ? 'идет загрузка...' : (
          posts.map(item => {
            return (
              <div>
                {item.title}
              </div>
            )

          })
        )}
      </div>
    </div>
  );
}

export default App;
