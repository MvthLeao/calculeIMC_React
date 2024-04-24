import React from "react";
import styles from "./Explicacao.module.css";

const Explicacao = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.imc}>
                <h2 className={styles.titulo}>O que é IMC?</h2>
                <p className={styles.conteudo}>O IMC (Índice de Massa Corporal) é uma medida utilizada para avaliar se uma pessoa está dentro de um intervalo de peso considerado saudável para sua altura. Ele é amplamente utilizado como uma ferramenta de triagem para identificar possíveis problemas de peso que podem levar a problemas de saúde.</p>
                <p className={styles.conteudo}>É importante notar que o IMC é apenas uma medida de peso relativo à altura e não leva em consideração outros fatores importantes, como composição corporal, massa muscular e distribuição de gordura. Portanto, ele pode não ser uma medida precisa da saúde individual em todos os casos. Sempre é recomendado consultar um profissional de saúde para uma avaliação mais completa da saúde e do peso.</p>
            </div>

            <div className={styles.formulario}>
                <div>
                    <h2 className={styles.titulo}>Agora, vamos calcular seu IMC</h2>
                    <h4>Por favor, preencha as seguintes informações:</h4>
                </div>

                <div>
                    <form>
                        <div className={styles.peso}>
                            <label htmlFor="peso">Peso(kg):</label>
                            <input type="number"/>
                        </div>
                        <div className={styles.altura}>
                            <label htmlFor="altura">Altura(cm):</label>
                            <input type="number"/>
                        </div>
                        <div className={styles.botao}>
                            <button>Calcular</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Explicacao;