import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../redux/tamraSlice";
import Container from "../Container/Container";
import "./Input.scss";
const Input = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (eo) => {
    eo.preventDefault();
    if (userQuestion === "") {
      return;
    }
    dispatch(addQuestion(userQuestion));
    setUserQuestion("");
  };

  return (
    <section className="inputSection">
      <Container>
        <div className="inputContent">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="ask anything..."
              autoComplete="off"
              value={userQuestion}
              onChange={(eo) => setUserQuestion(eo.target.value)}
            />
            <button type="submit">
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Input;
