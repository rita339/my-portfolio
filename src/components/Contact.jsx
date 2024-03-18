import "./Contact.css";
import { useState } from "react";
import { ContactItem } from "./ContactItem.jsx";

export const Contact = () => {
  const [nameInput, setNameInput] = useState(
    localStorage.getItem("name") || ""
  ); // localStorage stellt sicher, dass die zuletzt eingegebenen Daten angezeigt werden, wenn der Benutzer die Seite neu lädt.
  const [emailInput, setEmailInput] = useState(
    localStorage.getItem("email") || ""
  );
  const [messageInput, setMessageInput] = useState(
    localStorage.getItem("message") || ""
  );

  const [emailSend, setEmailSend] = useState(false);
  // const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const nameHandler = (event) => {
    setNameInput(event.target.value);
    // setIsNameValid(true);
  };

  const emailHandler = (event) => {
    setEmailInput(event.target.value);
    setIsEmailValid(true);
  };

  const messageHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const sendHandler = async (event) => {
    event.preventDefault();
    // if (nameInput.trim() === "") {
    //   setIsNameValid(false);
    //   return;
    // }
    // setIsNameValid(true);
    // if (emailInput.trim() === "") {
    //   setIsEmailValid(false);
    //   return;
    // }
    const formDataObj = {
      nameInput,
      emailInput,
      messageInput,
    };

    // const formBody = Object.keys(body).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key])).join('&');

    // Funktion zum Umwandeln von Objekten in das URL-kodierte Format
    const encodeFormData = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
    // If you were using fetch in a browser, you could create URLSearchParams and use that as the request body.
    const formData = new encodeFormData(formDataObj);

    try {
      if (nameInput && emailInput && messageInput) {
        localStorage.setItem("name", nameInput);
        localStorage.setItem("email", emailInput);
        localStorage.setItem("message", messageInput);
      }
      const response = await fetch("https://localhost:4000/contact", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded", // das URL-kodierte Format
        },
        // body: JSON.stringify(formDataObj),
        body: formData, // das URL-kodierte Format
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
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
      {emailSend ? (
        <p className="answer">
          <i className="fa-solid fa-circle-check"></i>
          Thank You!
        </p>
      ) : (
        <>
          <div className="info-container">
            <h1>Get In Touch</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              reprehenderit at minus. Architecto quisquam at deleniti!
            </p>
          </div>

          <form onSubmit={sendHandler}>
            <div className="container">
              <h2>Leave a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Name* </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={nameInput}
                  onChange={nameHandler}
                />
              </div>
              <div className={`form-group ${!isEmailValid ? "invalid" : ""}`}>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  required
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
                  value={messageInput}
                  onChange={messageHandler}
                ></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit">
                  Send Message
                  <div className="icon-btn">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </button>
              </div>
            </div>
          </form>
          <ContactItem />
        </>
      )}
    </section>
  );
};
