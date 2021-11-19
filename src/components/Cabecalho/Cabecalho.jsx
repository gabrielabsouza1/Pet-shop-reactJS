import React, { useState } from 'react'
import logotipo from "../images/logotipo.png";
import styled from "styled-components";
import "./cabecalho.css"


const Logo = styled.img`
    max-height: 10rem;
    max-width: 12rem;
    margin-left: 25px;
`;


const Cabecalho = () => {

    const [isMobile, setisMobile] = useState(false);

    return (
        <>
            <nav className="navbar" id="cabecalho" >
                <a href="#home"><Logo src={logotipo} alt="logotipo pet shop"></Logo></a>
                <ul onClick={() => setisMobile(false)}
                className={isMobile ? "nav-links-mobile" : "nav-links"}
                >
                    <li className="home">
                        <a href="#home">Home</a>
                    </li>
                    <li className="sobre">
                        <a href="#sobre-nós">Sobre nós</a>
                    </li>
                    <li className="servicos">
                        <a href="#serviços">Serviços</a>
                    </li>
                    <li className="pacotes">
                        <a href="#pacotes">Pacotes</a>
                    </li>
                    <li className="localizacao">
                        <a href="#localizacao">Localização</a>
                    </li>
                </ul>
                <button
                    className="mobile-menu-icon"
                    onClick={() => setisMobile(!isMobile)}
                >
                    {isMobile ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fa fa-bars"></i>
                    )}
                </button>
            </nav>
        </>
    );
};

export default Cabecalho;