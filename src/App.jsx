import React from 'react';

import PacienteState from '../context/pacientes/pacienteState';
import ErrorState from '../context/errores/errorState';

import Layout from './components/Layout';

function App() {
  return (
    <PacienteState>
      <ErrorState>
        <Layout />
      </ErrorState>
    </PacienteState>
  )
}

export default App
