# Instruções de Deploy na Vercel

## ⚠️ Importante: Limitações da Vercel

A Vercel é otimizada para aplicações serverless (Node.js, Python, etc.) e **não suporta aplicações Java Spring Boot nativamente**.

## 🎯 Opções de Deploy

### Opção 1: Frontend na Vercel + Backend Java Separado (Recomendado)

**Frontend (Vercel):**
- HTML, CSS, JavaScript estático
- Conecta ao backend Java via API

**Backend Java (Railway/Render/Heroku):**
- Spring Boot rodando em outra plataforma
- API REST disponível publicamente

**Vantagens:**
- Mantém toda a arquitetura Java atual
- Separação clara de responsabilidades
- Fácil de manter

### Opção 2: Frontend na Vercel + Supabase (Mais Simples)

**Frontend (Vercel):**
- HTML, CSS, JavaScript
- Conecta diretamente ao Supabase

**Backend:**
- Supabase como banco de dados e API
- Sem necessidade de servidor Java

**Vantagens:**
- Mais simples
- Totalmente serverless
- Escalável automaticamente

## 📦 Arquivos Criados

1. **vercel.json** - Configuração do Vercel
2. **package.json** - Dependências Node.js
3. **.env.example** - Exemplo de variáveis de ambiente
4. **.env.local** - Variáveis locais (não commitar)
5. **.gitignore** - Arquivos a ignorar
6. **supabase-config.js** - Cliente Supabase
7. **supabase-schema.sql** - Schema do banco
8. **README-VERCEL.md** - Documentação completa

## 🚀 Próximos Passos

### Se escolher Opção 1 (Java separado):

1. Deploy do backend Java em Railway/Render
2. Configure `VITE_API_BASE_URL` na Vercel
3. Deploy do frontend na Vercel

### Se escolher Opção 2 (Supabase):

1. Execute `supabase-schema.sql` no Supabase
2. Configure variáveis do Supabase na Vercel
3. Atualize `script.js` para usar `supabase-config.js`
4. Deploy na Vercel

## 🔧 Configuração Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Configurar .env.local
cp .env.example .env.local
# Edite .env.local com suas credenciais

# 3. Deploy na Vercel
npm i -g vercel
vercel login
vercel
```

## 📝 Variáveis de Ambiente Necessárias

### Para Supabase:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Para Backend Java (se usar):
- `VITE_API_BASE_URL`

### Outras:
- `VITE_ADMIN_PASSWORD`

