import React, { useState } from "react";
import { analyze } from "../utils";
import ChatMessage from "./ChatMessage";
import { IoMdClose } from "react-icons/io";
import "./Chatbot.css"; // Import CSS file for styling

const Chatbot = () => {
  const initialMessage = "Hi, Welcome to QuickJobs Chat , May I know your name?";
  
  const [messages, setMessages] = useState([
    {
      message: initialMessage,
    },
  ]);

  const [text, setText] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    if (messages.length > 1) {
      setMessages([{ message: initialMessage }]);
    }
    setIsChatOpen(!isChatOpen);
  };

  const onSend = () => {
    // If the user sends "clear", clear the chat body
    if (text.trim().toLowerCase() === "clear") {
      setMessages([{ message: initialMessage }]);
      setText("");
      return;
    }

    let list = [...messages, { message: text, user: true }];

    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: `How can I help you?`,
        },
      ];
    }
    setMessages(list);
    setText("");
  };

  return (
    <div>
      {!isChatOpen && (
        <div className="chat-bubble" onClick={toggleChat}>
          <img
            src="./icons8-chatbot.gif"
            alt="Chat bubble"
            width={80}
            height={80}
          />
        </div>
      )}
      {isChatOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <img
              src="./icons8-chatbot.gif"
              alt="logo"
              width={40}
              height={40}
            />
            <h2 className=""> &nbsp;Chat with QuickJobs</h2>
            <div className="close-btn" onClick={toggleChat}>
              <IoMdClose />
            </div>
          </div>

          <div className="chat-messages">
            {messages.length > 0 &&
              messages.map((data, index) => {
                return (
                  <div key={index}>
                    <ChatMessage {...data} />
                  </div>
                );
              })}
          </div>

          <div className="chat-input">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message here..."
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button className="btn btn-primary" onClick={onSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
