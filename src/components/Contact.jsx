import "./Contact.css";
import map from "../images/location.png";
import { useState } from "react";

export const Contact = () => {
  const emailAdress = "iuliia.erbis@gmail.com";
  const telegramUsername = "@UserjuliaErb";
  const phoneNumber = "+49 (176) 287 229 56";

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const nameHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const messageHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const sendHandler = async (event) => {
    event.preventDefault();
    const formDataObj = {
      nameInput,
      emailInput,
      messageInput,
    };

    try {
      const response = await fetch("https://upset-seal-belt.cyclic.app", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formDataObj),
      });
      const data = await response.json();
      console.log(data);
      setEmailSend(true);
    } catch (error) {
      console.log(error);
      setEmailSend(false);
    }
  };
  return (
    <section className="contact-container">
      <div className="info-container">
        <h1>Get In Touch</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          reprehenderit at minus. Architecto quisquam at deleniti!
        </p>
      </div>
      {emailSend ? (
        <p>Thank You!</p> // kann man in separate componente auslagern
      ) : (
        <form onSubmit={sendHandler}>
          <div className="container">
            <h2>Leave a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name* </label>
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                value={nameInput}
                onChange={nameHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                value={emailInput}
                onChange={emailHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="10"
                placeholder=" "
                value={messageInput}
                onChange={messageHandler}
              ></textarea>
            </div>
            <div className="submit-btn">
              <button type="submit">
                <p> Send Message</p>
                <div className="icon-btn">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="card-container">
        <div className="map">
          <img src={map} alt="map" />
        </div>

        <div className="card-group">
          <div className="card-01">
            <p>Country:</p>
            <p>City:</p>
            <p>Street:</p>
          </div>
          <div className="card-02">
            <p>Germany</p>
            <p>41812 Erkelenz</p>
            <p>Hoogenhof 49A</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="envelop">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="card-group">
          <div className="card-01">
            <p>Email:</p>
            <p>Telegram:</p>
          </div>
          <div className="card-02">
            <a href={`mailto:${emailAdress}`}>{emailAdress}</a>
            <a href={`tel:${telegramUsername}`}>{telegramUsername}</a>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="phone">
          <i className="fa-solid fa-mobile"></i>
        </div>
        <div className="card-group">
          <div className="card-01">
            <p>Mobile:</p>
          </div>
          <div className="card-02">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
