package br.com.saborcia.controller;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import br.com.saborcia.service.CardapioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class CardapioController {

    private final CardapioService cardapioService;

    public CardapioController(CardapioService cardapioService) {
        this.cardapioService = cardapioService;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listarTodos() {
        return ResponseEntity.ok(cardapioService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable int id) {
        Produto produto = cardapioService.buscarPorId(id);
        if (produto != null) {
            return ResponseEntity.ok(produto);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Produto>> filtrarPorCategoria(@PathVariable String categoria) {
        Categoria cat;
        try {
            cat = Categoria.valueOf(categoria.toUpperCase());
        } catch (IllegalArgumentException e) {
            // Tenta mapear nomes comuns
            String catNorm = categoria.toLowerCase();
            if (catNorm.contains("pizza"))
                cat = Categoria.PIZZAS;
            else if (catNorm.contains("bebida"))
                cat = Categoria.BEBIDAS;
            else if (catNorm.contains("sobremesa"))
                cat = Categoria.SOBREMESAS;
            else if (catNorm.contains("entrada"))
                cat = Categoria.ENTRADAS;
            else if (catNorm.contains("prato"))
                cat = Categoria.PRATOS;
            else
                cat = Categoria.TODOS;
        }

        return ResponseEntity.ok(cardapioService.filtrarPorCategoria(cat));
    }

    @GetMapping("/favoritos")
    public ResponseEntity<List<Produto>> listarFavoritos() {
        return ResponseEntity.ok(cardapioService.listarFavoritos());
    }

    @PostMapping
    public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) {
        Produto novo = cardapioService.salvarProduto(produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(novo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable int id, @RequestBody Produto produto) {
        produto.setId(id);
        Produto atualizado = cardapioService.salvarProduto(produto);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable int id) {
        if (cardapioService.removerProduto(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/favorito")
    public ResponseEntity<Void> toggleFavorito(@PathVariable int id) {
        if (cardapioService.toggleFavorito(id)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Produto>> buscarProdutos(@RequestParam String termo) {
        return ResponseEntity.ok(cardapioService.buscarPorTermo(termo));
    }
}
