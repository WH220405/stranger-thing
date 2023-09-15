import { useState } from "react";
import { updatePost } from "../../../utils/data";

const EditPost = ({ post, id }) => {
  const token = localStorage.getItem("token");

  const [updatePost, setUpdatePost] = useState({
    title: post.title,
    description: post.description,
    price: post.price,
    location: post.location,
    willDeliver: post.willDeliver,
  });

  function submitHandle(e) {
    e.preventDefault();
    const { title, description, price, location, willDeliver } = updatePost;
    const body = {
      post: {
        title,
        description,
        price,
        location,
        willDeliver,
      },
    };
  }
  updatePost({ post, id });

  const changeHandle = () => {
    
  }

  return (
    <>
      <h1>Edit Post</h1>
      <form>
        <lebal>Title:</lebal>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <lebal>Description:</lebal>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <lebal>Price:</lebal>
        <input
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <lebal>Location:</lebal>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          type="checkbox"
          label="Willing to Deliver?"
          value={willDeliver}
          onChange={() => setWillDeliver(true)}
        />
      </form>
      <button>SAVE</button>
      <p>Message regarding this post:</p>
    </>
  );
};

export default EditPost;
