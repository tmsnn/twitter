import { Link } from 'react-router-dom';
import './Home.css'
import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { fetchPosts, fetchPostById } from '../mockApi';

function Home() {
  return (
    <div className="home-page">
      <div className="welcome">
        <div className="welcome-block">
          <h1>Welcome to our website!</h1>
          <p >
            Have a nice day!
          </p>
        </div>
      </div>
      {/* <div className="image-container">
        <img src="/images/welcomeHome.jpg" alt="Изображение дома" style={{ width: '1000px' }} />
      </div> */}
    </div>
  );
}

export default Home;
