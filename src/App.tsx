import './App.css'
// import Header from './compunet/Header';
import Bodytop from './compunet/Bodytop';
import { Routes, Route } from "react-router-dom";
import Pricing from './pricing/Pricing';
import Demo from './demo/Demo';
import Projects from './compunet/Projects/Projects';

function App() {

  return (
    <>
     
          <Routes>
            <Route  path="/" element={<Bodytop />}></Route>
            <Route  path="/pricing" element={<Pricing />}></Route>
            <Route  path="/Demo" element={<Demo />}></Route>
            <Route  path="/Projects" element={<Projects />}></Route>
          </Routes>
       
    </>
  )
}

export default App
