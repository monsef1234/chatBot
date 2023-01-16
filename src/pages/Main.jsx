import React from "react";
import { useSelector } from "react-redux";
import Hero from "../components/HeroSection/Hero";
import Input from "../components/MessageInput/Input";
import Messages from "../components/Messages/Messages";

const Main = () => {
  const { messageData } = useSelector((state) => state.tamra);
  return (
    <>
      {messageData.length <= 0 ? (
        <>
          <Hero />
          <Input />
        </>
      ) : (
        <>
          <Messages />
          <Input />
        </>
      )}
    </>
  );
};

export default Main;
