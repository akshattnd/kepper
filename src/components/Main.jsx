import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Note from "./Note";
import Footer from "./Footer";
export default function Main() {
  const [notes, setNotes] = useState([]);
  function handleSubmit(input) {
    const newNotes = [...notes, input];
    return setNotes(newNotes);
  }
  function handleDelete(id) {
    setNotes(
      notes.filter((_, i) => {
        return i != id;
      })
    );
  }

  return (
    <>
      <Header />
      <Form add={handleSubmit} />
      <div className="container p-5 my-2 w-screen flex flex-wrap  ">
        {notes.map((note, i) => {
          return (
            <>
              <Note
                title={note.title}
                note={note.note}
                key={i}
                id={i}
                delete={handleDelete}
              />
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
