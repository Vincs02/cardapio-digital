// Cliente Supabase para uso no navegador
// Carregue este arquivo ANTES do script.js no HTML

// Inicializar Supabase
let supabaseClient = null;

// Função para obter variáveis de ambiente
function getEnvVar(name) {
    // Tentar diferentes formas de obter variáveis

    // Para Vercel (produção)
    if (typeof window !== 'undefined' && window.__ENV__) {
        return window.__ENV__[name];
    }

    // Para Node.js
    if (typeof process !== 'undefined' && process.env) {
        return process.env[name];
    }

    // Tentar buscar de um objeto global
    if (typeof window !== 'undefined' && window.SUPABASE_CONFIG) {
        return window.SUPABASE_CONFIG[name];
    }
    return '';
}

// Função para inicializar Supabase
function initSupabase() {
    const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
    const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

    if (!supabaseUrl || !supabaseKey) {
        console.warn('Variáveis do Supabase não configuradas. Usando API local.');
        console.warn('Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY');
        return null;
    }

    // Se Supabase já estiver carregado via CDN
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
        console.log('✅ Supabase inicializado com sucesso!');
        return supabaseClient;
    }

    console.warn('⚠️ Biblioteca Supabase não encontrada. Carregue via CDN no HTML.');
    return null;
}

// Serviços do Supabase
const supabaseService = {
    // Produtos
    async listarProdutos() {
        if (!supabaseClient) {
            // Fallback para API local
            const response = await fetch(`${API_BASE_URL}/produtos`);
            if (response.ok) return await response.json();
            return [];
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            console.error('Erro ao listar produtos:', error);
            return [];
        }
        return data || [];
    },

    async buscarProduto(id) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
            if (response.ok) return await response.json();
            return null;
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Erro ao buscar produto:', error);
            return null;
        }
        return data;
    },

    async filtrarPorCategoria(categoria) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/categoria/${categoria}`);
            if (response.ok) return await response.json();
            return [];
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .select('*')
            .eq('categoria', categoria)
            .order('id', { ascending: true });

        if (error) {
            console.error('Erro ao filtrar produtos:', error);
            return [];
        }
        return data || [];
    },

    async buscarProdutos(termo) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/buscar?termo=${encodeURIComponent(termo)}`);
            if (response.ok) return await response.json();
            return [];
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .select('*')
            .or(`nome.ilike.%${termo}%,descricao.ilike.%${termo}%,categoria.ilike.%${termo}%`)
            .order('id', { ascending: true });

        if (error) {
            console.error('Erro na busca:', error);
            return [];
        }
        return data || [];
    },

    async listarFavoritos() {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/favoritos`);
            if (response.ok) return await response.json();
            return [];
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .select('*')
            .eq('favorito', true)
            .order('id', { ascending: true });

        if (error) {
            console.error('Erro ao listar favoritos:', error);
            return [];
        }
        return data || [];
    },

    async criarProduto(produto) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            return response.ok;
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .insert([produto])
            .select()
            .single();

        if (error) {
            console.error('Erro ao criar produto:', error);
            return null;
        }
        return data;
    },

    async atualizarProduto(id, produto) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            return response.ok;
        }

        const { data, error } = await supabaseClient
            .from('produtos')
            .update(produto)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Erro ao atualizar produto:', error);
            return null;
        }
        return data;
    },

    async deletarProduto(id) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
                method: 'DELETE'
            });
            return response.ok;
        }

        const { error } = await supabaseClient
            .from('produtos')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Erro ao deletar produto:', error);
            return false;
        }
        return true;
    },

    async toggleFavorito(id) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}/favorito`, {
                method: 'POST'
            });
            return response.ok;
        }

        // Buscar produto atual
        const produto = await this.buscarProduto(id);
        if (!produto) return false;

        const novoFavorito = !produto.favorito;
        const { error } = await supabaseClient
            .from('produtos')
            .update({ favorito: novoFavorito })
            .eq('id', id);

        if (error) {
            console.error('Erro ao alternar favorito:', error);
            return false;
        }
        return true;
    },

    // Upload de imagem
    async uploadImagem(file) {
        if (!supabaseClient) {
            // Fallback para API local
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch(`${API_BASE_URL}/upload/imagem`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const result = await response.json();
                return result.url;
            }
            throw new Error('Erro no upload');
        }

        // Gerar nome único
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 15);
        const extension = file.name.split('.').pop();
        const fileName = `${timestamp}-${random}.${extension}`;

        // Upload para Supabase Storage
        const { data, error } = await supabaseClient.storage
            .from('imagens-produtos')
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error('Erro no upload:', error);
            throw error;
        }

        // Obter URL pública
        const { data: urlData } = supabaseClient.storage
            .from('imagens-produtos')
            .getPublicUrl(fileName);

        return urlData.publicUrl;
    },

    // Reservas
    async criarReserva(reserva) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/reservas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: reserva.nome,
                    telefone: reserva.telefone,
                    data: reserva.data,
                    horario: reserva.hora,
                    numero_pessoas: reserva.numero_pessoas || parseInt(reserva.pessoas) || 1,
                    observacoes: reserva.observacoes || reserva.obs || ''
                })
            });
            if (response.ok) return await response.json();
            return null;
        }

        const { data, error } = await supabaseClient
            .from('reservas')
            .insert([{
                nome: reserva.nome,
                telefone: reserva.telefone,
                data: reserva.data,
                horario: reserva.hora,
                numero_pessoas: reserva.numero_pessoas || parseInt(reserva.pessoas) || 1,
                observacoes: reserva.observacoes || reserva.obs || ''
            }])
            .select()
            .single();

        if (error) {
            console.error('Erro ao criar reserva:', error);
            return null;
        }
        return data;
    },

    async listarReservas() {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/reservas`);
            if (response.ok) return await response.json();
            return [];
        }

        const { data, error } = await supabaseClient
            .from('reservas')
            .select('*')
            .order('data', { ascending: false })
            .order('horario', { ascending: false });

        if (error) {
            console.error('Erro ao listar reservas:', error);
            return [];
        }
        return data || [];
    },

    async deletarReserva(id) {
        if (!supabaseClient) {
            const response = await fetch(`${API_BASE_URL}/reservas/${id}`, {
                method: 'DELETE'
            });
            return response.ok;
        }

        const { error } = await supabaseClient
            .from('reservas')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Erro ao deletar reserva:', error);
            return false;
        }
        return true;
    }
};

// Inicializar quando o script carregar
if (typeof window !== 'undefined') {
    // Tentar inicializar imediatamente se a config já existir
    if (window.SUPABASE_CONFIG) {
        initSupabase();
    } else {
        // Caso contrário, aguardar o evento DOMContentLoaded ou load
        window.addEventListener('DOMContentLoaded', () => {
            // Pequeno delay para garantir que o script inline do index.html tenha rodado
            setTimeout(initSupabase, 50);
        });

        // Fallback extra caso DOMContentLoaded já tenha passado
        window.addEventListener('load', () => {
            if (!supabaseClient) initSupabase();
        });
    }
}

