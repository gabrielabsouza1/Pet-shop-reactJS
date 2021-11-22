import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import patinha from "../images/patinha-botao.png";
import { useForm, Controller } from "react-hook-form";
import DatePicker, { registerLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt';
registerLocale("pt", pt);


const Formulario = () => {
    const { control, getValues, register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    const initialValues = {
        nomeDoPet: '',
        raça: '',
        serviço: '',
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
                        required
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
                    <select
                        required
                        defaultValue={initialValues.raça}
                        {...register('raça', { validate: (value) => value !== " " })}
                        class="form-select"
                    >
                        <option value=" ">Selecione</option>
                        <option value="gato">Gato</option>
                        <option value="cachorro">Cachorro</option>
                    </select>
                    {errors.raça && <p id='mensagemErro'>Por favor, selecione a raça</p>}
                </div>

                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Serviço</label>
                    <select
                        required
                        defaultValue={initialValues.serviço}
                        {...register('serviço', { validate: (value) => value !== " " })}
                        class="form-select"
                    >
                        <option value=" ">Selecione</option>
                        <option value="banho">Banho</option>
                        <option value="tosa">Tosa</option>
                        <option value="banho e tosa">Banho e Tosa</option>
                        <option value="hospedagem">Hospedagem</option>
                        <option value="cuidadora">Cuidadora</option>
                        <option value="consulta e exames">Consulta e Exames</option>
                    </select>
                    {errors.serviço && <p id='mensagemErro'>Por favor, selecione o serviço</p>}
                </div>

                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Data</label>
                    <Controller
                        control={control}
                        name='data'
                        render={({ field }) => (
                            <DatePicker
                                locale="pt"
                                placeholderText='Selecione uma data'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                class="form-control"
                            />
                        )}
                    />
                </div>

                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Período do dia</label>
                    <select
                        required
                        defaultValue={initialValues.periodoDoDia}
                        {...register('periodoDoDia', { validate: (value) => value !== " " })}
                        class="form-select"
                    >
                        <option value=" ">Selecione</option>
                        <option value="manhã">Manhã (das 8h até 12h)</option>
                        <option value="tarde">Tarde (das 13hh até 18h)</option>
                    </select>
                    {errors.periodoDoDia && <p id='mensagemErro'>Por favor, selecione o período do dia</p>}
                </div>

                <div class="col-auto mb-2 px-4">
                    <label class="form-label form-texto">Email</label>
                    <input
                        defaultValue={initialValues.email}
                        {...register('email', { validate: (value) => value.length > 0 })}
                        type="email"
                        class="form-control"
                        placeholder="seuemail@exemplo.com.br"
                    ></input>
                    {errors.email && <p id='mensagemErro'>Por favor, coloque seu email</p>}
                </div>

                <div class="col-auto mb-3 px-4">
                    <label class="form-label form-texto">Telefone</label>
                    <input
                        defaultValue={initialValues.telefone}
                        {...register('telefone', {
                            validate: {
                                campoPreenchidoFone: (value) => value.length > 0,
                                tem11DigitosFone: (value) => value.length >= 11,
                            },
                        })}
                        type="number"
                        placeholder="(__) ____-____"
                        class="form-control">
                    </input>
                    {errors.telefone && errors.telefone.type === 'campoPreenchidoFone' && (
                        <p id='mensagemErro'>O campo está vazio</p>
                    )}
                    {errors.telefone && errors.telefone.type === 'tem11DigitosFone' && (
                        <p id='mensagemErro'>O telefone deve ter no mínimo 11 dígitos</p>
                    )}
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