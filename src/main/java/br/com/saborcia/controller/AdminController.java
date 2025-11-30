package br.com.saborcia.controller;

import br.com.saborcia.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller REST para autenticação administrativa.
 * Demonstra o uso de controllers e validação de acesso.
 */
@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    private final AdminService adminService;

    // Injeção de dependência via construtor
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    /**
     * Endpoint para autenticação do administrador
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        boolean autenticado = adminService.validarSenha(request.getSenha());
        
        if (autenticado) {
            return ResponseEntity.ok(new AuthResponse(true, "Autenticação bem-sucedida"));
        } else {
            return ResponseEntity.status(401).body(new AuthResponse(false, "Senha incorreta"));
        }
    }

    /**
     * Classe interna para receber dados de login
     * Demonstra o uso de classes internas em POO
     */
    public static class LoginRequest {
        private String senha;

        public String getSenha() {
            return senha;
        }

        public void setSenha(String senha) {
            this.senha = senha;
        }
    }

    /**
     * Classe interna para resposta de autenticação
     * Demonstra o uso de classes internas em POO
     */
    public static class AuthResponse {
        private boolean autenticado;
        private String mensagem;

        public AuthResponse(boolean autenticado, String mensagem) {
            this.autenticado = autenticado;
            this.mensagem = mensagem;
        }

        public boolean isAutenticado() {
            return autenticado;
        }

        public void setAutenticado(boolean autenticado) {
            this.autenticado = autenticado;
        }

        public String getMensagem() {
            return mensagem;
        }

        public void setMensagem(String mensagem) {
            this.mensagem = mensagem;
        }
    }
}

