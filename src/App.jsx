import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Services />
    </BrowserRouter>
  );
}

export default App;
