import { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleOnSubmit}>
        <label>Cari Foto: </label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
