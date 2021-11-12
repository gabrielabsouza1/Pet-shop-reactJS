import React from 'react'
import patinha from '../images/patinha-botao.png'
import styled from 'styled-components'

const Card = styled.div `
    width: 20rem;
    background: white;
    margin: 12px 30px;
    border: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 15px;
        &:hover
        {box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
        transition: 0.5s;}
`

const Pacotes = () => {
    return (
        <div>
            <section class="row justify-content-center py-4" id="pacotes">
                <div class="col-sm-auto col-md-auto col-lg-9 py-4 mx-5 text-center">
                    <p class="titulo-sobre my-3">Escolha um pacote para o seu bichinho</p>
                    <h6 class="subtitulo-sobre my-3">Oferecemos uma grande quantidade de pacotes semanais e mensais</h6>
                    <p class="texto-sobre my-3">Faça sua viagem com tranquilidade enquanto cuidamos do seu pet!</p>
                </div>
                <Card class="card-style card text-center mx-3 my-1">
                    <div class="card-body">
                        <p class="titulo-card">Pacote 1</p>
                        <p class="texto-sobre">With supporting text below as a natural lead-in to additional content.</p>
                        <p class="subtitulo-card">O pacote inclui:</p>
                        <ul class="icone-pacotes">
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <button type="submit" class="button-style mt-3"><img src={patinha} alt=""></img> Escolher</button>
                    </div>
                </Card>
                <Card class="card-style card text-center mx-3 my-1">
                    <div class="card-body">
                        <p class="titulo-card">Pacote 2</p>
                        <p class="texto-sobre">With supporting text below as a natural lead-in to additional content.</p>
                        <p class="subtitulo-card">O pacote inclui:</p>
                        <ul class="icone-pacotes">
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <button type="submit" class="button-style mt-3"><img src={patinha} alt=""></img> Escolher</button>
                    </div>
                </Card>
                <Card class="card-style card text-center mx-3 my-1">
                    <div class="card-body">
                        <p class="titulo-card mb-4">Pacote personalizado</p>
                        <p class="texto-sobre">Personalizado para a sua necessidade</p>
                        <p class="subtitulo-card">O pacote pode incluir:</p>
                        <ul class="icone-pacotes">
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="my-2">
                                <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ul>
                        <button type="submit" class="button-style mt-4"><img src={patinha} alt=""></img> Escolher</button>
                    </div>
                </Card>
            </section>
        </div>
    )
}

export default Pacotes
