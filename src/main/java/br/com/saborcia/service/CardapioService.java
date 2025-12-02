package br.com.saborcia.service;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import br.com.saborcia.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Classe de serviço que gerencia os produtos do cardápio.
 * Demonstra o uso de Collections, Streams e injeção de dependência do Spring.
 */
@Service
public class CardapioService {

        private final ProdutoRepository produtoRepository;

        public CardapioService(ProdutoRepository produtoRepository) {
                this.produtoRepository = produtoRepository;
        }

        /**
         * Adiciona ou atualiza um produto no banco de dados
         */
        public Produto salvarProduto(Produto produto) {
                return produtoRepository.save(produto);
        }

        /**
         * Busca um produto por ID
         */
        public Produto buscarPorId(int id) {
                return produtoRepository.findById(id).orElse(null);
        }

        /**
         * Lista todos os produtos
         */
        public List<Produto> listarTodos() {
                return produtoRepository.findAll();
        }

        /**
         * Filtra produtos por categoria
         */
        public List<Produto> filtrarPorCategoria(Categoria categoria) {
                if (categoria == Categoria.TODOS) {
                        return listarTodos();
                }
                return produtoRepository.findByCategoria(categoria);
        }

        /**
         * Lista apenas produtos favoritos
         */
        public List<Produto> listarFavoritos() {
                return produtoRepository.findByFavoritoTrue();
        }

        /**
         * Remove um produto do cardápio
         */
        public boolean removerProduto(int id) {
                if (produtoRepository.existsById(id)) {
                        produtoRepository.deleteById(id);
                        return true;
                }
                return false;
        }

        /**
         * Alterna o status de favorito de um produto
         */
        public boolean toggleFavorito(int id) {
                Produto produto = buscarPorId(id);
                if (produto != null) {
                        produto.toggleFavorito();
                        produtoRepository.save(produto);
                        return true;
                }
                return false;
        }

        /**
         * Busca produtos por termo (nome ou descrição)
         */
        public List<Produto> buscarPorTermo(String termo) {
                if (termo == null || termo.trim().isEmpty()) {
                        return listarTodos();
                }
                return produtoRepository.findByNomeContainingIgnoreCaseOrDescricaoContainingIgnoreCase(termo, termo);
        }

        /**
         * Converte texto livre da URL em enum {@link Categoria}.
         * Utilizado pelos controllers Thymeleaf.
         */
        public static Categoria categoriaFromString(String cat) {
                if (cat == null)
                        return Categoria.TODOS;
                try {
                        return Categoria.valueOf(cat.toUpperCase());
                } catch (IllegalArgumentException e) {
                        String lower = cat.toLowerCase();
                        if (lower.contains("pizza"))
                                return Categoria.PIZZAS;
                        if (lower.contains("bebida"))
                                return Categoria.BEBIDAS;
                        if (lower.contains("sobremesa"))
                                return Categoria.SOBREMESAS;
                        if (lower.contains("entrada"))
                                return Categoria.ENTRADAS;
                        if (lower.contains("prato"))
                                return Categoria.PRATOS;
                        return Categoria.TODOS;
                }
        }
}
