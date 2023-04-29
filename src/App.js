import "./App.css";
import "./Textform.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme("Disable Dark mode");
      document.body.style.backgroundColor = "#071a35";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setTheme("Enable Dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          theme={theme}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div>
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
          
          <Route exact path="/" element={<Textform
                heading="Enter the text here."
                mode={mode}
                showAlert={showAlert}
              />}>
          
          </Route>
          </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
