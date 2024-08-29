import ReactDOM from "react-dom/client";
import App from './App';
import { Appprovider } from "./context/productContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Appprovider>
      <App />
  </Appprovider>
  
 );