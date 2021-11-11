import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logotipo from "../components/images/logotipo.png";
import styled from "styled-components";

const Logo = styled.img`
    max-height: 10rem;
    max-width: 12rem;
    margin-left: 10px;
`;

const Cabecalho = () => {
    return (
        <section>
                <header>
        <nav id="cabecalho" class="navbar navbar-expand-lg navbar-light mb-2 fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home"><Logo class="logotipo" src={logotipo} alt="logotipo pet shop"></Logo></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav bg-nav">
                        <li class="nav-item text-center">
                            <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#sobre-nós">Sobre nós</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#serviços">Serviços</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#pacotes">Pacotes</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class="nav-link" href="#localizacao">Localização</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </header>
        </section>
    );
};

export default Cabecalho;