import React from 'react';
import './Home.css';
import BlogList from './BlogList';

function Home() {
  return (
    <div>
      <div className='banner-image'>
        <h1>Stay informed.</h1>
        <h2>Discover stories, advice , and expertise on a variety of topics.</h2>
      </div>
      <div className='content-div'>
        <BlogList />
        <div className='author-content'></div>
      </div>
    </div>
  );
}

export default Home;
