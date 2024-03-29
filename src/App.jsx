import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ResetStyles from './Components/Styles/ResetStyles';
import Inicio from './Pages/Inicio/Inicio';
import Identificadores from './Pages/Identificadores/Identificadores';
import Acessorios from './Pages/Acessorios/Acessorios';
import Finalizacao from './Pages/Finalizacao/Finalizacao';
import Final from './Pages/Final/Final';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <ResetStyles />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/identificadores" element={<Identificadores />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/finalizacao" element={<Finalizacao />} />
        <Route path="/final" element={<Final />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
   </>
  );
}

export default App;
