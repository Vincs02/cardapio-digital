package br.com.saborcia.service;

import br.com.saborcia.model.Reserva;
import br.com.saborcia.repository.ReservaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Classe de serviço que gerencia as reservas de mesa.
 * Demonstra injeção de dependência do Spring e gerenciamento de coleções.
 */
@Service
public class ReservaService {

    private final ReservaRepository reservaRepository;

    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    /**
     * Cria uma nova reserva
     */
    public Reserva criarReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    /**
     * Busca uma reserva por ID
     */
    public Reserva buscarPorId(int id) {
        return reservaRepository.findById(id).orElse(null);
    }

    /**
     * Lista todas as reservas
     */
    public List<Reserva> listarTodas() {
        return reservaRepository.findAll();
    }

    /**
     * Confirma uma reserva
     */
    public boolean confirmarReserva(int id) {
        Reserva reserva = buscarPorId(id);
        if (reserva != null) {
            reserva.confirmar();
            reservaRepository.save(reserva);
            return true;
        }
        return false;
    }

    /**
     * Remove uma reserva
     */
    public boolean removerReserva(int id) {
        if (reservaRepository.existsById(id)) {
            reservaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
