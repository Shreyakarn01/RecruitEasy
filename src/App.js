import './App.css';
import Advantages from './Components/Advantages';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <hr className="custom"/>
    <Advantages/>
    <hr/>
    <Reviews/>
    <Footer/>
    
    </>
  );
}

export default App;
