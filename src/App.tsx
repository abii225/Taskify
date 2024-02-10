import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import loader from "../src/assets/loader.gif";
import Allroutes from "./Routes/Allroutes";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerID = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // window.addEventListener("load", handleLoad); // to set false loading when page is loading completed...

    return () => {
      clearTimeout(timerID);
      // window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <>
      <div className="bg-body">
        {loading && (
          <div
            key="preloader"
            className="w-[100%] h-[100vh] bg-item2  flex items-center justify-center align-middle"
          >
            <img className="block  " src={loader} alt="" />
          </div>
        )}
        {!loading && <Navbar />}
        {!loading && <Allroutes />}
        {!loading && <Footer />}
      </div>
    </>
  );
}

export default App;
