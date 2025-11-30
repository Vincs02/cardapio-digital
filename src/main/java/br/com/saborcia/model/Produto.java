package br.com.saborcia.model;

import java.math.BigDecimal;

/**
 * Classe que representa um produto do cardápio.
 * Implementa os conceitos de POO: encapsulamento, construtores, getters e setters.
 */
public class Produto {
    private int id;
    private String nome;
    private String descricao;
    private BigDecimal preco;
    private Categoria categoria;
    private String imagemUrl;
    private boolean favorito;

    // Construtor padrão
    public Produto() {
        this.favorito = false;
    }

    // Construtor completo
    public Produto(int id, String nome, String descricao, BigDecimal preco, Categoria categoria, String imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.imagemUrl = imagemUrl;
        this.favorito = false;
    }

    // Getters e Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    public boolean isFavorito() {
        return favorito;
    }

    public void setFavorito(boolean favorito) {
        this.favorito = favorito;
    }

    /**
     * Método para alternar o status de favorito
     */
    public void toggleFavorito() {
        this.favorito = !this.favorito;
    }

    /**
     * Método toString para representação em string
     */
    @Override
    public String toString() {
        return "Produto{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", preco=" + preco +
                ", categoria=" + categoria +
                ", favorito=" + favorito +
                '}';
    }

    /**
     * Método equals para comparação de objetos
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Produto produto = (Produto) obj;
        return id == produto.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}

