import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import patinha from "../components/images/patinha-botao.png";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const { getValues, register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    const initialValues = {
        nomeDoPet: '',
        raça: '',
        servico: '',
        data: '',
        periodoDoDia: '',
        email: '',
        telefone: '',
    };

    return (
        <div class="col-sm-auto col-md-4 offset-md-0 form-style mt-5 right-animation">
            <form onSubmit={(event) => {
                event.preventDefault();
                
            }}
                id="marcar-horário"
                class="row g-3"
            >
                <h2 class="form-titulo">Agende um horário ou consulte valores!</h2>
                <p class="form-texto px-4">Preencha os dados e entraremos em contato o mais breve possível.</p>

                <div 
                onSubmit={handleSubmit(onSubmit)}
                class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Nome do seu Pet</label>
                    <input
                        defaultValue={initialValues.nomeDoPet}
                        {...register('nomeDoPet', { validate: (value) => value.length > 0 })}
                        type="text"
                        class="form-control"
                        placeholder="Nome do seu bichinho"
                    />
                    {errors.nomeDoPet && <p id='mensagemErro'>O campo está vazio</p>}
                </div>

                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Raça</label>
                    <select class="form-select">
                        <option selected>Gato</option>
                        <option>Cachorro</option>
                    </select>
                </div>
                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Serviço</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecione</option>
                        <option value="1">Banho</option>
                        <option value="2">Tosa</option>
                        <option value="3">Banho e Tosa</option>
                        <option value="4">Hospedagem</option>
                        <option value="5">Cuidadora</option>
                        <option value="6">Consulta e Exames</option>
                    </select>
                </div>
                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Data</label>
                    <input type="number" class="form-control"></input>
                </div>
                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Período do dia</label>
                    <select class="form-select">
                        <option selected>Manhã (das 8h até 12h)</option>
                        <option>Tarde (das 13hh até 18h)</option>
                    </select>
                </div>
                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Email</label>
                    <input type="email" class="form-control"></input>
                </div>
                <div class="col-auto mb-3 px-4">
                    <label class="form-label form-texto">Telefone</label>
                    <input type="number" class="form-control"></input>
                </div>
                <div class="posicao-botao">
                    <button
                        onClick={() => {
                            const values = getValues();
                            console.log(values);
                        }}
                        type="submit"
                        className="button-style">
                        <img src={patinha} alt=""></img> Reserve agora!
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;