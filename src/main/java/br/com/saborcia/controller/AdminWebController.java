package br.com.saborcia.controller;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import br.com.saborcia.model.Reserva;
import br.com.saborcia.service.CardapioService;
import br.com.saborcia.service.ReservaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

/**
 * Controller para o painel administrativo web (Thymeleaf).
 * Demonstra uso de Thymeleaf, sessões e operações CRUD.
 */
@Controller
@RequestMapping("/admin/web")
public class AdminWebController {

    private final CardapioService cardapioService;
    private final ReservaService reservaService;

    // Senha admin (em produção, use Spring Security)
    private static final String ADMIN_PASSWORD = "0202";

    public AdminWebController(CardapioService cardapioService, ReservaService reservaService) {
        this.cardapioService = cardapioService;
        this.reservaService = reservaService;
    }

    /**
     * Página de login do admin
     */
    @GetMapping("/login")
    public String loginPage(HttpSession session) {
        // Se já está logado, redireciona para dashboard
        if (Boolean.TRUE.equals(session.getAttribute("adminLogado"))) {
            return "redirect:/admin/web/dashboard";
        }
        return "admin/login";
    }

    /**
     * Processa login do admin
     */
    @PostMapping("/login")
    public String processLogin(@RequestParam String senha,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (ADMIN_PASSWORD.equals(senha)) {
            session.setAttribute("adminLogado", true);
            return "redirect:/admin/web/dashboard";
        }

        redirectAttributes.addFlashAttribute("erro", "Senha incorreta!");
        return "redirect:/admin/web/login";
    }

    /**
     * Logout
     */
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/admin/web/login";
    }

    /**
     * Dashboard principal do admin
     */
    @GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        model.addAttribute("totalProdutos", cardapioService.listarTodos().size());
        model.addAttribute("totalReservas", reservaService.listarTodas().size());
        model.addAttribute("totalFavoritos", cardapioService.listarFavoritos().size());

        return "admin/dashboard";
    }

    /**
     * Lista de produtos
     */
    @GetMapping("/produtos")
    public String listarProdutos(HttpSession session, Model model,
            @RequestParam(required = false) String busca) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        if (busca != null && !busca.trim().isEmpty()) {
            model.addAttribute("produtos", cardapioService.buscarPorTermo(busca));
            model.addAttribute("busca", busca);
        } else {
            model.addAttribute("produtos", cardapioService.listarTodos());
        }

        return "admin/produtos";
    }

    /**
     * Formulário para novo produto
     */
    @GetMapping("/produtos/novo")
    public String novoProdutoForm(HttpSession session, Model model) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        model.addAttribute("produto", new Produto());
        model.addAttribute("categorias", Categoria.values());
        model.addAttribute("acao", "Criar");

        return "admin/produto-form";
    }

    /**
     * Formulário para editar produto
     */
    @GetMapping("/produtos/editar/{id}")
    public String editarProdutoForm(@PathVariable int id,
            HttpSession session,
            Model model) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        Produto produto = cardapioService.buscarPorId(id);
        if (produto == null) {
            return "redirect:/admin/web/produtos";
        }

        model.addAttribute("produto", produto);
        model.addAttribute("categorias", Categoria.values());
        model.addAttribute("acao", "Editar");

        return "admin/produto-form";
    }

    /**
     * Salvar produto (criar ou atualizar)
     */
    @PostMapping("/produtos/salvar")
    public String salvarProduto(@ModelAttribute Produto produto,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        cardapioService.salvarProduto(produto);
        redirectAttributes.addFlashAttribute("sucesso", "Produto salvo com sucesso!");

        return "redirect:/admin/web/produtos";
    }

    /**
     * Deletar produto
     */
    @PostMapping("/produtos/deletar/{id}")
    public String deletarProduto(@PathVariable int id,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        if (cardapioService.removerProduto(id)) {
            redirectAttributes.addFlashAttribute("sucesso", "Produto removido com sucesso!");
        } else {
            redirectAttributes.addFlashAttribute("erro", "Erro ao remover produto!");
        }

        return "redirect:/admin/web/produtos";
    }

    /**
     * Toggle favorito
     */
    @PostMapping("/produtos/favorito/{id}")
    public String toggleFavorito(@PathVariable int id,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        if (cardapioService.toggleFavorito(id)) {
            redirectAttributes.addFlashAttribute("sucesso", "Status de favorito atualizado!");
        }

        return "redirect:/admin/web/produtos";
    }

    /**
     * Lista de reservas
     */
    @GetMapping("/reservas")
    public String listarReservas(HttpSession session, Model model) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        model.addAttribute("reservas", reservaService.listarTodas());

        return "admin/reservas";
    }

    /**
     * Deletar reserva
     */
    @PostMapping("/reservas/deletar/{id}")
    public String deletarReserva(@PathVariable int id,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        if (reservaService.removerReserva(id)) {
            redirectAttributes.addFlashAttribute("sucesso", "Reserva removida com sucesso!");
        } else {
            redirectAttributes.addFlashAttribute("erro", "Erro ao remover reserva!");
        }

        return "redirect:/admin/web/reservas";
    }

    /**
     * Confirmar reserva
     */
    @PostMapping("/reservas/confirmar/{id}")
    public String confirmarReserva(@PathVariable int id,
            HttpSession session,
            RedirectAttributes redirectAttributes) {
        if (!isAdminLogado(session)) {
            return "redirect:/admin/web/login";
        }

        if (reservaService.confirmarReserva(id)) {
            redirectAttributes.addFlashAttribute("sucesso", "Reserva confirmada!");
        }

        return "redirect:/admin/web/reservas";
    }

    /**
     * Verifica se admin está logado
     */
    private boolean isAdminLogado(HttpSession session) {
        return Boolean.TRUE.equals(session.getAttribute("adminLogado"));
    }
}
