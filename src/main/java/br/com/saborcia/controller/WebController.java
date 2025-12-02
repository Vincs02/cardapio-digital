package br.com.saborcia.controller;

import br.com.saborcia.model.Produto;
import br.com.saborcia.service.CardapioService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class WebController {

    private final CardapioService cardapioService;

    public WebController(CardapioService cardapioService) {
        this.cardapioService = cardapioService;
    }

    /**
     * Renderiza a página principal usando Thymeleaf.
     * O parâmetro "categoria" permite filtrar produtos.
     */
    @GetMapping("/")
    public String home(@RequestParam(value = "categoria", required = false) String categoria,
            Model model) {
        List<Produto> produtos;
        if (categoria == null || categoria.isBlank() || "todos".equalsIgnoreCase(categoria)) {
            produtos = cardapioService.listarTodos();
        } else {
            // Converte a string para enum Categoria (método utilitário no service)
            produtos = cardapioService.filtrarPorCategoria(
                    CardapioService.categoriaFromString(categoria));
        }
        model.addAttribute("produtos", produtos);
        model.addAttribute("categoriaSelecionada", categoria == null ? "todos" : categoria);
        return "index"; // nome do template Thymeleaf (src/main/resources/templates/index.html)
    }
}
