package br.com.saborcia.controller;

import br.com.saborcia.model.Reserva;
import br.com.saborcia.service.ReservaService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

/**
 * Controller REST que gerencia as requisições relacionadas a reservas.
 * Demonstra tratamento de requisições HTTP e validação.
 */
@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {

    private final ReservaService reservaService;

    // Injeção de dependência via construtor
    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    /**
     * Endpoint para criar uma nova reserva
     */
    @PostMapping
    public ResponseEntity<Reserva> criarReserva(@RequestBody ReservaRequest request) {
        Reserva reserva = reservaService.criarReserva(
                request.getNome(),
                request.getTelefone(),
                request.getData(),
                request.getHorario(),
                request.getNumeroPessoas(),
                request.getObservacoes()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(reserva);
    }

    /**
     * Endpoint para listar todas as reservas
     */
    @GetMapping
    public ResponseEntity<List<Reserva>> listarTodas() {
        List<Reserva> reservas = reservaService.listarTodas();
        return ResponseEntity.ok(reservas);
    }

    /**
     * Endpoint para buscar reserva por ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarPorId(@PathVariable int id) {
        Reserva reserva = reservaService.buscarPorId(id);
        if (reserva != null) {
            return ResponseEntity.ok(reserva);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para confirmar uma reserva
     */
    @PostMapping("/{id}/confirmar")
    public ResponseEntity<Void> confirmarReserva(@PathVariable int id) {
        boolean sucesso = reservaService.confirmarReserva(id);
        if (sucesso) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Endpoint para deletar uma reserva
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarReserva(@PathVariable int id) {
        boolean removido = reservaService.removerReserva(id);
        if (removido) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Classe interna para receber dados da requisição
     * Demonstra o uso de classes internas em POO
     */
    public static class ReservaRequest {
        private String nome;
        private String telefone;
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
        private LocalDate data;
        @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
        private LocalTime horario;
        private int numeroPessoas;
        private String observacoes;

        // Getters e Setters
        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public String getTelefone() {
            return telefone;
        }

        public void setTelefone(String telefone) {
            this.telefone = telefone;
        }

        public LocalDate getData() {
            return data;
        }

        public void setData(LocalDate data) {
            this.data = data;
        }

        public LocalTime getHorario() {
            return horario;
        }

        public void setHorario(LocalTime horario) {
            this.horario = horario;
        }

        public int getNumeroPessoas() {
            return numeroPessoas;
        }

        public void setNumeroPessoas(int numeroPessoas) {
            this.numeroPessoas = numeroPessoas;
        }

        public String getObservacoes() {
            return observacoes;
        }

        public void setObservacoes(String observacoes) {
            this.observacoes = observacoes;
        }
    }
}

