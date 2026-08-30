package school.sptech.cafeteria.repository;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import school.sptech.cafeteria.model.Produto;

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
}
