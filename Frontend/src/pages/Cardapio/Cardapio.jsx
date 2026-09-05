import styles from "./Cardapio.module.css";
import icon from '../../assets/icon/xicaraTexto.png'
import lixinho from '../../assets/icon/lixeira-xmark.png'
import imgEx from '../../assets/imgsCafes/Coffee ex.png'
import buscar from '../../assets/icon/procurar.png'
import { listarProdutos } from "../../services/produtoService";
import { useEffect, useState } from "react";


export function Cardapio() {

const [produtos, setProdutos] = useState([])

useEffect(()=>{
    listarProdutos()
    .then((resposta) => {
        alert("Produto na lista")
        console.log(resposta)
        setProdutos(resposta.data)
    })
},[])

    return (
        <main className={styles.cardapio}>
            <section className={styles.container}>
                <div className={styles.cabecalhoProdutos}>
                    <div className={styles.tituloProdutos}>
                        <div className={styles.iconeTitulo}>
                            <img src={icon} alt="Xicara de café" />
                        </div>

                        <div>
                            <h1>Nossos Produtos</h1>
                            <p>Confira todos os cafés e bebidas disponíveis</p>
                        </div>
                    </div>

                    <div className={styles.filtro}>
                        <img src={buscar} alt="" />
                        <input
                            type="text"
                            placeholder="Selecione uma categoria"
                        />
                    </div>
                </div>

                <div className={styles.gridProdutos}>
                    {produtos.map((produto) => (
                        <article
                            className={styles.cardProduto}
                            key={produto.id}
                        >
                            <div className={styles.imagemProduto}>
                                <div className={styles.imagemPlaceholder}>
                                     <img
            src={`http://localhost:8080/produto/${produto.id}/imagem`}
            alt={produto.nomeProduto}
        />
                                </div>
                            </div>

                            <div className={styles.informacoesProduto}>
                                <h2>{produto.nomeProduto}</h2>

                                <p>{produto.descricao}</p>

                                <div className={styles.rodapeCard}>
                                    <strong>R$ {produto.preco}</strong>

                                    <button type="button">
                                        <img src={lixinho} alt="Lixeira" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
