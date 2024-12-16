import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Textform(props) {
  const [text, settext] = useState("Enter a text");
  const handleupClick = () => {
    const a = text.toUpperCase();
    settext(a);
  };
  const handleupClick2 = () => {
    const b = text.toLowerCase();
    settext(b);
  };

  const handleupClick3 = () => {
    settext("");
  };

  const handleonChange = (event) => {
    settext(event.target.value);
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Entertext"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleonChange}
          style={{ backgroundColor: props.mode === `dark` ? `grey` : `white` }}
        ></textarea>
        <label htmlFor="mybox"> </label>

        <button className="btn btn-primary mx-2 my-2" onClick={handleupClick}>
          UpperCase Letter
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupClick2}>
          Lowercase Letter
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupClick3}>
          Cleartext
        </button>
        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p> {0.008 * text.split(" ").length} minutes read </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};
