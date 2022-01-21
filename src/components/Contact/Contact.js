import React from "react";
import { useState } from "react";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSend = () => {
    setSuccessMessage("Sent Successfully");
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  return (
    <div className="container px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-secondary">Contact Us</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Contact us to learn more or buy any of our courses. You will get zoom
          meeting ID and password via email.
        </p>
        {/* Contact Form Start */}
        <div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="email@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
            <label for="floatingInput">Message</label>
          </div>
          <button
            onClick={handleSend}
            class="w-100 btn btn-lg btn-primary mb-3"
            type="submit"
          >
            Send message
          </button>
          <p
            style={{ color: "green", fontWeight: "bold" }}
            class="text-start mb-5"
          >
            {successMessage}
          </p>
        </div>
        {/* Contact Form End */}
      </div>
    </div>
  );
};

export default Contact;
