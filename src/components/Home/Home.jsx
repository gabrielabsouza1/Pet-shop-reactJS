import React from "react";
import  Formulario  from "../Home/Formulario"
import 'bootstrap/dist/css/bootstrap.min.css';
import TextoHome from "../Home/TextoHome";

const Home = () => {
    return (
        <section>
            <div class="container-fluid bg-image position-home" id="home">
                <div class="row">
                    <TextoHome />
                    <Formulario />
                </div>
            </div>
        </section>
    );
}

export default Home;