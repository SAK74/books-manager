import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Can't find element with id 'root'");
}
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
//   , rootElement
// );
