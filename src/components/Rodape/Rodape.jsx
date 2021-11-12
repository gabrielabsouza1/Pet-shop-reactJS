/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import logotipo from '../images/logotipo.png'
import telefone from '../images/telefone.png'
import amor from '../images/amor.png'


export const Rodape = () => {
    return (
        <div>
            <footer>
    <div class="row justify-content-center py-4 ms-4">
        <div class="col-sm-auto col-md-auto col-lg-4 text-center" id="contato">
            <img class="logotipo-footer" src={logotipo} alt="logotipo pet shop"></img>
            <p class="texto-sobre">Av. Me Contrata, 502</p>
            <p class="texto-sobre">Porto Alegre - Rio Grande do Sul</p>
            <img src={telefone} alt="icone de telefone"></img>
            <a class="texto-sobre"
                href="mailto:gabigabrielabs@gmail.com?Subject=Quero%20te%20contratar!">gabigabrielabs@gmail.com</a>
        </div>
        <div class="col-sm-auto col-md-auto col-lg-4 mt-4 justify-content-center" id="novidades">
            <h8 class="titulo-card">Fique por dentro das nossas novidades!</h8>
            <p class="texto-sobre my-3">Lorem ipsum dolor sit amet. Numquam corporis a tempore cumque et
                libero</p>
            <input type="email" placeholder="Seu email" class="form-control"></input>
        </div>
        <div class="col-sm-auto col-md-auto col-lg-4 mt-4 text-center" id="redes sociais">
            <h8 class="titulo-card mb-4">Nos siga nas redes sociais!</h8>
            <div class="redes-sociais my-4">
                <a class="mx-2 whatsapp" href="https://api.whatsapp.com/send?phone=5551999053910&text=Oi%2C%20vim%20do%20teu%20site%20e%20queria%20te%20contratar"></a>
                <a class="mx-2 facebook" href="https://www.linkedin.com/in/gabriela-souza-744a141b0/"></a>
                <a class="mx-2 instagram" href="https://www.instagram.com/gabiisouzab/"></a>
                <a class="mx-2 github" href="https://github.com/gabrielabsouza1"></a>
            </div>
        </div>
    </div>
    <p class="texto-sobre my-3 text-center">Feito com <img src={amor} alt="amor"></img> por Gabriela Souza</p>
</footer>
        </div>
    )
}
