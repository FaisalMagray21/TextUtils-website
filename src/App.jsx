import { Component, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
//import About from "./Components/About";
function App() {
  let [mode, setMode] = useState("dark");
  let [alert, setalert] = useState(null);

  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "Sucess");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been enabled", "Sucess");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        abouttext="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container m-8">
        <Textform heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
