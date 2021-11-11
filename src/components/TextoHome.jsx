import React from "react";
import check from "../components/images/check.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const TextoHome = () => {
    return(
        <div class="col-sm-auto col-md-7 me-5 pt-4">
                        <div class="justify-content-start ms-5 me-4">
                            <p class="titulo-home fade-in">Bem vindo(a) a Pet Shop!</p>
                            <h1 class="subtitulo-home mb-4 fade-in">Todo o cuidado para seu bichinho de estimação</h1>
                            <p class="texto-home fade-in">A Pet Shop proporciona serviços de alta qualidade para seu pet, de
                                qualquer raça e
                                idade.
                            </p>
                            <div class="left-animation">
                                <div class="row align-items-start mt-4 d-flex align-items-center">
                                    <img class="img-check col-auto" src={check} alt=""></img>
                                    <p class="col col-md-6 texto-check">Serviço personalizado com consultas gratuitas</p>
                                </div>
                                <div class="row align-items-start mt-4 d-flex align-items-center">
                                    <img class="img-check col-auto" src={check} alt=""></img>
                                    <p class="col col-md-6 texto-check">100% de satisfação garantida</p>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default TextoHome