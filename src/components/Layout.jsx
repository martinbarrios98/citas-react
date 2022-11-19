import React, { useContext } from 'react';

import ErrorContext from '../../context/errores/errorContext';

import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';
import Alerta from './Alerta';

const Layout = () => {

    const { activo } = useContext(ErrorContext);

    return (  
        <div
            className="contenedor"
        >
            <Header />
            <main
                className="contenido"
            >
                { activo && <Alerta /> }
                <Formulario />
                <ListadoPacientes />
            </main>
        </div>
    );
}
 
export default Layout;