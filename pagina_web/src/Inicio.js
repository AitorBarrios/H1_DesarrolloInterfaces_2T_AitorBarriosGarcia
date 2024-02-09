import React from 'react';
import './Inicio.css'
import fAura from './Images/aura.jpeg'
import fInsta from './Images/Instagram.png'
import fFacebook from './Images/Facebook.png'
import fTitktok from './Images/TikTok.png'
function Inicio() {
    return (
        <div className="Inicio">
            <div class="row">
                <div class="col-8">
                    <div id="txt1">
                        <p>Tras años de pasión de dos niños pequeños por los animales en un simple videojuego, 
                            hasta sus casas. La Clínica Veterinaria: NintenDogCats consta de amplios servicios 
                            y equipamiento para el tratamiento de su máscota: Traumatología, Dermatología, Oftalmología, 
                            Nutrición ... Abriendole así las puertas a cualquier tipo de animal doméstico que necesite ser
                            tratado o una revisión para comprobar que esta en perfectas condiciones. Además para las
                            familias más preocupadas, se cuenta con un sistema de mensajería para comprobar como está
                            llendo la evolución del pequeño de la casa. Contacténos para cualquier tipo de información
                            através de las correspondientes lineas:</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="txt2">
                        <p>Contacto:</p>
                        <p>+34 111 111 112</p>
                        <p>contacto@cvetndc.com</p>
                        <p> Calle Falsa 123, Ciudad Verdadera</p>
                    </div>
                </div>
                <div class="col-4">
                    <img src={fAura} id="aura"></img>
                    <br></br>
                    <img src={fInsta} id="redes"></img>
                    <p>@vet_dogcats</p>
                    <img src={fFacebook} id="redes"></img>
                    <p>@vet_dogcats</p>
                    <img src={fTitktok} id="redes"></img>
                    <p>@auriidog13</p>
                </div>
            </div>
        </div>

    );
}

export default Inicio;