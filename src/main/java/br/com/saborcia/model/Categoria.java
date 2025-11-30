package br.com.saborcia.model;

/**
 * Enum que representa as categorias de produtos do cardápio.
 * Demonstra o uso de enum em POO.
 */
public enum Categoria {
    TODOS("Todos"),
    PIZZAS("Pizzas"),
    BEBIDAS("Bebidas"),
    SOBREMESAS("Sobremesas"),
    ENTRADAS("Entradas"),
    PRATOS("Pratos Principais");

    private final String descricao;

    Categoria(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }

    /**
     * Método estático para obter categoria por nome
     */
    public static Categoria fromString(String nome) {
        for (Categoria categoria : Categoria.values()) {
            if (categoria.name().equalsIgnoreCase(nome) || 
                categoria.descricao.equalsIgnoreCase(nome)) {
                return categoria;
            }
        }
        return TODOS;
    }
}

