import styles from "./Rodape.module.css";

function Rodape({ mensagem }) {
    return(
        <footer className={ styles.rodape }>
            <span>
                { mensagem }
            </span>
        </footer>
    );
}

export default Rodape;