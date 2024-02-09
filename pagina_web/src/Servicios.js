import React from 'react';
import './Servicios.css'
import fHueso from './Images/hueso.png'
import fLupa from './Images/perro (1).png'
import fComida from './Images/plato-de-perro.png'
import fOjo from './Images/oftalmologia.png'
import fHospital from './Images/veterinario.png'
import fAura from './Images/aura2.jpeg'
function Servicios() {
    return (
        <div className="Servicios">
            <div class="row">
                <div class="col-7">
                    <div class="formulario">
                        <p>Nombre:</p>
                        <input type="text" id="t1"></input>
                        <p>Animal:</p>
                        <input type="text" id="t1"></input>
                        <p>Email:</p>
                        <input type="text" id="t1"></input>
                        <p>Número de Teléfono:</p>
                        <input type="text" id="t1"></input>
                        <p>Servicio:</p>
                        <input type="text" id="t1"></input>
                        <p>Consulta:</p>
                        <input type="text" id="t2"></input>
                    </div>
                    <div class="foto">
                        <p>Suba su foto aquí:</p>
                        <img src={fAura} id="aura2"></img>
                        <button id="bt">Pedir Consulta</button>
                    </div>
                </div>
                <div class="col-5">
                    <div></div>
                    <img src={fHueso} id="serv1"/>
                    <p id="serv2">Traumatología</p>
                    <img src={fLupa} id="serv1"/>
                    <p id="serv2">Dermatología</p>
                    <img src={fComida} id="serv1"/>
                    <p id="serv2">Nutrición</p>
                    <img src={fOjo} id="serv1"/>
                    <p id="serv2">Oftalmología</p>
                    <img src={fHospital} id="serv1"/>
                    <p id="serv2">Hospitalización</p>
                </div>
            </div>
        </div>

    );
}

export default Servicios;