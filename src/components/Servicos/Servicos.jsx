import React from 'react'
import banho from '../images/banho.png'
import tosa from '../images/tosa.png'
import hotel from '../images/hotel.png'
import cuidadora from '../images/cuidadora.png'
import exame from '../images/exame.png'
import styled from 'styled-components'

const Card = styled.div`
    width: 15rem;
    background: white;
    margin: 12px 20px;
    border-radius: 15px;
        &:hover
        {box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
        transition: 0.5s;} 
`

const Servicos = () => {
    return (
        <section class="bg-servicos pb-5" id="serviços">
            <div class="col-sm-auto col-md-auto col-lg-9 py-4 mx-5 left-animation">
                <p class="titulo-sobre my-4">Tratamento profissional para o seu bichinho</p>
                <h4 class="subtitulo-servicos my-4">Seu pet pode aproveitar dos melhores serviços e ter sua segurança
                    garantida</h4>
                <p class="texto-sobre my-4">Prezamos pela qualidade do serviço. Lorem ipsum dolor sit amet. Numquam corporis
                    a tempore cumque et libero laudantium et rerum quibusdam.</p>
            </div>
            <div class="row justify-content-center">
                <Card class="col-sm-auto col-md-auto card mx-2 my-1 fade-in">
                    <h5 class="titulo-card">Banho</h5>
                    <img src={banho} class="img-card" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text texto-sobre">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                            libero laudantium et rerum
                            quibusdam.</p>
                    </div>
                </Card>
                <Card class="col-sm-auto col-md-auto card mx-2 my-1 fade-in">
                    <h5 class="titulo-card">Tosa</h5>
                    <img src={tosa} class="img-card" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text texto-sobre">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                            libero laudantium et rerum
                            quibusdam.</p>
                    </div>
                </Card>
                <Card class="col-sm-auto col-md-auto card mx-2 my-1 fade-in">
                    <h5 class="titulo-card">Hospedagem</h5>
                    <img src={hotel} class="img-card" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text texto-sobre">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                            libero laudantium et rerum
                            quibusdam.</p>
                    </div>
                </Card>
                <Card class="col-sm-auto col-md-auto card mx-2 my-1 fade-in">
                    <h5 class="titulo-card">Cuidadora</h5>
                    <img src={cuidadora} class="img-card" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text texto-sobre">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                            libero laudantium et rerum
                            quibusdam.</p>
                    </div>
                </Card>
                <Card class="col-sm-auto col-md-auto card mx-2 my-1 fade-in">
                    <h5 class="titulo-card">Consultas e exames</h5>
                    <img src={exame} class="img-card" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text texto-sobre">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                            libero laudantium et rerum
                            quibusdam.</p>
                    </div>
                </Card>
            </div>
            <div class="posicao-botao">
                <button class="button-style mt-5"><a class="link" href="#home"><img src="img/patinha-botao.png" alt=""></img> Reserve
                    agora!</a></button>
            </div>
        </section>
    )
}

export default Servicos
