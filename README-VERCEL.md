# Deploy na Vercel - Cardápio Digital

## 📋 Pré-requisitos

1. Conta na [Vercel](https://vercel.com)
2. Conta no [Supabase](https://supabase.com)
3. Node.js instalado (para desenvolvimento local)

## 🚀 Configuração do Supabase

### 1. Criar projeto no Supabase

1. Acesse [app.supabase.com](https://app.supabase.com)
2. Crie um novo projeto
3. Anote a URL do projeto e a chave anônima (anon key)

### 2. Configurar banco de dados

1. No Supabase, vá em **SQL Editor**
2. Execute o script `supabase-schema.sql` para criar as tabelas
3. Vá em **Storage** e crie um bucket chamado `imagens-produtos`
4. Configure o bucket como público

### 3. Configurar Storage

No SQL Editor do Supabase, execute:

```sql
-- Criar bucket (se ainda não existir)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('imagens-produtos', 'imagens-produtos', true)
ON CONFLICT (id) DO NOTHING;

-- Política: Todos podem ler imagens
CREATE POLICY "Imagens são públicas"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'imagens-produtos');

-- Política: Permitir upload (ajuste conforme necessário)
CREATE POLICY "Permitir upload de imagens"
    ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'imagens-produtos');
```

## 🔧 Configuração Local

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

1. Copie `.env.example` para `.env.local`
2. Preencha com suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon
VITE_ADMIN_PASSWORD=0202
```

## 🚀 Deploy na Vercel

### Opção 1: Via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Configure o projeto:
```bash
vercel
```

4. Adicione as variáveis de ambiente:
```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add VITE_ADMIN_PASSWORD
```

5. Faça o deploy:
```bash
vercel --prod
```

### Opção 2: Via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Add New Project**
3. Conecte seu repositório Git (GitHub, GitLab, etc.)
4. Configure o projeto:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (deixe vazio ou `npm run build`)
   - **Output Directory**: ./

5. Adicione as variáveis de ambiente:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_ADMIN_PASSWORD`

6. Clique em **Deploy**

## 📝 Notas Importantes

### Backend Java

O backend Spring Boot não roda na Vercel. Você tem duas opções:

1. **Usar apenas Supabase** (recomendado):
   - O frontend se conecta diretamente ao Supabase
   - Todas as operações são feitas via Supabase Client
   - Mais simples e serverless

2. **Manter backend Java separado**:
   - Deploy do Java em Railway, Render, ou Heroku
   - Frontend na Vercel se conecta ao backend Java
   - Mais complexo, mas mantém a arquitetura atual

### Migração para Supabase

Para migrar completamente para Supabase:

1. Atualize `script.js` para usar `supabase-config.js`
2. Substitua todas as chamadas de API por funções do Supabase
3. Configure as políticas RLS conforme necessário

## 🔒 Segurança

- Nunca commite o arquivo `.env.local`
- Use variáveis de ambiente na Vercel
- Configure políticas RLS no Supabase adequadamente
- A senha do admin está em variável de ambiente

## 📚 Recursos

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

