import * as React from 'react';
// import CheckIcon from '@mui/icons-material/Check';
import './App.css'
import Header from './compunet/header';
import Bodytop from './compunet/bodytop';
import { Routes, Route } from "react-router-dom";
import Pricing from './pricing/pricing';
import Demo from './demo/Demo';
// import pricing from './pricing/';

function App() {

  return (
    <>
     
          <Header />
          <Routes>
            <Route  path="/" element={<Bodytop />}></Route>
            <Route  path="/pricing" element={<Pricing />}></Route>
            <Route  path="/Demo" element={<Demo />}></Route>
          </Routes>
       
    </>
  )
}

export default App
