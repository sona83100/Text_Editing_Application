import { useState } from "react";
import "./App.css";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="📄 TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Convert Text Cases" mode={mode} />
      </div>

    </>
  );
}

export default App;

