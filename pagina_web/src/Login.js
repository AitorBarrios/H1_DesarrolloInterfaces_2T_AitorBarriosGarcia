import React from 'react';
import './Login.css'
function Login(){
    return(
    <div className="Login">
        <div class="form_log">
            <p>Usuario:</p>
            <input type="text"></input>
            <br></br>
            <br></br>
            <p>Contraseña:</p>
            <input type="text"></input>
            <br></br>
            <br></br>
            <button id="bt">Login</button>
        </div>
    </div>

    );
}

export default Login;