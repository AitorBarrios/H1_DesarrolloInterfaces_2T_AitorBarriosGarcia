import React from 'react';
import './Registro.css'
function Registro() {
    return (
        <div className="Registro">
            <div class="form">
                <p>Nombre:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>Usuario:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>Contraseña:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>Confirmar Contraseña:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>Email:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <p>Código Animal (Se proporciona en clínica):</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <button id="bt">Registro</button>
            </div>
        </div>

    );
}

export default Registro;