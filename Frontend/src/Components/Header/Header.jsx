import styles from '../Header/Header.module.css';
import Logo from '../../assets/icon/logoEmpresa.png';
import Xicara from '../../assets/icon/xicaraDeBotao.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="Logo da empresa"/>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li><Link to="/home" className={styles.link}>Inicio</Link></li>
                    <li><Link to="/cadastro-produto" className={styles.link}>Produtos</Link></li>
                    <li><Link to="/cardapio" className={styles.link}>Cardápio</Link></li>
                </ul>
            </nav>
            <div className={styles.botao}>
                <Link to="/home" className={styles.btn1}>Entrar</Link>
                <Link to="/cadastro-produto" className={styles.btn2}><img src={Xicara} alt="Xicara do botão" />Cadastrar</Link>
            </div>
        </div>
    )
}

export default Header