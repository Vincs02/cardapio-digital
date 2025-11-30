// Configuração do Supabase
import { createClient } from '@supabase/supabase-js';

// Obter variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://xcdpqxczwnfrkpkedxgw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZHBxeGN6d25mcmtwa2VkeGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MzYxNjUsImV4cCI6MjA4MDExMjE2NX0.VH_bXfzd_2Y664bfIYwWvjqX-L-rAuUgDlY2rmPFFAs';

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Funções auxiliares para o cardápio
export const cardapioService = {
    // Listar todos os produtos
    async listarProdutos() {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .order('id', { ascending: true });
        
        if (error) throw error;
        return data;
    },

    // Buscar produto por ID
    async buscarProduto(id) {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) throw error;
        return data;
    },

    // Filtrar por categoria
    async filtrarPorCategoria(categoria) {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('categoria', categoria)
            .order('id', { ascending: true });
        
        if (error) throw error;
        return data;
    },

    // Buscar produtos
    async buscarProdutos(termo) {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .or(`nome.ilike.%${termo}%,descricao.ilike.%${termo}%,categoria.ilike.%${termo}%`)
            .order('id', { ascending: true });
        
        if (error) throw error;
        return data;
    },

    // Listar favoritos
    async listarFavoritos() {
        const { data, error } = await supabase
            .from('produtos')
            .select('*')
            .eq('favorito', true)
            .order('id', { ascending: true });
        
        if (error) throw error;
        return data;
    },

    // Criar produto
    async criarProduto(produto) {
        const { data, error } = await supabase
            .from('produtos')
            .insert([produto])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    // Atualizar produto
    async atualizarProduto(id, produto) {
        const { data, error } = await supabase
            .from('produtos')
            .update(produto)
            .eq('id', id)
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    // Deletar produto
    async deletarProduto(id) {
        const { error } = await supabase
            .from('produtos')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    },

    // Alternar favorito
    async toggleFavorito(id) {
        // Buscar produto atual
        const produto = await this.buscarProduto(id);
        const novoFavorito = !produto.favorito;
        
        const { error } = await supabase
            .from('produtos')
            .update({ favorito: novoFavorito })
            .eq('id', id);
        
        if (error) throw error;
        return true;
    },

    // Upload de imagem
    async uploadImagem(file, nomeArquivo) {
        const { data, error } = await supabase.storage
            .from('imagens-produtos')
            .upload(nomeArquivo, file, {
                cacheControl: '3600',
                upsert: false
            });
        
        if (error) throw error;
        
        // Obter URL pública
        const { data: urlData } = supabase.storage
            .from('imagens-produtos')
            .getPublicUrl(nomeArquivo);
        
        return urlData.publicUrl;
    }
};

// Funções para reservas
export const reservaService = {
    // Criar reserva
    async criarReserva(reserva) {
        const { data, error } = await supabase
            .from('reservas')
            .insert([reserva])
            .select()
            .single();
        
        if (error) throw error;
        return data;
    },

    // Listar todas as reservas
    async listarReservas() {
        const { data, error } = await supabase
            .from('reservas')
            .select('*')
            .order('data', { ascending: false })
            .order('horario', { ascending: false });
        
        if (error) throw error;
        return data;
    },

    // Deletar reserva
    async deletarReserva(id) {
        const { error } = await supabase
            .from('reservas')
            .delete()
            .eq('id', id);
        
        if (error) throw error;
        return true;
    }
};

