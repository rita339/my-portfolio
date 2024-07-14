import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import { ContactItem } from "./ContactItem.jsx";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [emailSend, setEmailSend] = useState(false);
  const formRef = useRef();
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {}, [emailSend]);

  const sendHandler = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJSID,
        import.meta.env.VITE_TEMPLATEID,
        formRef.current,
        import.meta.env.VITE_EMAILJSPUBLICKEY
      )
      .then((result) => result.text === "OK" && setEmailSend(true));
  };

  return (
    <section className="Contact">
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
              Have questions or want to discuss a project? Feel free to reach
              out to me using the form below, via email or just call me. I'm
              always eager to connect and explore new opportunities for
              collaboration.
            </p>
          </div>

          <div className="contact-wrapper">
            <form ref={formRef} onSubmit={sendHandler}>
              <h2>Leave a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Name* </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="from_name"
                  minLength={5}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email_id" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="30"
                  rows="10"
                  name="message"
                  minLength={10}
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
            </form>
            <ContactItem />
          </div>
        </>
      )}
    </section>
  );
};
