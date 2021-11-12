import React from 'react'
import check2 from '../images/check2.png'
import veterinaria from '../images/vet1.png'

function Sobre() {
    return (
        <section class="container-fluid my-5" id="sobre-nós">
        <div class="row justify-content-center">
            <img class="img-vet col-auto fade-in" src={veterinaria} alt="veterinária sorrindo vacinando um cachorro"></img>
            <div class="col-sm-auto col-md-auto col-lg-6">
                <p class="my-2 titulo-sobre fade-in">Porque as pessoas nos escolhem</p>
                <h3 class="my-2 subtitulo-sobre fade-in">Algumas razões pelas quais nosso serviço é o preferido</h3>
                <p class="my-3 texto-sobre fade-in">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                    libero laudantium et rerum
                    quibusdam. Vel dolores quae vel ullam quos ut voluptates maxime quo Quis vitae id sequi mollitia aut
                    recusandae quae et inventore aliquid.</p>
                <ul class="razoes right-animation">
                    <li class="my-1">
                        <img class="img-check2 col-auto mx-3" src={check2} alt=""></img>
                        <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li class="my-1">
                        <img class="img-check2 col-auto mx-3" src={check2} alt=""></img>
                        <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li class="my-1">
                        <img class="img-check2 col-auto mx-3" src={check2} alt=""></img>
                        <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li class="my-1">
                        <img class="img-check2 col-auto mx-3" src={check2} alt=""></img>
                        <p class="texto-sobre">Lorem ipsum dolor sit amet.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Sobre
