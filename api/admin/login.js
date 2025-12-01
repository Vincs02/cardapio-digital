export default function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Responder a preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { senha } = req.body;

        // Senha hardcoded para manter compatibilidade com o backend Java original
        // Vercel serverless functions não têm acesso a variáveis VITE_*
        const SENHA_CORRETA = process.env.ADMIN_PASSWORD || '0202';

        // Trim para evitar problemas com espaços
        const senhaLimpa = senha?.trim();
        const senhaCorretaLimpa = SENHA_CORRETA.trim();

        if (senhaLimpa === senhaCorretaLimpa) {
            return res.status(200).json({
                autenticado: true,
                mensagem: 'Autenticação bem-sucedida'
            });
        } else {
            // Log para debug (remover em produção se necessário)
            console.log('Tentativa de login falhou. Senha recebida:', senhaLimpa?.substring(0, 2) + '***');
            return res.status(401).json({
                autenticado: false,
                mensagem: 'Senha incorreta'
            });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
