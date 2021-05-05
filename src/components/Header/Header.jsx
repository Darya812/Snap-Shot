import React, { useState } from "react";
import SearchIcon from "../SearchIcon/SearchIcon";
import styles from "./Header.module.css";

export const Header = ({ setRequest }) => {
  const [input, setInput] = useState("");

  const sendRequest = () => {
    setRequest(input);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendRequest();
    }
  };

  return (
    <div>
      <h1 className={styles.nameApp}>SnapShot</h1>
      <div className={styles.searchForm}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className={styles.input}
          placeholder="Search..."
        />
        <button onClick={sendRequest} className={styles.button}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
