import React, { useState } from "react";
import styles from "./Resultado.module.css";
import { Imc, Conclusao } from "../Conclusão/Conclusão";

// calculadora e tabela 

const Resultado = () => {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState(null);

    const atualizaPeso = (event) => {
        setPeso(event.target.value);
    };

    const atualizaAltura = (event) => {
        setAltura(event.target.value);
    };

    const calculando = () => {
        const resultadoImc = Imc(peso, altura / 100);
        setImc(resultadoImc.toFixed(2));
    };

    return (
        <div className={styles.container}>
            <div className={styles.calculadora}>
                <h2 className={styles.titulo}>Preencha as seguintes informações para calcularmos seu IMC:</h2>

                <div>
                    <form className={styles.formulario}>

                        <div className={styles.peso}>
                            <label htmlFor="peso">Peso(kg):</label>
                            <input type="number"
                            value={peso}
                            onChange={atualizaPeso}/>
                        </div>

                        <div className={styles.altura}>
                            <label htmlFor="altura">Altura(cm):</label>
                            <input type="number"
                            value={altura}
                            onChange={atualizaAltura}/>            
                        </div>

                    </form>
                    <div className={styles.botao}>
                            <button onClick={calculando}>Calcular</button>
                    </div>

                    <div className={styles.resposta}>
                        { imc &&
                        <>
                        <div className={styles.valor}>
                            <h2>Seu IMC é: {imc}</h2>
                            <h4>{Conclusao(imc)}</h4>
                        </div>
                        </>
                        }
                    </div>

                </div>
            </div>
            <div className={styles.tabela}>
                <table>
                    <thead className={styles.titulos}>
                        <tr>
                            <td>IMC</td>
                            <td>Classificação</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>- 17</td>
                            <td>Você está muito abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>17 - 18.49</td>
                            <td>Você está abaixo do Peso</td>
                        </tr>
                        <tr>
                            <td>18.50 - 24.99</td>
                            <td>Parabéns! Seu peso é o ideal</td>
                        </tr>
                        <tr>
                            <td>25 - 29.99</td>
                            <td>Você está em sobrepeso</td>
                        </tr>
                        <tr>
                            <td>30 - 34.99</td>
                            <td>Você está com obesidade grau I</td>
                        </tr>
                        <tr>
                            <td>35 - 39.99</td>
                            <td>Você está com obesidade grau II</td>
                        </tr>
                        <tr>
                            <td>+ 40</td>
                            <td>Você está com obesidade grau III</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Resultado;