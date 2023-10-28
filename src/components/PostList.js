import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PostList.css";

function PostList({ posts }) {
  const [searchText, setSearchText] = useState('');



  const handleSearch = () => {
    const searchWords = searchText.trim().toLowerCase().split(' ');

    const filteredPosts = posts.filter((post) => {

      const searchMatch = searchWords.every((word) =>
        post.name.toLowerCase().includes(word) ||
        post.address.toLowerCase().includes(word)
      );

      return searchMatch;
    });

    // Теперь filteredApartments содержит результаты фильтрации.
  };

  const filteredPosts = posts.filter((post) => {

    const searchWords = searchText.trim().toLowerCase().split(' ');
    const searchMatch = searchWords.every((word) =>
      post.name.toLowerCase().includes(word) ||
      post.address.toLowerCase().includes(word)
    );

    return searchMatch;
  });

  return (
    <div className="apartment-list">
      <h2>List of posts for rent</h2>
      
      <br />
      <label>
        <input
          type="text"
          value={searchText}
          placeholder='Search by keywords for addresses or names'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>


      <div className="post-cards">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="apartment-card">
              <Link to={`/post/${post.id}`}>
                <img src={post.image} alt={post.name} />
              </Link>
              <h3>{post.name}</h3>
              <p>Price: {post.price} tg. per month</p>
              <Link to={`/post/${post.id}`}>More</Link>
            </div>
          ))
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </div>
  );
}

export default PostList;