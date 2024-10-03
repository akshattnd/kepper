import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
export default function Header() {
  return (
    <>
      <header className="bg-yellow-400 p-3 mb-3 font-serif sm:p-5 sm:mb-5 w-secreen">
        <h1 className=" flex text-white font-extrabold text-3xl sm:text-4xl">
          <HighlightIcon style={{ fontSize: "35px" }} />
          kepper
        </h1>
      </header>
    </>
  );
}
