package br.com.saborcia.model;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * Classe que representa uma reserva de mesa.
 * Demonstra encapsulamento e uso de tipos de data do Java 8+.
 */
public class Reserva {
    private int id;
    private String nome;
    private String telefone;
    private LocalDate data;
    private LocalTime horario;
    private int numeroPessoas;
    private String observacoes;
    private boolean confirmada;

    // Construtor padrão
    public Reserva() {
        this.confirmada = false;
    }

    // Construtor completo
    public Reserva(int id, String nome, String telefone, LocalDate data, 
                   LocalTime horario, int numeroPessoas, String observacoes) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.data = data;
        this.horario = horario;
        this.numeroPessoas = numeroPessoas;
        this.observacoes = observacoes;
        this.confirmada = false;
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

    public boolean isConfirmada() {
        return confirmada;
    }

    public void setConfirmada(boolean confirmada) {
        this.confirmada = confirmada;
    }

    /**
     * Método para confirmar a reserva
     */
    public void confirmar() {
        this.confirmada = true;
    }

    @Override
    public String toString() {
        return "Reserva{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", telefone='" + telefone + '\'' +
                ", data=" + data +
                ", horario=" + horario +
                ", numeroPessoas=" + numeroPessoas +
                ", confirmada=" + confirmada +
                '}';
    }
}

