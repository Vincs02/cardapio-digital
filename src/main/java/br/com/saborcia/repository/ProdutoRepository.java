package br.com.saborcia.repository;

import br.com.saborcia.model.Categoria;
import br.com.saborcia.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    List<Produto> findByCategoria(Categoria categoria);

    List<Produto> findByFavoritoTrue();

    List<Produto> findByNomeContainingIgnoreCaseOrDescricaoContainingIgnoreCase(String nome, String descricao);
}
