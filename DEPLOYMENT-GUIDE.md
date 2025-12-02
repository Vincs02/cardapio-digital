# 🚀 Guia Completo de Deploy - Sabor & Arte

Este guia fornece instruções passo a passo para fazer o deploy completo da aplicação Sabor & Arte, incluindo backend Java no Railway e frontend no Vercel.

## 📋 Pré-requisitos

- ✅ Conta no [Railway](https://railway.app)
- ✅ Conta no [Vercel](https://vercel.com)
- ✅ Conta no [Supabase](https://supabase.com) (já configurada)
- ✅ Git instalado e repositório versionado
- ✅ Java 21 e Maven instalados (para testes locais)

---

## 🔧 Parte 1: Deploy do Backend (Railway)

### Passo 1: Criar Projeto no Railway

1. Acesse [railway.app](https://railway.app) e faça login
2. Clique em **"New Project"**
3. Selecione **"Deploy from GitHub repo"**
4. Conecte sua conta GitHub e selecione o repositório do projeto
5. Railway detectará automaticamente que é um projeto Java/Maven

### Passo 2: Configurar Variáveis de Ambiente

No painel do Railway, vá em **Variables** e adicione:

```env
PORT=8080
DB_URL=jdbc:postgresql://db.xcdpqxczwnfrkpkedxgw.supabase.co:5432/postgres
DB_USERNAME=postgres
DB_PASSWORD=GTI0202@
CORS_ORIGINS=*
```

> ⚠️ **Importante**: Substitua `DB_PASSWORD` pela senha real do seu banco Supabase.

### Passo 3: Deploy Automático

1. Railway iniciará o build automaticamente usando o arquivo `railway.json`
2. Aguarde o build completar (pode levar 3-5 minutos)
3. Após o deploy, Railway fornecerá uma URL pública (ex: `https://cardapio-digital-production.up.railway.app`)

### Passo 4: Testar o Backend

Abra o navegador ou use curl para testar:

```bash
curl https://sua-url-railway.up.railway.app/api/produtos
```

Você deve receber uma lista de produtos em JSON.

---

## 🎨 Parte 2: Atualizar Frontend com URL do Backend

### Passo 1: Atualizar script.js

Abra o arquivo `script.js` na raiz do projeto e atualize a linha 2:

```javascript
// ANTES:
const API_BASE_URL = 'http://localhost:8080/api';

// DEPOIS (substitua pela sua URL do Railway):
const API_BASE_URL = 'https://sua-url-railway.up.railway.app/api';
```

### Passo 2: Commit e Push

```bash
git add script.js
git commit -m "Update API_BASE_URL to Railway production URL"
git push origin main
```

---

## 🌐 Parte 3: Deploy do Frontend (Vercel)

### Opção A: Deploy via Dashboard (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe seu repositório GitHub
4. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `./`

5. Adicione as **Environment Variables**:
   ```
   VITE_SUPABASE_URL=https://xcdpqxczwnfrkpkedxgw.supabase.co
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
   ```

6. Clique em **Deploy**

### Opção B: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Adicionar variáveis de ambiente
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY

# Deploy para produção
vercel --prod
```

---

## ✅ Parte 4: Verificação Final

### Checklist de Verificação

- [ ] **Backend está rodando**: Acesse `https://sua-url-railway.up.railway.app/api/produtos` e veja os produtos
- [ ] **Frontend carrega**: Acesse a URL do Vercel e a página inicial aparece
- [ ] **Filtros funcionam**: Clique em "Pizzas", "Bebidas", etc. e veja os produtos filtrarem
- [ ] **Carrossel aparece**: Veja as recomendações da casa no topo
- [ ] **Reserva funciona**: 
  1. Clique em "Reservar Mesa"
  2. Preencha o formulário
  3. Envie
  4. Verifique no Supabase se a reserva foi salva na tabela `reservas`
- [ ] **Admin funciona**:
  1. Clique no ícone de engrenagem (⚙️)
  2. Digite a senha: `0202`
  3. Teste criar/editar/excluir produtos

### Testar Integração Backend-Frontend

1. Abra o console do navegador (F12)
2. Navegue pelo site
3. Verifique se não há erros de CORS ou 404
4. Confirme que as requisições estão indo para a URL do Railway

---

## 🔒 Segurança e Boas Práticas

### Variáveis de Ambiente

**Railway (Backend):**
- `PORT` - Porta do servidor (Railway define automaticamente)
- `DB_URL` - URL do banco Supabase
- `DB_USERNAME` - Usuário do banco
- `DB_PASSWORD` - Senha do banco (mantenha secreta!)
- `CORS_ORIGINS` - Domínios permitidos (use a URL do Vercel em produção)

**Vercel (Frontend):**
- `VITE_SUPABASE_URL` - URL pública do Supabase
- `VITE_SUPABASE_ANON_KEY` - Chave pública (anon key) do Supabase

### Melhorias de Segurança

1. **CORS Específico**: Após deploy, atualize `CORS_ORIGINS` no Railway para:
   ```
   CORS_ORIGINS=https://seu-site.vercel.app
   ```

2. **Supabase RLS**: Configure Row Level Security no Supabase:
   ```sql
   -- Permitir leitura pública de produtos
   CREATE POLICY "Produtos são públicos" ON produtos
     FOR SELECT USING (true);
   
   -- Permitir inserção pública de reservas
   CREATE POLICY "Permitir reservas públicas" ON reservas
     FOR INSERT WITH CHECK (true);
   ```

3. **HTTPS**: Railway e Vercel já fornecem HTTPS automaticamente ✅

---

## 🐛 Troubleshooting

### Problema: Backend não inicia no Railway

**Solução:**
1. Verifique os logs no Railway Dashboard
2. Confirme que as variáveis de ambiente estão corretas
3. Teste o build localmente: `mvn clean package`

### Problema: Frontend não conecta ao backend

**Solução:**
1. Verifique se `API_BASE_URL` no `script.js` está correto
2. Abra o console do navegador e veja os erros
3. Confirme que o backend está respondendo: `curl https://sua-url-railway.up.railway.app/api/produtos`

### Problema: Erro de CORS

**Solução:**
1. Verifique a variável `CORS_ORIGINS` no Railway
2. Confirme que `application.properties` tem a configuração CORS
3. Teste com `CORS_ORIGINS=*` temporariamente

### Problema: Reservas não são salvas

**Solução:**
1. Verifique as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no Vercel
2. Confirme que as políticas RLS do Supabase permitem inserção pública
3. Abra o console do navegador e veja os erros

### Problema: Imagens não aparecem

**Solução:**
1. Imagens externas (Unsplash): Verifique a conexão com internet
2. Imagens locais: Configure o bucket do Supabase Storage
3. Verifique se as URLs das imagens estão corretas no banco

---

## 📊 Monitoramento

### Railway
- Acesse o Dashboard do Railway
- Veja logs em tempo real
- Monitore uso de recursos (CPU, RAM)

### Vercel
- Acesse o Dashboard da Vercel
- Veja Analytics de acesso
- Monitore erros de runtime

### Supabase
- Acesse o Dashboard do Supabase
- Veja tabela `reservas` para novas reservas
- Monitore uso do banco de dados

---

## 🔄 Atualizações Futuras

Após o deploy inicial, qualquer commit no repositório GitHub irá:

1. **Railway**: Rebuild e redeploy automático do backend
2. **Vercel**: Rebuild e redeploy automático do frontend

Para forçar um redeploy manual:
- **Railway**: Clique em "Redeploy" no dashboard
- **Vercel**: Clique em "Redeploy" no dashboard ou use `vercel --prod`

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs no Railway e Vercel
2. Consulte a documentação:
   - [Railway Docs](https://docs.railway.app)
   - [Vercel Docs](https://vercel.com/docs)
   - [Supabase Docs](https://supabase.com/docs)
3. Verifique o console do navegador para erros JavaScript

---

**🎉 Parabéns! Seu cardápio digital está no ar!**

Compartilhe a URL do Vercel com seus clientes e comece a receber reservas online.
