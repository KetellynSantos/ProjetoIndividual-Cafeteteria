package school.sptech.cafeteria.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import school.sptech.cafeteria.model.Produto;
import school.sptech.cafeteria.repository.ProdutoRepository;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    private ProdutoRepository repository;

    public ProdutoController(ProdutoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listar() {

        List<Produto> produtos = repository.listar();

        return ResponseEntity.ok(produtos);
    }
}
