import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
    background-color: #f1f3f6;
    color: #6c757d;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #6c757d;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .page-item .page-link {
    z-index: 3;
    background-color: #f1f3f6;
    color: #6c757d;
    border: none;
    font-weight: bold;
    margin-left: 5px;

    border-radius: 50%;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
		cursor: pointer;
    
    &:active {
      background-color: #f1f3f6;
    }

    &:hover {
      box-shadow: -2px -2px 5px var(--color-white), 2px 2px 5px var(--color-shadow);
    }
    
    transition: box-shadow 399ms ease-in-out;
  }

  .page-item.active .page-link {
    background-color: transparent;
    color: #6c757d;
    border: solid 1px #6c757d;
  }

  .current-page {
     margin-bottom: 30px;
  }
`;
