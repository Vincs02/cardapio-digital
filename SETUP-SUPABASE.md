# 🚀 Configuração Rápida - Supabase

## ✅ O que você já fez:
- ✅ Executou o SQL no Supabase
- ✅ Tabelas criadas

## 📋 O que você precisa fazer agora:

### 1. Obter credenciais do Supabase

1. Acesse seu projeto no [Supabase Dashboard](https://app.supabase.com)
2. Vá em **Settings** → **API**
3. Copie:
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon/public key** (chave longa)

### 2. Configurar Storage (Bucket de Imagens)

1. No Supabase, vá em **Storage**
2. Clique em **New bucket**
3. Nome: `imagens-produtos`
4. Marque como **Public bucket**
5. Clique em **Create bucket**

### 3. Configurar variáveis de ambiente

#### Para desenvolvimento local:

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
VITE_ADMIN_PASSWORD=0202
```

#### Para Vercel:

1. Acesse seu projeto na Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione:
   - `VITE_SUPABASE_URL` = sua URL do Supabase
   - `VITE_SUPABASE_ANON_KEY` = sua chave anon
   - `VITE_ADMIN_PASSWORD` = 0202

### 4. Testar localmente

1. Abra o `index.html` em um servidor local
2. Abra o console do navegador (F12)
3. Verifique se aparece: "Supabase inicializado com sucesso"

### 5. Deploy na Vercel

```bash
# Se ainda não fez:
vercel login
vercel

# Ou conecte via GitHub e faça deploy pelo dashboard
```

## 🔍 Verificar se está funcionando

1. Abra o console do navegador (F12)
2. Vá na aba **Network**
3. Recarregue a página
4. Você deve ver requisições para `supabase.co`
5. Os produtos devem carregar do Supabase

## ⚠️ Problemas comuns

### "Supabase não inicializado"
- Verifique se as variáveis de ambiente estão configuradas
- Verifique se o CDN do Supabase carregou (aba Network)

### "Erro ao carregar produtos"
- Verifique se as tabelas foram criadas corretamente
- Verifique as políticas RLS no Supabase

### "Erro no upload de imagens"
- Verifique se o bucket `imagens-produtos` foi criado
- Verifique se o bucket é público
- Verifique as políticas de storage

## 📝 Próximos passos

Após configurar, o sistema vai:
- ✅ Carregar produtos do Supabase
- ✅ Salvar novos produtos no Supabase
- ✅ Fazer upload de imagens para Supabase Storage
- ✅ Gerenciar reservas no Supabase
- ✅ Funcionar offline (fallback para API local se Supabase não disponível)

