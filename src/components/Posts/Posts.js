import NavBar from "../navBar/NavBar";
import { useState, useEffect } from "react";
import { fetchPosts } from "../../utils/data";
import SearchPosts from "./SearchPosts";
import classes from "./Posts.module.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Posts() {
  const [getPost, setGetPost] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    const allPosts = async () => {
      try {
        const response = await fetchPosts();
        console.log(response.data.posts);
        setGetPost(response.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    allPosts();
  }, []);

  const matchingPosts = (posts, text) => {
    if (text.length > 0) {
      text = text.toLowerCase();
    }

    const username = posts.title.toLowerCase();
    const usernameBool = username.includes(text);
    return usernameBool;
  };

  const filterPosts = getPost.filter(e => {
    //matchingPosts(e, searchBar);
    let t;
    let p = e.title.toLowerCase();
    if (searchBar.length > 0) {
      t = searchBar.toLowerCase();
      //p = e.title.toLowerCase();
    }
    console.log(t);
    return p.includes(t);
  });

  const postsToDisplay = searchBar.length > 0 ? filterPosts : getPost;
  console.log(postsToDisplay);
  return (
    <div>
      <NavBar />

      <div className={classes.searchBar}>
        <SearchPosts searchBar={searchBar} setSearchBar={setSearchBar} />
        <Link to={"/addpost"}>Add Post</Link>
      </div>
      {postsToDisplay.map((post, index) => (
        <Card className={classes.container} key={index}>
          <a onClick={e => setGetPost(e.target.value)}>
            <h5>{post.title}</h5>
          </a>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>{post.location}</p>
          <Link to={`/sendmessage/${post._id}`}>Send Message</Link>
        </Card>
      ))}
    </div>
  );
}

export default Posts;
