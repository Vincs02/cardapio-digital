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
        // Em produção, idealmente usaria variável de ambiente: process.env.ADMIN_PASSWORD
        const SENHA_CORRETA = process.env.VITE_ADMIN_PASSWORD || '0202';

        if (senha === SENHA_CORRETA) {
            return res.status(200).json({
                autenticado: true,
                mensagem: 'Autenticação bem-sucedida'
            });
        } else {
            return res.status(401).json({
                autenticado: false,
                mensagem: 'Senha incorreta'
            });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
