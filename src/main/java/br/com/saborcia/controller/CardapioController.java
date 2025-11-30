package br.com.saborcia.controller;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import br.com.saborcia.service.CardapioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller REST que gerencia as requisições relacionadas ao cardápio.
 * Demonstra o uso de anotações Spring e REST API.
 */
@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class CardapioController {

    private final CardapioService cardapioService;

    // Injeção de dependência via construtor
    public CardapioController(CardapioService cardapioService) {
        this.cardapioService = cardapioService;
    }

    /**
     * Endpoint para listar todos os produtos
     */
    @GetMapping
    public ResponseEntity<List<Produto>> listarTodos() {
        List<Produto> produtos = cardapioService.listarTodos();
        return ResponseEntity.ok(produtos);
    }

    /**
     * Endpoint para buscar produto por ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable int id) {
        Produto produto = cardapioService.buscarPorId(id);
        if (produto != null) {
            return ResponseEntity.ok(produto);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para filtrar produtos por categoria
     */
    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Produto>> filtrarPorCategoria(@PathVariable String categoria) {
        // Normalizar categoria para aceitar diferentes formatos
        String categoriaNormalizada = categoria.toLowerCase();
        Categoria cat;
        
        switch (categoriaNormalizada) {
            case "pizzas":
            case "pizza":
                cat = Categoria.PIZZAS;
                break;
            case "bebidas":
            case "bebida":
                cat = Categoria.BEBIDAS;
                break;
            case "sobremesas":
            case "sobremesa":
                cat = Categoria.SOBREMESAS;
                break;
            case "entradas":
            case "entrada":
                cat = Categoria.ENTRADAS;
                break;
            case "pratos":
            case "pratos principais":
            case "prato principal":
                cat = Categoria.PRATOS;
                break;
            default:
                cat = Categoria.TODOS;
        }
        
        List<Produto> produtos = cardapioService.filtrarPorCategoria(cat);
        return ResponseEntity.ok(produtos);
    }

    /**
     * Endpoint para listar produtos favoritos
     */
    @GetMapping("/favoritos")
    public ResponseEntity<List<Produto>> listarFavoritos() {
        List<Produto> favoritos = cardapioService.listarFavoritos();
        return ResponseEntity.ok(favoritos);
    }

    /**
     * Endpoint para criar um novo produto
     */
    @PostMapping
    public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) {
        cardapioService.adicionarProduto(produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produto);
    }

    /**
     * Endpoint para atualizar um produto existente
     */
    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable int id, @RequestBody Produto produto) {
        produto.setId(id);
        boolean atualizado = cardapioService.atualizarProduto(produto);
        if (atualizado) {
            return ResponseEntity.ok(produto);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para deletar um produto
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable int id) {
        boolean removido = cardapioService.removerProduto(id);
        if (removido) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para alternar favorito
     */
    @PostMapping("/{id}/favorito")
    public ResponseEntity<Void> toggleFavorito(@PathVariable int id) {
        boolean sucesso = cardapioService.toggleFavorito(id);
        if (sucesso) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para buscar produtos por termo
     * Demonstra busca dinâmica usando Stream API
     */
    @GetMapping("/buscar")
    public ResponseEntity<List<Produto>> buscarProdutos(@RequestParam String termo) {
        List<Produto> produtos = cardapioService.buscarPorTermo(termo);
        return ResponseEntity.ok(produtos);
    }
}

