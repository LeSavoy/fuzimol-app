import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Mobile from "./components/Mobile";
import Testominials from "./components/Testominials";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Services />
      <Mobile />
      <Testominials />
      <About />
    </BrowserRouter>
  );
}

export default App;
