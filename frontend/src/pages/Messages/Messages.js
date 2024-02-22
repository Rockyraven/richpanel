import React, { useState, useEffect } from "react";
import "./Messages.css";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages, "messagessss...");

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch(
        "https://richpanel-backend-wscu.onrender.com/messagess"
      );
      const data = await res.json();
      setMessages(data);
    };
    getMessages();
  }, []);
  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> Facebook Pages
        </div>
        <div className="msger-header-options">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
      </header>

      <main className="msger-chat">
        <div className="msg left-msg">
          <div
            className="msg-img"
            // style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">rocky</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
            </div>
          </div>
        </div>
        {messages?.map((item) => (
          <div className="msg right-msg" key={item?._id}>
            <div
              className="msg-img"
              // style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">
                  {" "}
                  {new Date(item?.createdAt)?.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </div>
              </div>

              <div className="msg-text">{item.message}</div>
            </div>
          </div>
        ))}
      </main>

      <form className="msger-inputarea">
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Messages;
