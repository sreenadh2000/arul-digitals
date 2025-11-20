import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import Routing from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main>
          <Routing />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
