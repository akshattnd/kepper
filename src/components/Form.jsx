import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
export default function Form(props) {
  const [click, setClick] = useState(false);
  const [input, setInput] = useState({ title: "", note: "" });
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name == "title") {
      setInput((prev) => {
        return { title: value, note: prev.note };
      });
    } else {
      setInput((prev) => {
        return { title: prev.title, note: value };
      });
    }
  }

  function handleClick() {
    setClick(true);
  }
  const customStyle = {
    backgroundColor: "#F5BA13",
    cursor: "pointer",
    color: " white",
    position: "absolute",
    right: "22px",
    bottom: "-18px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  };
  return (
    <>
      <form className="relative max-w-60 sm:max-w-md mx-auto shadow-xl border rounded-lg border-gray-400 m-3 p-2 font-serif ">
        <input
          onClick={handleClick}
          type="text"
          name="title"
          aria-describedby="helper-text-explanation"
          className=" text-xl outline-none block w-full p-2.5 text-gray-900"
          placeholder="Title"
          onChange={handleInput}
          value={input.title}
        />
        {click && (
          <>
            <textarea
              name="note"
              rows="3"
              className="block p-2.5 w-full  outline-none text-xl resize-none text-gray-900"
              placeholder="Take a note..."
              spellCheck="false"
              onChange={handleInput}
              value={input.note}
            ></textarea>
            <Fab
              aria-label="add"
              size="small"
              style={customStyle}
              onClick={() => props.add(input)}
            >
              <AddIcon />
            </Fab>
          </>
        )}
      </form>
    </>
  );
}
