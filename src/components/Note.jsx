import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import { alignProperty } from "@mui/material/styles/cssUtils";
export default function Note(props) {
  const customStyle = {
    position: "relative",
    left: "10rem",
    top: ".5rem",
    backgroundColor: "#F5BA13",
    cursor: "pointer",
    color: " white",
    align: "right",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    margin: "5px",
  };
  return (
    <>
      <div className="container inline-block relative w-60 rounded-lg p-3 m-8 shadow-sm max-h-max  bg-slate-300">
        <h2 className="break-all font-bold m-1">{props.title}</h2>
        <p className="  m-1 font-semibold break-all ">{props.note}</p>
        <Fab
          aria-label="delete"
          size="small"
          style={customStyle}
          onClick={() => {
            props.delete(props.id);
          }}
        >
          <DeleteIcon />
        </Fab>
      </div>
    </>
  );
}
