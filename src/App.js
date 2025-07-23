import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        {/* NavBar */}
        <NavBar headText="TextUtils" aboutText="About TextUtils" />
        <Routes>
          {/* TextForm Component */}
          <Route exact path='/' element={
            <div className="container my-3">
              <TextForm heading="Enter text to analyze" />
            </div>
          }
          ></Route>

          {/* About Component */}
          <Route exact path='/about' element={<About />}></Route>
        </Routes>

          {/* Footer Component */}
          <Footer />  
      </>
    </Router >
  );
}

export default App;
