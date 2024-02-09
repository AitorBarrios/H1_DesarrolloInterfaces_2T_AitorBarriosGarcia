import React from 'react';
import './Contacto.css'
import fMapa from './Images/mapa.png'
function Contacto(){
    return(
    <div className="Contacto">
        <div class="row">
                <div class="col-9">
                          <p><b><u>Nos encontramos al lado del ayuntamiento de la ciudad:</u></b></p>
                        <img src={fMapa} id="mapa"></img>
                </div>
                <div class="col-3">
                    <p>Contacto:</p>
                    <p>+34 111 111 112</p>
                    <br></br>
                    <p>contacto@cvetndc.com</p>
                    <br></br>
                    <p>Calle Falsa 123, Ciudad Verdadera</p>
                    <br></br>
                    <p>A 500m, del Ayuntamiento</p>
                </div>
            </div>
    </div>

    );
}

export default Contacto;