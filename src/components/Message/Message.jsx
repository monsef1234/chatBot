import { motion } from "framer-motion";
import React from "react";
import "./Message.scss";
const messageVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const botVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};
const Message = ({ data }) => {
  return (
    <>
      <motion.div
        variants={messageVariant}
        initial={"hidden"}
        animate={"visible"}
        className="message"
      >
        {data.messageUser}
      </motion.div>
      {data.messageLoading ? (
        <motion.div
          variants={botVariant}
          initial={"hidden"}
          animate={"visible"}
          className="message bot"
        >
          <div className="messageContent">
            <h3>TAMRA</h3>

            <div className="loader-dots">Loading</div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={botVariant}
          initial={"hidden"}
          animate={"visible"}
          className="message bot"
        >
          <div className="messageContent">
            <h3>TAMRA</h3>
            <p>{data.botMessage}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Message;
