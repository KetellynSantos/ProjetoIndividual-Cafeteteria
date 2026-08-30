import styles from '../Home/Home.module.css';
import mais from '../../assets/icon/mais.png';
import Xicara from '../../assets/icon/xicaraDeBotao.png';
import { Link } from "react-router-dom";

function TelaInicial() {
    return (
        <section className={styles.home}>
             <div className={styles.divMaster}>
                <p className={styles.subtitle}>Café, doces e muito mais</p>
                <h1 className={styles.title}>
                    O cantinho <br /> do seu café <br />favorito!
                </h1>
                <h3 className={styles.subtitle2}>Aqui, cada xícara é feita com carinho <br /> e um toque de personalidade</h3>
                <div className={styles.botao}>
                                    <a href="#" className={styles.btn2}><img src={Xicara} alt="Xicara do botão" />Ver Cardápio</a>
                    <Link to="/cadastro-produto" className={styles.btn1}><img src={mais} alt="Sinal de mais" />Cadastrar Produto</Link>
                </div>
             </div>

        </section>
    )
}

export default TelaInicial