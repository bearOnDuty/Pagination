import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/post';
import Pagination from './components/pagination';

import './style/style.css';

function App() {
  const firstPage = 1;
  const postsPerpage = 10;
  const [posts, setPosts] = useState([]);
  const [currentPage,setCurrentPage] = useState(firstPage);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const fetchPosts = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("res", res);
        setPosts(res.data);
        setLoading(false);
      };
      fetchPosts();
    }, []
  );

  // get posts of the active page
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change active page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div className='App'>
      <div className='container'>
        <h1>My Page</h1>
        <Post 
          posts={currentPosts}
          loading={loading}
        />
        <Pagination  
          postsPerpage={postsPerpage}
          totalPosts={posts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
