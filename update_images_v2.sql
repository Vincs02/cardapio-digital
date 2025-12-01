-- Script para atualizar as URLs das imagens com links de alta qualidade
-- Execute este script no SQL Editor do Supabase

-- PIZZAS
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Margherita';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Calabresa';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Quatro Queijos';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Portuguesa';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Frango com Catupiry';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pizza Pepperoni';

-- BEBIDAS
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Coca-Cola';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Suco de Laranja Natural';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Água Mineral';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Água com Gás';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Suco de Maracujá';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Cerveja Artesanal';

-- SOBREMESAS
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Tiramisu';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Brownie com Sorvete';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Petit Gateau';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Pudim de Leite';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Mousse de Chocolate';

-- ENTRADAS
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1572441713132-51c75654db73?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Bruschetta';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1519623286303-27a177460f95?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Carpaccio';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Salada Caesar';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Tábua de Queijos';

-- PRATOS PRINCIPAIS
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Risotto de Camarão';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Filé Mignon';
UPDATE produtos SET imagem_url = 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80' WHERE nome = 'Salmão Grelhado';
