import React from 'react'

const Localizacao = () => {
    return (
        <div>
            <section class="bg-localizacao container-fluid" id="localizacao">
        <div class="text-center">
            <div class="col-sm-auto col-md-auto col-lg-12 pt-3">
                <p class="titulo-sobre my-4">A Pet Shop se encontra no coração da cidade</p>
                <h7 class="subtitulo-servicos my-4">Nos encontre!</h7>
                <p class="texto-sobre my-4">Lorem ipsum dolor sit amet.</p>
            </div>
            <iframe class="col-sm-auto col-md-auto col-lg-8 map-style"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.820145150488!2d-46.63945990111088!3d-23.588008322509918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1635450531872!5m2!1spt-BR!2sbr"
                allowfullscreen="" loading="lazy" title="mapa"></iframe>
        </div>
    </section>
        </div>
    )
}

export default Localizacao
