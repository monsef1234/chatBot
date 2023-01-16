import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import Message from "../Message/Message";
import "./Messages.scss";
const Messages = () => {
  const messageScroll = useRef();
  const { messageData } = useSelector((state) => state.tamra);
  useEffect(() => {
    messageScroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageData]);
  return (
    <section className="messagesSection">
      <Container>
        <div className="messagesContent">
          {messageData.map((msg) => {
            return <Message key={msg.id} data={msg} />;
          })}
        </div>
        <div className="scroll" ref={messageScroll} />
      </Container>
    </section>
  );
};

export default Messages;
