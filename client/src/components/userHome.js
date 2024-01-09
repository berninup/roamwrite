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
      <div className="columns">
        <div className="column greenColumn"></div>
        <div className="column is-two-thirds">
          {blogPosts &&
            blogPosts.map((post) => (
              <div key={post.id} className="box block">
                <table>
                  <thead>
                    <tr>
                    <th>{post.title}</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>{post.content}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            ))}
        </div>
        <div className="column">
          
        </div>
      </div>
    </div>
  );
}

export default UserHome;
