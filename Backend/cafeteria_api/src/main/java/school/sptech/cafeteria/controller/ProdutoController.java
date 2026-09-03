package school.sptech.cafeteria.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import school.sptech.cafeteria.model.Produto;
import school.sptech.cafeteria.repository.ProdutoRepository;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "http://localhost:5173")
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

    @GetMapping("/{id}/imagem")
    public ResponseEntity<byte[]> buscarImagem(@PathVariable Integer id) {

        byte[] imagem = repository.buscarImagem(id);

        return ResponseEntity.ok()
                .header("Content-Type", "image/png")
                .body(imagem);
    }

    @PostMapping
    public ResponseEntity<Produto> cadastrar(
            @RequestPart("produto") Produto produto,
            @RequestPart("imagem") MultipartFile imagem) throws IOException {

        produto.setDadosImagem(imagem.getBytes());

        Produto produtoCadastrado = repository.cadastrar(produto);

        return ResponseEntity.ok(produtoCadastrado);
    }
}
