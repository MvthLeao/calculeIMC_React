import React from "react";
import styles from "./Categoria.module.css";
import imagem from "./images/categorias.png";

const Categoria = () => {
    return (
        <>
            <div className={styles.titulo}>
                <h2>CONFIRA EM QUE CATEGORIA SE ENCAIXA</h2>
            </div>
            <div className={styles.imagem}>
                <img src={imagem} alt="todas as categorias" />
            </div>
        </>
    )
}

export default Categoria;