import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Allroutes from "./Routes/Allroutes";

function App() {
  return (
    <>
      <div className="bg-body">
        <Navbar />
        <Allroutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
