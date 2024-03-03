import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetStyles from './Components/Styles/ResetStyles';
import Inicio from './Pages/Inicio/Inicio';
import Identificadores from './Pages/Identificadores/Identificadores';
import Acessorios from './Pages/Acessorios/Acessorios';
import Finalizacao from './Pages/Finalizacao/Finalizacao';

function App() {
  return (
    <>
      {/* <Router> */}
      <ResetStyles />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/identificadores" element={<Identificadores />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/finalizacao" element={<Finalizacao />} />
      </Routes>
     {/* </Router > */}
   </>
  );
}

export default App;
