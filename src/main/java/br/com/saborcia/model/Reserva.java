package br.com.saborcia.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservas")
public class Reserva {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @Column(nullable = false)
        private String nome;

        @Column(nullable = false)
        private String telefone;

        @Column(nullable = false)
        private LocalDate data;

        @Column(nullable = false)
        private LocalTime horario;

        @Column(name = "numero_pessoas", nullable = false)
        private int numeroPessoas;

        @Column(columnDefinition = "TEXT")
        private String observacoes;

        private boolean confirmada;

        public Reserva() {
                this.confirmada = false;
        }

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

        public boolean confirmar() {
                this.confirmada = true;
                return true;
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
