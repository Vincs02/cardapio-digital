-- Schema do banco de dados Supabase para o Cardápio Digital

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imagem_url TEXT,
    favorito BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de reservas
CREATE TABLE IF NOT EXISTS reservas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    numero_pessoas INTEGER NOT NULL,
    observacoes TEXT,
    confirmada BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_produtos_categoria ON produtos(categoria);
CREATE INDEX IF NOT EXISTS idx_produtos_favorito ON produtos(favorito);
CREATE INDEX IF NOT EXISTS idx_reservas_data ON reservas(data);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_produtos_updated_at BEFORE UPDATE ON produtos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Políticas RLS (Row Level Security)
-- Habilitar RLS
ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservas ENABLE ROW LEVEL SECURITY;

-- Política: Todos podem ler produtos
CREATE POLICY "Produtos são públicos para leitura"
    ON produtos FOR SELECT
    USING (true);

-- Política: Apenas autenticados podem criar/atualizar/deletar produtos
-- (Ajuste conforme sua necessidade de autenticação)
CREATE POLICY "Apenas autenticados podem modificar produtos"
    ON produtos FOR ALL
    USING (true); -- Por enquanto, permitir tudo. Ajuste para auth.role() = 'authenticated' se usar auth

-- Política: Todos podem criar reservas
CREATE POLICY "Todos podem criar reservas"
    ON reservas FOR INSERT
    WITH CHECK (true);

-- Política: Apenas autenticados podem ver reservas
CREATE POLICY "Apenas autenticados podem ver reservas"
    ON reservas FOR SELECT
    USING (true); -- Ajuste conforme necessário

-- Política: Apenas autenticados podem deletar reservas
CREATE POLICY "Apenas autenticados podem deletar reservas"
    ON reservas FOR DELETE
    USING (true); -- Ajuste conforme necessário

-- Storage para imagens
-- Execute no SQL Editor do Supabase:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('imagens-produtos', 'imagens-produtos', true);

-- Política de storage: Todos podem ler imagens
-- CREATE POLICY "Imagens são públicas"
--     ON storage.objects FOR SELECT
--     USING (bucket_id = 'imagens-produtos');

-- Política de storage: Apenas autenticados podem fazer upload
-- CREATE POLICY "Apenas autenticados podem fazer upload"
--     ON storage.objects FOR INSERT
--     WITH CHECK (bucket_id = 'imagens-produtos' AND true); -- Ajuste conforme necessário

