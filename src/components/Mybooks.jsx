import { useState } from "react";
import "./Mybooks.css";


// eslint-disable-next-line react/prop-types
export const Mybooks = ({ list, handleDeleteBook }) => {
  const [listOpen, setListOpen] = useState(false);

  return listOpen ? (
    <div className="myBooks" style={{ display: listOpen ? "block" : "none" }}>
      <h2>Lista de lectura</h2>
      <span onClick={() => setListOpen(false)}>Cerrar</span>
      <ul className="ListBook">
        {/* eslint-disable-next-line react/prop-types */}
        {list.map(({ book }) => {
          const { cover, title, ISBN } = book;
          return (
            <li key={crypto.randomUUID()} className="ListElement">
              <img src={cover}  alt={title} />
              <button id={ISBN} onClick={handleDeleteBook}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <button className="Open" onClick={() => setListOpen(true)}>
      Abrir mi lista
    </button>
  );
};
