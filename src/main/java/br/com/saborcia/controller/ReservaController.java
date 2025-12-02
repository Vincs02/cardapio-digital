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

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {

    private final ReservaService reservaService;

    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @PostMapping
    public ResponseEntity<Reserva> criarReserva(@RequestBody ReservaRequest request) {
        Reserva reserva = new Reserva();
        reserva.setNome(request.getNome());
        reserva.setTelefone(request.getTelefone());
        reserva.setData(request.getData());
        reserva.setHorario(request.getHorario());
        reserva.setNumeroPessoas(request.getNumeroPessoas());
        reserva.setObservacoes(request.getObservacoes());

        Reserva savedReserva = reservaService.criarReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReserva);
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> listarTodas() {
        return ResponseEntity.ok(reservaService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarPorId(@PathVariable int id) {
        Reserva reserva = reservaService.buscarPorId(id);
        if (reserva != null) {
            return ResponseEntity.ok(reserva);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/confirmar")
    public ResponseEntity<Void> confirmarReserva(@PathVariable int id) {
        if (reservaService.confirmarReserva(id)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarReserva(@PathVariable int id) {
        if (reservaService.removerReserva(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    public static class ReservaRequest {
        private String nome;
        private String telefone;
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
        private LocalDate data;
        @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
        private LocalTime horario;
        private int numeroPessoas;
        private String observacoes;

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
