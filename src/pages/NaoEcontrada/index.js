import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
    return (
        <>
            <p className={styles.aviso}>
                Ops! O conteúdo que você procura não foi encontrado.
            </p>
        </>
    );
}

export default NaoEncontrada;