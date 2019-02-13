import React from "react";

const Contact = () => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  var navStyle = {
    margin: "20px",
    fontSize: "18px"
  };

  const submitForm = e => {
    e.preventDefault();
    alert("Mischief Managed. FYI - what you typed didn't go anywhere.");
  };

  return (
    <div>
      <h1>Send an Owl?</h1>
      <form onSubmit={e => submitForm(e)}>
        <textarea placeholder="I solemnly swear I am up to no good." />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
