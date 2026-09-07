import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CadastroProdutos/CadastroProdutos.module.css'
import icon from '../../assets/icon/xicaraTexto.png'
import { cadastrarProduto } from "../../services/produtoService";
import conclusao from '../../assets/icon/tarefa-concluida.png'
import download from '../../assets/icon/download-da-nuvem.png'
import lixinho from '../../assets/icon/lixeira-xmark.png'
import cadeado from '../../assets/icon/trancar.png'


function CadastroProduto() {
    const navigate = useNavigate();

    const [cadastroConcluido, setCadastroConcluido] = useState(false);

    const [produto, setProduto] = useState({
    nomeProduto: "",
    categoria: "",
    descricao: "",
    preco: "",
    tamanho: "",
    ingredientes: "",
    dadosImagem: null
    });

    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    


    function cadastrarProdutoPost(e) {

        // desabilita a parte padrão do navegador
        e.preventDefault();

        if (produto.nomeProduto === "") {
            alert("Preencha o Nome corretamente")
            return;
        } 
        
        if (produto.categoria == "") {
            alert("Preencha o categoria corretamente")
            return;
        } 
        
        if (produto.descricao == "") {
            alert("Preencha o descrição corretamente")
            return;
        } 
        
        if (produto.preco == "") {
            alert("Preencha o preço corretamente")
            return;
        } 
        
        if (produto.tamanho == "") {
            alert("Preencha o tamanho corretamente")
            return;
        } 
        
        if (produto.ingredientes == "") {
            alert("Preencha o ingredientes corretamente")
            return;
        }

        const formData = new FormData();

        const produtoJson = new Blob(
         [JSON.stringify(produto)],
         { type: "application/json" }
        );

        formData.append("produto", produtoJson);
        formData.append("imagem", imagemSelecionada);

       
        cadastrarProduto(formData)
    .then((resposta) => {

        setCadastroConcluido(true);

        setTimeout(() => {
            navigate("/cardapio");
        }, 2000);

        console.log(resposta);

        setProduto({
            nomeProduto: "",
            categoria: "",
            descricao: "",
            preco: "",
            tamanho: "",
            ingredientes: "",
            dadosImagem: null
        });
    });

    }

    function limparForms() {
        setProduto({
    nomeProduto: "",
    categoria: "",
    descricao: "",
    preco: "",
    tamanho: "",
    ingredientes: "",
    dadosImagem: null
});
    }

     function permitirArrastar(e) {
    e.preventDefault();
}

function soltarImagem(e) {

    e.preventDefault();

    const arquivo = e.dataTransfer.files[0];

    if (arquivo) {
        setImagemSelecionada(arquivo);
    }
}

   function selecionarImagem(e) {

        const arquivo = e.target.files[0];

        if (arquivo) {
            setImagemSelecionada(arquivo);
        }
    }


    return (
       <section className={styles.sec}>
    <div className={styles.container}>
        <div className={styles.tela}>
            <div className={styles.titles}>
                <img src={icon} alt="Xícara com café" />
                <div className={styles.textos}>
                    <h1>Cadastrar Produto</h1>
                    <p>Adicione um novo produto para cafeteria</p>
                </div>
            </div>

            {cadastroConcluido && (
    <div className={styles.overlaySucesso}>

        <div className={styles.cardSucesso}>

            <div className={styles.iconeSucesso}>
                ✓
            </div>

            <h2>Produto cadastrado!</h2>

            <p>
                O produto foi adicionado ao cardápio com sucesso.
            </p>

            <div className={styles.carregando}>
                Redirecionando para o cardápio...
            </div>

        </div>

    </div>
)}

            <form onSubmit={cadastrarProdutoPost}>
                <div className={styles.linha}>
                    <div className={styles.campo}>
                        <label htmlFor="nome">Nome do produto</label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Ex: Cappuccino de Caramelo"
                            value={produto.nomeProduto}
                            onChange={(e) =>
                                setProduto({
                                    ...produto,
                                    nomeProduto: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="categoria">Categoria</label>
                        <input
                            id="categoria"
                            type="text"
                            placeholder="Selecione uma categoria"
                            value={produto.categoria}
                            onChange={(e) =>
                                setProduto({
                                    ...produto,
                                    categoria: e.target.value
                                })
                            }
                        />
                    </div>
                </div>

                <div className={styles.campo}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        rows="5"
                        placeholder="Descreva o produto..."
                        value={produto.descricao}
                        onChange={(e) =>
                            setProduto({
                                ...produto,
                                descricao: e.target.value
                            })
                        }
                    ></textarea>
                </div>

                <div className={styles.areaInferior}>
                    <div className={styles.coluna}>
                        <div className={styles.linha2}>
                            <div className={styles.campo}>
                                <label htmlFor="preco">Preço (R$)</label>
                                <input
                                    id="preco"
                                    type="number"
                                    placeholder="Ex: 12,90"
                                    value={produto.preco}
                                    onChange={(e) =>
                                        setProduto({
                                            ...produto,
                                            preco: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="tamanho">Tamanho</label>
                                <input
                                    id="tamanho"
                                    type="text"
                                    placeholder="Ex: 300ml"
                                    value={produto.tamanho}
                                    onChange={(e) =>
                                        setProduto({
                                            ...produto,
                                            tamanho: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="ingredientes">Ingredientes</label>
                                <input
                                    id="ingredientes"
                                    type="text"
                                    placeholder="Ex: Café, leite, caramelo..."
                                    value={produto.ingredientes}
                                    onChange={(e) =>
                                        setProduto({
                                            ...produto,
                                            ingredientes: e.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className={styles.botoes}>
                            <button type="button" onClick={limparForms}>
                                <img src={lixinho} alt="" /> <span>Limpar</span>
                            </button>

                            <button type="submit">
                                <img src={cadeado} alt="" /> <span>Salvar Produto</span>
                            </button>
                        </div>
                    </div>

                    <label
                        className={styles.imagemProduto}
                        onDragOver={permitirArrastar}
                        onDrop={soltarImagem}
                    >
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={selecionarImagem}
                        />

                        {imagemSelecionada ? (
                            <>
                                <span className={styles.imagemSucesso}>
                                    <img src={conclusao} alt="" />
                                </span>

                                <strong>Imagem selecionada!</strong>

                                <small>{imagemSelecionada.name}</small>
                            </>
                        ) : (
                            <>
                                <span>
                                    <img src={download} alt="" />
                                </span>

                                <strong>Imagem do produto</strong>

                                <small>
                                    Clique para enviar ou arraste o arquivo
                                    <br />
                                    (PNG, JPG até 5MB)
                                </small>
                            </>
                        )}
                    </label>
                </div>
            </form>
        </div>
    </div>
</section>
    );
}

export default CadastroProduto;