import styles from '../CadastroProdutos/CadastroProdutos.module.css'
import icon from '../../assets/icon/xicaraTexto.png'
import update from '../../assets/icon/envioimg.png'


function CadastroProduto() {
    return (
        <section className={styles.sec}>
           <div className={styles.imgLateral}></div>
           <div className={styles.container}>
                <div className={styles.tela}>
                    <div className={styles.titles}>
                        <img src={icon} alt="Xicara com café" />
                        <div className={styles.textos}>
                            <h1>Cadastrar Produto</h1>
        <p>Adicione um novo produto para cafeteria</p>
                        </div>
                    </div>

                    <form>

                {/* 
                    Essa div representa a PRIMEIRA LINHA.
                    Dentro dela teremos dois campos lado a lado.
                */}
                <div className={styles.linha}>

                    {/* Campo Nome */}
                    <div className={styles.campo}>

                        {/* 
                            label é o nome do campo.
                            htmlFor conecta o label ao input através do id.
                        */}
                        <label htmlFor="nome">
                            Nome do produto
                        </label>

                        {/* Campo onde o usuário digita o nome */}
                        <input
                            id="nome"
                            type="text"
                            placeholder="Ex: Cappuccino de Caramelo"
                        />

                    </div>


                    {/* Campo Categoria */}
                    <div className={styles.campo}>

                        <label htmlFor="categoria">
                            Categoria
                        </label>

                        {/* 
                            Por enquanto estamos usando input.
                            Depois podemos transformar isso em select.
                        */}
                        <input
                            id="categoria"
                            type="text"
                            placeholder="Selecione uma categoria"
                        />

                    </div>

                </div>


                {/* 
                    Descrição ocupa uma linha inteira,
                    por isso fica fora da .linha.
                */}
                <div className={styles.campo}>

                    <label htmlFor="descricao">
                        Descrição
                    </label>

                    {/* 
                        textarea é usado quando queremos
                        permitir várias linhas de texto.
                    */}
                    <textarea
                        id="descricao"
                        rows='5'
                        placeholder="Descreva o produto..."
                    ></textarea>

                </div>

                {/* 
                    Área inferior.
                    Aqui vamos colocar o botão de limpar,
                    salvar e a área da imagem.
                */}
                <div className={styles.areaInferior}>
              
                    <div className={styles.coluna}>
  <div className={styles.linha2}>

                    {/* Preço */}
                    <div className={styles.campo}>

                        <label htmlFor="preco">
                            Preço (R$)
                        </label>

                        <input
                            id="preco"
                            type="number"
                            placeholder="Ex: 12,90"
                        />

                    </div>


                    {/* Tamanho */}
                    <div className={styles.campo}>

                        <label htmlFor="tamanho">
                            Tamanho
                        </label>

                        <input
                            id="tamanho"
                            type="text"
                            placeholder="Ex: 300ml"
                        />

                    </div>


                    {/* Ingredientes */}
                    <div className={styles.campo}>

                        <label htmlFor="ingredientes">
                            Ingredientes
                        </label>

                        <input
                            id="ingredientes"
                            type="text"
                            placeholder="Ex: Café, leite, caramelo..."
                        />

                    </div>
                    </div>

                    <div className={styles.botoes}>

                        {/* 
                            type="reset" faz o formulário voltar
                            aos valores iniciais quando estiver funcionando.
                        */}
                        <button type="reset">
                            🗑 Limpar
                        </button>

                        {/* 
                            type="submit" indica que esse botão
                            envia o formulário.
                        */}
                        <button type="submit">
                            🔒 Salvar Produto
                        </button>

                    </div>
                    </div>

                    {/* Área visual destinada à imagem */}
                    <div className={styles.imagemProduto}>

                        {/* Ícone provisório */}
                        <span><img src={update} alt="" /></span>

                        <strong>Imagem do produto</strong>

                        <small>
                            Clique para enviar ou arraste o arquivo
                            <br />
                            (PNG, JPG até 5MB)
                        </small>

                    </div>

                </div>

            </form>

                   
           </div>
                </div>

                
        </section>
    );
}

export default CadastroProduto;