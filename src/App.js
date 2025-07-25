import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("light");

  const changeStyle = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "gray";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setTheme("light");
    }
  };

  return (
    <Router>
      <>
        {/* NavBar */}
        <NavBar headText="TextUtils" aboutText="About TextUtils" changeStyle={changeStyle} />
        <Routes>
          {/* TextForm Component */}
          <Route exact path='/' element={
            <div className="container my-3">
              <TextForm heading="Enter text to analyze" mode={theme} />
            </div>
          }
          ></Route>

          {/* About Component */}
          <Route exact path='/about' element={<About  mode={theme}/>}></Route>
        </Routes>

        {/* Footer Component */}
        <Footer />
      </>
    </Router >
  );
}

export default App;
