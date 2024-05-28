import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
