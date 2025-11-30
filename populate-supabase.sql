-- Script para popular a tabela de produtos no Supabase
-- Execute este script no SQL Editor do Supabase (SQL Editor → New Query)

-- Limpar produtos existentes (opcional)
-- DELETE FROM produtos;

-- Inserir todos os produtos do cardápio
INSERT INTO produtos (nome, descricao, preco, categoria, imagem_url, favorito) VALUES
-- PIZZAS
('Pizza Margherita', 'Molho de tomate, mussarela fresca, manjericão e azeite de oliva extra virgem', 45.90, 'pizzas', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', false),
('Pizza Calabresa', 'Molho de tomate, mussarela, calabresa fatiada, cebola e azeitonas', 48.90, 'pizzas', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', false),
('Pizza Quatro Queijos', 'Mussarela, gorgonzola, parmesão e provolone com azeite de oliva', 52.90, 'pizzas', 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop', false),
('Pizza Portuguesa', 'Molho de tomate, mussarela, presunto, ovos, cebola e azeitonas', 49.90, 'pizzas', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', false),
('Pizza Frango com Catupiry', 'Molho de tomate, mussarela, frango desfiado e catupiry cremoso', 51.90, 'pizzas', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', false),
('Pizza Pepperoni', 'Molho de tomate, mussarela e pepperoni picante', 54.90, 'pizzas', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', false),

-- BEBIDAS
('Coca-Cola', 'Refrigerante gelado, lata 350ml', 6.50, 'bebidas', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop', false),
('Suco de Laranja Natural', 'Suco fresco de laranja, 500ml', 8.90, 'bebidas', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', false),
('Água Mineral', 'Água mineral natural, 500ml', 4.50, 'bebidas', 'https://images.unsplash.com/photo-1548839140-5a6d0e9e0f1c?w=400&h=300&fit=crop', false),
('Água com Gás', 'Água mineral com gás, 500ml', 5.50, 'bebidas', 'https://images.unsplash.com/photo-1548839140-5a6d0e9e0f1c?w=400&h=300&fit=crop', false),
('Suco de Maracujá', 'Suco natural de maracujá, 500ml', 9.90, 'bebidas', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', false),
('Cerveja Artesanal', 'Cerveja artesanal gelada, 500ml', 12.90, 'bebidas', 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop', false),

-- SOBREMESAS
('Tiramisu', 'Sobremesa italiana clássica com café, mascarpone e cacau', 18.90, 'sobremesas', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', false),
('Brownie com Sorvete', 'Brownie quentinho com sorvete de creme e calda de chocolate', 16.90, 'sobremesas', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', false),
('Petit Gateau', 'Bolinho de chocolate quente com sorvete de baunilha', 19.90, 'sobremesas', 'https://images.unsplash.com/photo-1606312619070-d48b4ddaa3b8?w=400&h=300&fit=crop', false),
('Pudim de Leite', 'Pudim de leite condensado com calda de caramelo', 15.90, 'sobremesas', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', false),
('Mousse de Chocolate', 'Mousse cremosa de chocolate ao leite', 14.90, 'sobremesas', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', false),

-- ENTRADAS
('Bruschetta', 'Pão italiano tostado com tomate, manjericão e azeite', 22.90, 'entradas', 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop', false),
('Carpaccio', 'Fatias finas de carne crua com rúcula, parmesão e azeite', 35.90, 'entradas', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', false),
('Salada Caesar', 'Alface romana, croutons, parmesão e molho caesar', 28.90, 'entradas', 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', false),
('Tábua de Queijos', 'Seleção de queijos artesanais com mel e nozes', 42.90, 'entradas', 'https://images.unsplash.com/photo-1452895917121-2518095c6244?w=400&h=300&fit=crop', false),

-- PRATOS PRINCIPAIS
('Risotto de Camarão', 'Arroz arbóreo cremoso com camarões frescos e ervas', 68.90, 'pratos', 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop', false),
('Filé Mignon', 'Filé mignon grelhado com batatas rústicas e molho especial', 79.90, 'pratos', 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', false),
('Salmão Grelhado', 'Salmão grelhado com legumes salteados e molho de ervas', 72.90, 'pratos', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop', false);
