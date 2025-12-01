# 📖 Documentação Técnica - Sabor & Arte

## 1. Visão Geral do Projeto
O **Sabor & Arte** é um cardápio digital interativo com sistema de reservas e painel administrativo. O projeto foi desenvolvido como uma Single Page Application (SPA) focada em performance, SEO e experiência do usuário (UX), utilizando tecnologias web modernas e serviços em nuvem.

---

## 2. Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível.
- **CSS3 (Vanilla)**: Estilização responsiva, variáveis CSS (Custom Properties), Flexbox e Grid. Design "Dark Mode" com acentos dourados (`#C5A059`).
- **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM, comunicação assíncrona com APIs.

### Backend & Banco de Dados
- **Supabase**: Plataforma Backend-as-a-Service (BaaS).
  - **PostgreSQL**: Banco de dados relacional.
  - **Storage**: Armazenamento de imagens dos produtos.
  - **Auth/RLS**: Segurança a nível de linha (Row Level Security).
- **Vercel Serverless Functions**: 
  - `api/admin/login.js`: Função segura para autenticação do administrador.

### Infraestrutura & Deploy
- **Vercel**: Hospedagem do frontend e funções serverless.
- **Git/GitHub**: Controle de versão.

---

## 3. Estrutura de Arquivos

```text
/
├── index.html              # Página única da aplicação (SPA)
├── styles.css              # Estilos globais e responsivos
├── script.js               # Lógica principal (UI, eventos, cache local)
├── supabase-client.js      # Camada de comunicação com o Supabase
├── package.json            # Metadados do projeto
├── vercel.json             # Configuração de deploy e headers (CORS)
└── api/
    └── admin/
        └── login.js        # Serverless function para login seguro
```

---

## 4. Funcionalidades

### 👤 Para o Cliente
1.  **Visualização de Cardápio**: Listagem de produtos com imagem, nome, descrição e preço.
2.  **Filtros por Categoria**: Pizzas, Bebidas, Sobremesas, Entradas, Pratos Principais.
3.  **Carrossel de Recomendações**: Destaque para produtos marcados como favoritos/recomendados.
4.  **Reserva de Mesa**: Formulário integrado para solicitar reservas (Nome, Telefone, Data, Hora, Pessoas).
5.  **Responsividade**: Interface adaptada para Celulares, Tablets e Desktops.

### ⚙️ Painel Administrativo
*Acesso via botão de engrenagem (⚙️) na navbar. Senha padrão: `0202`.*

1.  **Gerenciamento de Produtos (CRUD)**:
    -   Criar novos produtos (Upload de imagem ou URL).
    -   Editar produtos existentes.
    -   Excluir produtos.
    -   Marcar como "Recomendação da Casa".
2.  **Gerenciamento de Reservas**:
    -   Visualizar lista de reservas ordenadas por data.
    -   Excluir reservas atendidas ou canceladas.
3.  **Busca**: Filtrar itens do cardápio pelo nome.

---

## 5. Esquema do Banco de Dados (Supabase)

### Tabela: `produtos`
| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `int8` | Chave primária (Auto-incremento) |
| `nome` | `text` | Nome do prato/bebida |
| `descricao` | `text` | Detalhes do item |
| `preco` | `numeric` | Preço do item |
| `categoria` | `text` | Categoria (pizzas, bebidas, etc.) |
| `imagem_url` | `text` | URL da imagem (Supabase Storage ou externa) |
| `favorito` | `boolean` | Define se aparece no carrossel de destaques |

### Tabela: `reservas`
| Coluna | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `int8` | Chave primária (Auto-incremento) |
| `nome` | `text` | Nome do cliente |
| `telefone` | `text` | Contato do cliente |
| `data` | `date` | Data da reserva (YYYY-MM-DD) |
| `horario` | `time` | Hora da reserva (HH:MM:SS) |
| `numero_pessoas` | `int4` | Quantidade de pessoas |
| `observacoes` | `text` | Notas adicionais (opcional) |

---

## 6. Configuração e Variáveis de Ambiente

Para que o projeto funcione corretamente (localmente ou na Vercel), as seguintes variáveis são necessárias:

### No Frontend (`index.html` / `supabase-client.js`)
O frontend utiliza `window.SUPABASE_CONFIG` para injetar as chaves públicas.
- `VITE_SUPABASE_URL`: URL do projeto Supabase.
- `VITE_SUPABASE_ANON_KEY`: Chave pública (anon/public) do Supabase.

### No Backend (Vercel Environment Variables)
Variáveis secretas para as Serverless Functions.
- `ADMIN_PASSWORD`: Senha para acesso ao painel admin (ex: `0202`).

---

## 7. Fluxo de Dados

1.  **Inicialização**: O `supabase-client.js` inicializa a conexão usando as chaves configuradas.
2.  **Leitura**: `script.js` solicita dados via `supabaseService`. Se falhar, tenta usar `fetch` para API local ou dados mockados (fallback).
3.  **Escrita (Reservas/Produtos)**:
    -   Dados são validados no frontend.
    -   Enviados via `supabaseClient.from('tabela').insert()`.
    -   Políticas RLS (Row Level Security) no banco garantem que inserções públicas sejam permitidas na tabela `reservas`.

## 8. Como Rodar Localmente

1.  Clone o repositório.
2.  Abra o arquivo `index.html` no navegador (ou use uma extensão como "Live Server" no VS Code).
3.  Para testar a conexão com o banco real, certifique-se de que o bloco `window.SUPABASE_CONFIG` no `index.html` está descomentado e com as credenciais corretas.

---
*Documentação gerada em 01/12/2025.*
