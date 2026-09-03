package school.sptech.cafeteria.repository;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import school.sptech.cafeteria.model.Produto;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ProdutoRepository {
    private JdbcTemplate template;

    public ProdutoRepository(JdbcTemplate template) {
        this.template = template;
    }

    public List<Produto> listar() {

        String sql = "SELECT * FROM produtos";

        List<Produto> produtos = template.query(sql,
                new BeanPropertyRowMapper<>(Produto.class));


        return produtos;
    }

    public Produto cadastrar(Produto produto) {

        String sqlInsert = """
                INSERT INTO produtos (nome_produto, categoria, descricao, preco,
                 tamanho, ingredientes, dados_imagem) VALUES (?, ?, ?, ?, ?, ?, ?)
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(connection -> {

            PreparedStatement ps = connection.prepareStatement(
                    sqlInsert,
                    Statement.RETURN_GENERATED_KEYS
            );

            ps.setString(1, produto.getNomeProduto());
            ps.setString(2, produto.getCategoria());
            ps.setString(3, produto.getDescricao());
            ps.setBigDecimal(4, produto.getPreco());
            ps.setInt(5, produto.getTamanho());
            ps.setString(6, produto.getIngredientes());
            ps.setBytes(7, produto.getDadosImagem());

            return ps;

        }, keyHolder);

        Integer id = keyHolder.getKey().intValue();

        produto.setId(id);

        return produto;
    }

    public byte[] buscarImagem(Integer id) {

        String sql = "SELECT dados_imagem FROM produtos WHERE id = ?";

        return template.queryForObject(
                sql,
                byte[].class,
                id
        );
    }
}
