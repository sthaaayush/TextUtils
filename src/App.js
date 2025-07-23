import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <NavBar headText="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
