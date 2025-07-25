import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert'
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState("brightness-high");
  const [alerts, setAlerts] = useState(null);

  //Dark Mode
  const changeStyle = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "gray";
      setTheme("dark");
      setIcon("moon-stars");
      showAlerts("Dark Mode","success");;
    } else {
      document.body.style.backgroundColor = "white";
      setTheme("light");
      setIcon("brightness-high")
      showAlerts("Light Mode","success");

    }
  };

  //Alerts
  const showAlerts = (message, type) => {
    setAlerts(
      {
        message: message,
        type: type
      });

    setTimeout(() => {
      setAlerts(null);
    }, 5000);
  }

  return (
    <Router>
      <>
        {/* NavBar */}
        <NavBar headText="TextUtils" aboutText="About TextUtils" changeStyle={changeStyle} icon={icon} />
        <Alert alerts={alerts} />
        <Routes>
          {/* TextForm Component */}
          <Route exact path='/' element={
            <div className="container my-3">
              <TextForm heading="Enter text to analyze" mode={theme} alerts={showAlerts} />
            </div>
          }
          ></Route>

          {/* About Component */}
          <Route exact path='/about' element={<About mode={theme} />}></Route>
        </Routes>

        {/* Footer Component */}
        <Footer />
      </>
    </Router >
  );
}

export default App;
