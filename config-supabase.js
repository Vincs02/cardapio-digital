// Configuração do Supabase para Vercel
// Este arquivo será processado pelo Vercel para injetar variáveis de ambiente

// No Vercel, as variáveis de ambiente são injetadas automaticamente
// Em desenvolvimento local, use .env.local

(function() {
    // Obter variáveis de ambiente
    const getEnvVar = (name) => {
        // Tentar diferentes formas de obter variáveis
        if (typeof process !== 'undefined' && process.env) {
            return process.env[name];
        }
        if (typeof import.meta !== 'undefined' && import.meta.env) {
            return import.meta.env[name];
        }
        // Para Vercel, as variáveis são injetadas no build
        return window.__ENV__?.[name] || '';
    };

    const supabaseUrl = getEnvVar('VITE_SUPABASE_URL');
    const supabaseKey = getEnvVar('VITE_SUPABASE_ANON_KEY');

    // Expor globalmente se disponível
    if (supabaseUrl && supabaseKey && typeof supabase !== 'undefined') {
        window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
        console.log('Supabase inicializado com sucesso');
    } else if (supabaseUrl && supabaseKey) {
        console.warn('Biblioteca Supabase não encontrada. Carregue via CDN.');
    } else {
        console.warn('Variáveis do Supabase não configuradas. Usando API local.');
    }
})();

