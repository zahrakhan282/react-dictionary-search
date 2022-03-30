import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo img-fluid shadow mt-5"
            alt="logo"
          />
        </header>
        <main className="Dictionary">
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/zahrakhan282"
              target="_blank"
              rel="noreferrer"
            >
              Zahra Khan
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/zahrakhan282/react-dictionary-search"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
