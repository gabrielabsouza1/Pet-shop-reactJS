import React from "react";
import Formulario from "../Home/Formulario"
import 'bootstrap/dist/css/bootstrap.min.css';
import TextoHome from "../Home/TextoHome";
import styled from "styled-components";
import background from "../images/background-gatinho.png"

const ContainerHome = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 50rem;

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
      }
`

const Home = () => {
    return (
        <ContainerHome id="home">
            <TextoHome />
            <Formulario />
        </ContainerHome>
    );
}

export default Home;