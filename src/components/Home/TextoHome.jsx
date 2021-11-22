import React from "react";
import check from "../images/check.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Container = styled.section`
display: flex;
flex-direction: column;
padding: 30px 40px;
justify-content: flex-start;
max-width: 60%;

@media(max-width: 1024px) {
    align-items: center;
    max-width: 100%;
}
`
const Titulo = styled.p`
    font-family: 'Sansita Swashed', cursive;
    color: #946336;
    font-size: 1.5rem;
`

const SubtituloPreto = styled.p`
    font-family: 'Sansita Swashed', cursive;
    font-size: 2.5rem;
    margin: 8px;
`

const Texto = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    color: #5c5b5b;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 0;
    max-width: 560px;

    img {
        max-width: 50px;
        max-height: 50px;
    }

    p {
        margin-left: 25px;
        font-family: 'Raleway', sans-serif;
        font-size: 1.3rem;
        font-style: italic;
    }
`

const TextoHome = () => {
    return (
        <Container>
            <Titulo class="fade-in">Bem vindo(a) a Pet Shop!</Titulo>
            <SubtituloPreto class="fade-in">Todo o cuidado para seu bichinho de estimação</SubtituloPreto>
            <Texto class="fade-in">A Pet Shop proporciona serviços de alta qualidade para seu pet, de
                qualquer raça e
                idade.
            </Texto>
            <div class="left-animation">
                <Row>
                    <img src={check} alt=""></img>
                    <p>Serviço personalizado com consultas gratuitas</p>
                </Row>
                <Row>
                    <img src={check} alt=""></img>
                    <p>100% de satisfação garantida</p>
                </Row>
            </div>
        </Container>
    );
}

export default TextoHome