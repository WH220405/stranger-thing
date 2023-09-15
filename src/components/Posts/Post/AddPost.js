import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makePost } from "../../../utils/data";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classes from "./AddPost.module.css";
import NavBar from "../../navBar/NavBar";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const post = {
      title,
      description,
      price,
      location,
      willDeliver,
    };
    console.log(post);
    makePost(token, post);
    navigate("/posts");
  };

  // useEffect(() => {
  //   makePost();
  //   navigate("/posts");
  // }, []);

  return (
    <>
      <NavBar />
      <h1 className={classes.h1}> Add New Post</h1>
      <Form className={classes.control} onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} md="4">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="5">
          <Form.Check
            required
            type="checkbox"
            label="Willing to Deliver?"
            value={willDeliver}
            onChange={() => setWillDeliver(true)}
          />
        </Form.Group>

        <Button type="submit">CREATE</Button>
      </Form>
    </>
  );
};

export default AddPost;

// after clicked create will linl to posts page
