package br.com.saborcia.service;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Classe de serviço que gerencia os produtos do cardápio.
 * Demonstra o uso de Collections, Streams e injeção de dependência do Spring.
 */
@Service
public class CardapioService {
    private List<Produto> produtos;
    private int proximoId;

    // Construtor para injeção de dependência do Spring
    public CardapioService() {
        this.produtos = new ArrayList<>();
        this.proximoId = 1;
        inicializarProdutos();
    }

    /**
     * Inicializa o cardápio com produtos padrão
     */
    private void inicializarProdutos() {
        adicionarProduto(new Produto(proximoId++, "Pizza Margherita",
                "Molho de tomate, mussarela fresca, manjericão e azeite de oliva extra virgem",
                new BigDecimal("45.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Pizza Calabresa",
                "Molho de tomate, mussarela, calabresa fatiada, cebola e azeitonas",
                new BigDecimal("48.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Pizza Quatro Queijos",
                "Mussarela, gorgonzola, parmesão e provolone com azeite de oliva",
                new BigDecimal("52.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Coca-Cola",
                "Refrigerante gelado, lata 350ml",
                new BigDecimal("6.50"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Suco de Laranja Natural",
                "Suco fresco de laranja, 500ml",
                new BigDecimal("8.90"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Água Mineral",
                "Água mineral natural, 500ml",
                new BigDecimal("4.50"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1548839140-5a6d0e9e0f1c?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Tiramisu",
                "Sobremesa italiana clássica com café, mascarpone e cacau",
                new BigDecimal("18.90"), Categoria.SOBREMESAS,
                "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Brownie com Sorvete",
                "Brownie quentinho com sorvete de creme e calda de chocolate",
                new BigDecimal("16.90"), Categoria.SOBREMESAS,
                "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Petit Gateau",
                "Bolinho de chocolate quente com sorvete de baunilha",
                new BigDecimal("19.90"), Categoria.SOBREMESAS,
                "https://images.unsplash.com/photo-1606312619070-d48b4ddaa3b8?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Bruschetta",
                "Pão italiano tostado com tomate, manjericão e azeite",
                new BigDecimal("22.90"), Categoria.ENTRADAS,
                "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Carpaccio",
                "Fatias finas de carne crua com rúcula, parmesão e azeite",
                new BigDecimal("35.90"), Categoria.ENTRADAS,
                "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Salada Caesar",
                "Alface romana, croutons, parmesão e molho caesar",
                new BigDecimal("28.90"), Categoria.ENTRADAS,
                "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Risotto de Camarão",
                "Arroz arbóreo cremoso com camarões frescos e ervas",
                new BigDecimal("68.90"), Categoria.PRATOS,
                "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Filé Mignon",
                "Filé mignon grelhado com batatas rústicas e molho especial",
                new BigDecimal("79.90"), Categoria.PRATOS,
                "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Salmão Grelhado",
                "Salmão grelhado com legumes salteados e molho de ervas",
                new BigDecimal("72.90"), Categoria.PRATOS,
                "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"));

        // Produtos adicionais
        adicionarProduto(new Produto(proximoId++, "Pizza Portuguesa",
                "Molho de tomate, mussarela, presunto, ovos, cebola e azeitonas",
                new BigDecimal("49.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Pizza Frango com Catupiry",
                "Molho de tomate, mussarela, frango desfiado e catupiry cremoso",
                new BigDecimal("51.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Pizza Pepperoni",
                "Molho de tomate, mussarela e pepperoni picante",
                new BigDecimal("54.90"), Categoria.PIZZAS,
                "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Água com Gás",
                "Água mineral com gás, 500ml",
                new BigDecimal("5.50"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1548839140-5a6d0e9e0f1c?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Suco de Maracujá",
                "Suco natural de maracujá, 500ml",
                new BigDecimal("9.90"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Cerveja Artesanal",
                "Cerveja artesanal gelada, 500ml",
                new BigDecimal("12.90"), Categoria.BEBIDAS,
                "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Pudim de Leite",
                "Pudim de leite condensado com calda de caramelo",
                new BigDecimal("15.90"), Categoria.SOBREMESAS,
                "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Mousse de Chocolate",
                "Mousse cremosa de chocolate ao leite",
                new BigDecimal("14.90"), Categoria.SOBREMESAS,
                "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Tábua de Queijos",
                "Seleção de queijos artesanais com mel e nozes",
                new BigDecimal("42.90"), Categoria.ENTRADAS,
                "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Ceviche de Peixe",
                "Peixe fresco marinado em limão com cebola roxa e coentro",
                new BigDecimal("38.90"), Categoria.ENTRADAS,
                "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Frango Grelhado",
                "Peito de frango grelhado com arroz e legumes",
                new BigDecimal("45.90"), Categoria.PRATOS,
                "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"));

        adicionarProduto(new Produto(proximoId++, "Lasanha à Bolonhesa",
                "Lasanha tradicional com molho bolonhesa e queijo gratinado",
                new BigDecimal("58.90"), Categoria.PRATOS,
                "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"));
    }

    /**
     * Adiciona um novo produto ao cardápio
     */
    public void adicionarProduto(Produto produto) {
        if (produto.getId() == 0) {
            produto.setId(proximoId++);
        }
        produtos.add(produto);
    }

    /**
     * Busca um produto por ID
     */
    public Produto buscarPorId(int id) {
        return produtos.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);
    }

    /**
     * Lista todos os produtos
     */
    public List<Produto> listarTodos() {
        return new ArrayList<>(produtos);
    }

    /**
     * Filtra produtos por categoria usando Stream API
     */
    public List<Produto> filtrarPorCategoria(Categoria categoria) {
        if (categoria == Categoria.TODOS) {
            return listarTodos();
        }
        return produtos.stream()
                .filter(p -> p.getCategoria() == categoria)
                .collect(Collectors.toList());
    }

    /**
     * Lista apenas produtos favoritos
     */
    public List<Produto> listarFavoritos() {
        return produtos.stream()
                .filter(Produto::isFavorito)
                .collect(Collectors.toList());
    }

    /**
     * Atualiza um produto existente
     */
    public boolean atualizarProduto(Produto produtoAtualizado) {
        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).getId() == produtoAtualizado.getId()) {
                produtos.set(i, produtoAtualizado);
                return true;
            }
        }
        return false;
    }

    /**
     * Remove um produto do cardápio
     */
    public boolean removerProduto(int id) {
        return produtos.removeIf(p -> p.getId() == id);
    }

    /**
     * Alterna o status de favorito de um produto
     */
    public boolean toggleFavorito(int id) {
        Produto produto = buscarPorId(id);
        if (produto != null) {
            produto.toggleFavorito();
            return true;
        }
        return false;
    }

    /**
     * Busca produtos por termo (nome, descrição ou categoria)
     * Demonstra o uso de Stream API e filtros complexos
     */
    public List<Produto> buscarPorTermo(String termo) {
        if (termo == null || termo.trim().isEmpty()) {
            return listarTodos();
        }
        
        String termoLower = termo.toLowerCase().trim();
        return produtos.stream()
                .filter(p -> p.getNome().toLowerCase().contains(termoLower) ||
                           p.getDescricao().toLowerCase().contains(termoLower) ||
                           p.getCategoria().getDescricao().toLowerCase().contains(termoLower))
                .collect(Collectors.toList());
    }
}

