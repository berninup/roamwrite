import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutButton from "./logoutButton";

function UserHome({ setIsLoggedIn }) {
  const url = "http://localhost:3000/blog/posts";
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error finding posts: ", error);
      });
  }, []);
  return (
    <div>
      User Home
      {blogPosts &&
        blogPosts.map((post) => (
          <div key={post.id}>{post.title}</div> // Assuming post has a title property
        ))}
      <LogoutButton setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default UserHome;
