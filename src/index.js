import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.js";
// import Root from "../src/routes/Root"
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);