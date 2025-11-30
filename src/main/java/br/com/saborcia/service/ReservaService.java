package br.com.saborcia.service;

import br.com.saborcia.model.Reserva;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Classe de serviço que gerencia as reservas de mesa.
 * Demonstra injeção de dependência do Spring e gerenciamento de coleções.
 */
@Service
public class ReservaService {
    private List<Reserva> reservas;
    private int proximoId;

    // Construtor para injeção de dependência do Spring
    public ReservaService() {
        this.reservas = new ArrayList<>();
        this.proximoId = 1;
    }

    /**
     * Cria uma nova reserva
     */
    public Reserva criarReserva(String nome, String telefone, LocalDate data,
                                LocalTime horario, int numeroPessoas, String observacoes) {
        Reserva reserva = new Reserva(proximoId++, nome, telefone, data, horario, numeroPessoas, observacoes);
        reservas.add(reserva);
        return reserva;
    }

    /**
     * Busca uma reserva por ID
     */
    public Reserva buscarPorId(int id) {
        return reservas.stream()
                .filter(r -> r.getId() == id)
                .findFirst()
                .orElse(null);
    }

    /**
     * Lista todas as reservas
     */
    public List<Reserva> listarTodas() {
        return new ArrayList<>(reservas);
    }

    /**
     * Confirma uma reserva
     */
    public boolean confirmarReserva(int id) {
        Reserva reserva = buscarPorId(id);
        if (reserva != null) {
            reserva.confirmar();
            return true;
        }
        return false;
    }

    /**
     * Remove uma reserva
     */
    public boolean removerReserva(int id) {
        return reservas.removeIf(r -> r.getId() == id);
    }
}

