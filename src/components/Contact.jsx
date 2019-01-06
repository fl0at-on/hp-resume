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

  return (
    <div>
      <h1>Send an Owl?</h1>
      <form>
        <textarea />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
