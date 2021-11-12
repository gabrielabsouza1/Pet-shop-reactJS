import React from 'react'
import logotipo from "../images/logotipo.png";
import styled from "styled-components";


const Nav = styled.div`
display: flex;
align-itens: center;
justify-content: space-between;
`

const Logo = styled.img`
    max-height: 10rem;
    max-width: 12rem;
    margin-left: 10px;
`;


const Menu = styled.ul`
display: flex;
`

const MenuLink = styled.li`
    width: 50px;
    height: 50px;
    display: flex;
`


const Cabecalho = () => {
    return (
        <>
            <Nav id="cabecalho" >
                <a href="#home"><Logo src={logotipo} alt="logotipo pet shop"></Logo></a>
                <Menu>
                    <MenuLink>
                        <a href="#home">Home</a>
                    </MenuLink>
                    <MenuLink>
                        <a href="#sobre-nós">Sobre nós</a>
                    </MenuLink>
                    <MenuLink>
                        <a href="#serviços">Serviços</a>
                    </MenuLink>
                    <MenuLink>
                        <a href="#pacotes">Pacotes</a>
                    </MenuLink>
                    <MenuLink>
                        <a href="#localizacao">Localização</a>
                    </MenuLink>
                </Menu>
            </Nav>
        </>
    );
};

export default Cabecalho;