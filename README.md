# Cardápio Digital - Sabor & Cia

Sistema de Cardápio Digital desenvolvido em **Java** com **Programação Orientada a Objetos (POO)** utilizando **Spring Boot**.

## 📋 Descrição

Este projeto é uma aplicação web completa para gerenciamento de cardápio digital de restaurante, desenvolvida como trabalho acadêmico para a matéria de Programação Orientada a Objetos. O sistema permite:

- Visualização de produtos do cardápio por categoria
- Sistema de reservas de mesa
- Painel administrativo para gerenciar produtos
- Sistema de favoritos
- Interface moderna e responsiva

## 🏗️ Estrutura do Projeto (POO)

### Classes de Modelo (`br.com.saborcia.model`)

- **`Produto`**: Classe que representa um produto do cardápio
  - Atributos: id, nome, descricao, preco, categoria, imagemUrl, favorito
  - Métodos: getters/setters, toggleFavorito(), toString(), equals(), hashCode()

- **`Reserva`**: Classe que representa uma reserva de mesa
  - Atributos: id, nome, telefone, data, horario, numeroPessoas, observacoes, confirmada
  - Métodos: getters/setters, confirmar()

- **`Categoria`**: Enum que representa as categorias de produtos
  - Valores: TODOS, PIZZAS, BEBIDAS, SOBREMESAS, ENTRADAS, PRATOS
  - Método estático: fromString()

### Classes de Serviço (`br.com.saborcia.service`)

- **`CardapioService`**: Gerencia os produtos do cardápio
  - Padrão Singleton
  - Métodos: adicionarProduto(), buscarPorId(), listarTodos(), filtrarPorCategoria(), listarFavoritos(), atualizarProduto(), removerProduto(), toggleFavorito()
  - Uso de Collections (List) e Streams API

- **`ReservaService`**: Gerencia as reservas de mesa
  - Padrão Singleton
  - Métodos: criarReserva(), buscarPorId(), listarTodas(), confirmarReserva(), removerReserva()

### Classes de Controller (`br.com.saborcia.controller`)

- **`CardapioController`**: REST Controller para endpoints de produtos
  - Endpoints: GET /api/produtos, GET /api/produtos/{id}, GET /api/produtos/categoria/{categoria}, GET /api/produtos/favoritos, POST /api/produtos, PUT /api/produtos/{id}, DELETE /api/produtos/{id}, POST /api/produtos/{id}/favorito

- **`ReservaController`**: REST Controller para endpoints de reservas
  - Endpoints: POST /api/reservas, GET /api/reservas, GET /api/reservas/{id}, POST /api/reservas/{id}/confirmar

- **`WebController`**: Controller para servir páginas HTML

## 🛠️ Tecnologias Utilizadas

- **Java 17**
- **Spring Boot 3.1.5**
- **Maven** (gerenciamento de dependências)
- **HTML5, CSS3, JavaScript** (frontend)
- **REST API** (comunicação frontend-backend)

## 📦 Conceitos de POO Aplicados

1. **Encapsulamento**: Uso de atributos privados com getters/setters
2. **Herança**: (preparado para extensão futura)
3. **Polimorfismo**: Uso de interfaces e classes abstratas (Spring Boot)
4. **Abstração**: Separação de responsabilidades (Model, Service, Controller)
5. **Classes e Objetos**: Todas as entidades são representadas como classes
6. **Enum**: Categoria como enum
7. **Singleton**: Padrão aplicado nos Services
8. **Collections**: Uso de List, Streams API
9. **Anotações**: Uso de anotações Spring (@RestController, @Service, etc.)

## 🚀 Como Executar

### Pré-requisitos

- Java 17 ou superior
- Maven 3.6+ instalado
- Navegador web moderno

### Passos para Execução

1. **Clone ou baixe o projeto**

2. **Compile o projeto usando Maven:**
   ```bash
   mvn clean install
   ```

3. **Execute a aplicação:**
   ```bash
   mvn spring-boot:run
   ```
   
   Ou execute diretamente a classe `CardapioApplication.java`

4. **Acesse no navegador:**
   ```
   http://localhost:8080
   ```

## 📁 Estrutura de Diretórios

```
cardapio-menu/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── br/com/saborcia/
│   │   │       ├── CardapioApplication.java
│   │   │       ├── model/
│   │   │       │   ├── Produto.java
│   │   │       │   ├── Reserva.java
│   │   │       │   └── Categoria.java
│   │   │       ├── service/
│   │   │       │   ├── CardapioService.java
│   │   │       │   └── ReservaService.java
│   │   │       └── controller/
│   │   │           ├── CardapioController.java
│   │   │           ├── ReservaController.java
│   │   │           └── WebController.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   │           ├── index.html
│   │           ├── styles.css
│   │           └── script.js
│   └── test/
├── pom.xml
└── README.md
```

## 🎯 Funcionalidades

### Cliente
- ✅ Visualizar cardápio completo
- ✅ Filtrar produtos por categoria
- ✅ Fazer reserva de mesa
- ✅ Interface responsiva

### Administrador
- ✅ Visualizar todos os produtos
- ✅ Criar novos produtos
- ✅ Editar produtos existentes
- ✅ Excluir produtos
- ✅ Marcar/desmarcar favoritos
- ✅ Visualizar lista de favoritos

## 📝 Endpoints da API

### Produtos
- `GET /api/produtos` - Lista todos os produtos
- `GET /api/produtos/{id}` - Busca produto por ID
- `GET /api/produtos/categoria/{categoria}` - Filtra por categoria
- `GET /api/produtos/favoritos` - Lista produtos favoritos
- `POST /api/produtos` - Cria novo produto
- `PUT /api/produtos/{id}` - Atualiza produto
- `DELETE /api/produtos/{id}` - Remove produto
- `POST /api/produtos/{id}/favorito` - Alterna favorito

### Reservas
- `POST /api/reservas` - Cria nova reserva
- `GET /api/reservas` - Lista todas as reservas
- `GET /api/reservas/{id}` - Busca reserva por ID
- `POST /api/reservas/{id}/confirmar` - Confirma reserva

## 👨‍💻 Desenvolvido para

Trabalho acadêmico - Matéria de Programação Orientada a Objetos (POO)

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

