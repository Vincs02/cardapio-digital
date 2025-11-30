package br.com.saborcia.service;

import org.springframework.stereotype.Service;

/**
 * Classe de serviço para autenticação administrativa.
 * Demonstra encapsulamento e segurança básica em POO.
 */
@Service
public class AdminService {
    
    // Senha administrativa (encapsulada)
    private static final String SENHA_ADMIN = "0202";
    
    /**
     * Valida a senha do administrador
     * @param senha Senha fornecida
     * @return true se a senha estiver correta, false caso contrário
     */
    public boolean validarSenha(String senha) {
        if (senha == null) {
            return false;
        }
        return SENHA_ADMIN.equals(senha);
    }
    
    /**
     * Método para verificar se uma requisição está autenticada
     * @param senhaFornecida Senha fornecida na requisição
     * @return true se autenticado, false caso contrário
     */
    public boolean isAutenticado(String senhaFornecida) {
        return validarSenha(senhaFornecida);
    }
}

