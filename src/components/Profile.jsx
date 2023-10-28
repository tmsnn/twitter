import React, { useState } from 'react';
import "./Profile.css"

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('Username'); 
  const [userEmail, setUserEmail] = useState('example@gmail.com');
  const [userPhone, setUserPhone] = useState('+7 (777) 77 7777');
  const [tempName, setTempName] = useState(userName); 
  const [tempEmail, setTempEmail] = useState(userEmail); 
  const [tempPhone, setTempPhone] = useState(userPhone); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostIndex, setEditingPostIndex] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    name: '',
    address: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    if (isEditing) {
      setTempName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (isEditing) {
      setTempEmail(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    if (isEditing) {
      setTempPhone(e.target.value);
    }
  };

  const handleEditClick = () => {
    if (isEditing) {
     
      setUserName(tempName);
      setUserEmail(tempEmail);
      setUserPhone(tempPhone);
    } else {
      
      setTempName(userName);
      setTempEmail(userEmail);
      setTempPhone(userPhone);
    }
    setIsEditing(!isEditing);
  };

  const handleAddPost = () => {
    if (
      newPost.name &&
      newPost.address &&
      newPost.price &&
      newPost.rooms
    ) {
      setUserPosts([...userPosts, newPost]);
      setNewPost({
        name: '',
        address: '',
        image: '',
      });
    }else {
      alert("Please fill in all fields before adding a new post.");
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...userPosts];
    updatedPosts.splice(index, 1);
    setUserPosts(updatedPosts);
  };

  const handleEditPost = (index) => {
    setEditingPostIndex(index);
    const postToEdit = userPosts[index];
    setNewPost({
      name: postToEdit.name,
      address: postToEdit.address,
      price: postToEdit.price,
      rooms: postToEdit.rooms,
      image: postToEdit.image,
    });
  };

  const handleUpdatePost = (index) => {
    if (
      newPost.name &&
      newPost.address
    ) {
      const updatedPosts = [...userPosts];
      updatedPosts[index] = {
        name: newPost.name,
        address: newPost.address,
        image: newPost.image,
      };
      setUserPosts(updatedPosts);
      setEditingPostIndex(null);
      setNewPost({
        name: '',
        address: '',
        image: '',
      });
    }
  };

  return (
    <div>
      <div className="user-profile">
        <div className="profile-image-container">
          <img
            src={profileImage || '/images/defaultProfile.jpg'} 
            alt="Profile"
            className="profile-image"
          />
        </div>

      <div className="profileEdit">
        

        <div className="user-details">
          <div className="user-name">
            <label htmlFor="userName">Username:< br /></label>
            {isEditing ? (
              <input
                type="text"
                id="userName"
                value={tempName}
                onChange={handleNameChange}
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <div className="user-email">
            <label htmlFor="userEmail">Email: <br /></label>
            {isEditing ? (
              <input
                type="email"
                id="userEmail"
                value={tempEmail}
                onChange={handleEmailChange}
              />
            ) : (
              <span>{userEmail}</span>
            )}
          </div>
          <div className="user-phone">
            <label htmlFor="userPhone">Phone: <br /></label>
            {isEditing ? (
              <input
                type="tel"
                id="userPhone"
                value={tempPhone}
                onChange={handlePhoneChange}
              />
            ) : (
              <span>{userPhone}</span>
            )}
          </div>

          
        </div>
        {isEditing ? (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        ) : null}
      </div>
    </div>

    <button onClick={handleEditClick} className="editButton">
        {isEditing ? 'Сохранить' : 'Редактировать'}
    </button>

    <div className="newPost">
      <h3>Add new post</h3>
      <label>Post title</label>
      <input
          type="text"
          placeholder="Post Title"
          value={newPost.name}
          onChange={(e) =>
            setNewPost({ ...newPost, name: e.target.value })
          }
        />
        <label>Post Address</label>
    
        <input
          type="text"
          placeholder="Number of Rooms"
          value={newPost.rooms}
          onChange={(e) =>
            setNewPost({ ...newPost, rooms: e.target.value })
          
          }
          
        />
        <label>Add image for your post</label>
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewPost({ ...newPost, image: e.target.files[0] })
          }
          className="imageForPost"
        />
        <br />
        <button onClick={handleAddPost} className="addButton">Add</button>
      </div>

      <div className="user-posts">
        <h3>Your Posts:</h3>
        {userPosts.length > 0 ? (
          userPosts.map((post, index) => (
            <div key={index} className="postCard">
              <img src={URL.createObjectURL(post.image)} alt={post.name} className="imagePost"/>
              <h3>{post.name}</h3>
              <p>Price: {post.price} tg. per month</p>
              <button onClick={() => handleEditPost(index)} className="editPostButton">Edit</button>
              <button onClick={() => handleDeletePost(index)}className="deletePostButton">Delete</button>
              {editingPostIndex === index && (
                <div className="newPostDetails">
                <input
                  type="text"
                  placeholder="Post Name"
                  value={newPost.name}
                  onChange={(e) =>
                    setNewPost({ ...newPost, name: e.target.value })
                  }
                />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNewPost({ ...newPost, image: e.target.files[0] })
                    }
                    className="imageForPostt"
                  />
                  <br />
                  <button onClick={() => handleUpdatePost(index)}className="updatePostButton">Update</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Nothing Found</p>
        )}
      </div>

    </div>
  );
}

export default Profile;