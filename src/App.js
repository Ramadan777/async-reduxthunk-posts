import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadPosts } from './actions'
import './App.css'

function App() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);


  return (
    <div className="main">
      Список сообщений:
      <div className="posts">
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
