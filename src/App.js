
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Service from "./components/pages/Service";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path ='/' element={<Home/>}></Route>
      <Route path ='/about' element={<About/>}></Route>
      <Route path ='/service' element={<Service/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
