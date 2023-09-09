import { useState } from "react";
import { postMessage } from "../../../utils/data";
import { useParams } from "react-router-dom";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const handlerSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    postMessage(token, message, id);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <textarea
          placeholder="Enter your message"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SendMessage;
