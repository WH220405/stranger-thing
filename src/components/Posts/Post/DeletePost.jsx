import React from "react";
import { deletePost } from "../../../utils/data";
import NavBar from "../../navBar/NavBar";

const DeletePost = post_id => {
  function deleteHandle(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
  }

  deletePost(post_id);

  return (
    <>
      <NavBar />
      <button onClick={deleteHandle}></button>;
    </>
  );
};

export default DeletePost;
