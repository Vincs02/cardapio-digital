// Configuração da API
const API_BASE_URL = 'http://localhost:8080/api';

// Estrutura de dados dos produtos (cache local para performance)
let products = [
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Molho de tomate, mussarela fresca, manjericão e azeite de oliva extra virgem",
        price: 45.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 2,
        name: "Pizza Calabresa",
        description: "Molho de tomate, mussarela, calabresa fatiada, cebola e azeitonas",
        price: 48.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 3,
        name: "Pizza Quatro Queijos",
        description: "Mussarela, gorgonzola, parmesão e provolone com azeite de oliva",
        price: 52.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 4,
        name: "Coca-Cola",
        description: "Refrigerante gelado, lata 350ml",
        price: 6.50,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 5,
        name: "Suco de Laranja Natural",
        description: "Suco fresco de laranja, 500ml",
        price: 8.90,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 6,
        name: "Água Mineral",
        description: "Água mineral natural, 500ml",
        price: 4.50,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 7,
        name: "Tiramisu",
        description: "Sobremesa italiana clássica com café, mascarpone e cacau",
        price: 18.90,
        category: "sobremesas",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 8,
        name: "Brownie com Sorvete",
        description: "Brownie quentinho com sorvete de creme e calda de chocolate",
        price: 16.90,
        category: "sobremesas",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 9,
        name: "Petit Gateau",
        description: "Bolinho de chocolate quente com sorvete de baunilha",
        price: 19.90,
        category: "sobremesas",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 10,
        name: "Bruschetta",
        description: "Pão italiano tostado com tomate, manjericão e azeite",
        price: 22.90,
        category: "entradas",
        image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 11,
        name: "Carpaccio",
        description: "Fatias finas de carne crua com rúcula, parmesão e azeite",
        price: 35.90,
        category: "entradas",
        image: "https://images.unsplash.com/photo-1519623286303-27a177460f95?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 12,
        name: "Risotto de Camarão",
        description: "Arroz arbóreo cremoso com camarões frescos e ervas",
        price: 68.90,
        category: "pratos",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 13,
        name: "Filé Mignon",
        description: "Filé mignon grelhado com batatas rústicas e molho especial",
        price: 79.90,
        category: "pratos",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
        favorite: false
    },
    {
        id: 14,
        name: "Salmão Grelhado",
        description: "Salmão grelhado com legumes salteados e molho de ervas",
        price: 72.90,
        category: "pratos",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 16,
        name: "Pizza Portuguesa",
        description: "Molho de tomate, mussarela, presunto, ovos, cebola e azeitonas",
        price: 49.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 17,
        name: "Pizza Frango com Catupiry",
        description: "Molho de tomate, mussarela, frango desfiado e catupiry cremoso",
        price: 51.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 18,
        name: "Pizza Pepperoni",
        description: "Molho de tomate, mussarela e pepperoni picante",
        price: 54.90,
        category: "pizzas",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 19,
        name: "Água com Gás",
        description: "Água mineral com gás, 500ml",
        price: 5.50,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1548839140-5a6d0e9e0f1c?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 20,
        name: "Suco de Maracujá",
        description: "Suco natural de maracujá, 500ml",
        price: 9.90,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 21,
        name: "Cerveja Artesanal",
        description: "Cerveja artesanal gelada, 500ml",
        price: 12.90,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 22,
        name: "Pudim de Leite",
        description: "Pudim de leite condensado com calda de caramelo",
        price: 15.90,
        category: "sobremesas",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 23,
        name: "Mousse de Chocolate",
        description: "Mousse cremosa de chocolate ao leite",
        price: 14.90,
        category: "sobremesas",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 24,
        name: "Tábua de Queijos",
        description: "Seleção de queijos artesanais com mel e nozes",
        price: 42.90,
        category: "entradas",
        image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 25,
        name: "Ceviche de Peixe",
        description: "Peixe fresco marinado em limão com cebola roxa e coentro",
        price: 38.90,
        category: "entradas",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 26,
        name: "Frango Grelhado",
        description: "Peito de frango grelhado com arroz e legumes",
        price: 45.90,
        category: "pratos",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        favorite: false
    },
    {
        id: 27,
        name: "Lasanha à Bolonhesa",
        description: "Lasanha tradicional com molho bolonhesa e queijo gratinado",
        price: 58.90,
        category: "pratos",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        favorite: false
    }
];

// Estado atual do filtro
let currentFilter = 'todos';
let nextId = 28;
let nextReservaId = 1;

// Array de reservas
let reservas = [];

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para normalizar categoria
function normalizarCategoria(categoria) {
    if (!categoria) return '';

    // Se for objeto com descricao
    if (typeof categoria === 'object' && categoria.descricao) {
        return categoria.descricao.toLowerCase();
    }

    // Se for string
    if (typeof categoria === 'string') {
        return categoria.toLowerCase();
    }

    return '';
}

// Mapeamento de categorias do frontend para backend
const categoriaMap = {
    'todos': ['todos', 'all'],
    'pizzas': ['pizzas', 'pizza'],
    'bebidas': ['bebidas', 'bebida', 'drinks'],
    'sobremesas': ['sobremesas', 'sobremesa', 'desserts'],
    'entradas': ['entradas', 'entrada', 'starters'],
    'pratos': ['pratos principais', 'pratos', 'prato principal', 'main dishes', 'main']
};

// Função para renderizar produtos
function renderProducts(filterCategory = 'todos') {
    const container = document.getElementById('productsContainer');

    // Filtrar produtos
    let filteredProducts = products;

    if (filterCategory !== 'todos') {
        const categoriasFiltro = categoriaMap[filterCategory] || [filterCategory.toLowerCase()];

        filteredProducts = products.filter(product => {
            const categoriaProduto = normalizarCategoria(product.categoria || product.category);

            // Verificar se a categoria do produto corresponde ao filtro
            return categoriasFiltro.some(cat => {
                return categoriaProduto.includes(cat) || cat.includes(categoriaProduto);
            });
        });
    }

    // Limpar container
    container.innerHTML = '';

    // Renderizar produtos
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: rgba(255,255,255,0.4); font-size: 1rem; padding: 3rem;">Nenhum produto encontrado nesta categoria.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const nome = product.nome || product.name || 'Produto sem nome';
        const descricao = product.descricao || product.description || '';
        const preco = product.preco ? parseFloat(product.preco) : (product.price ? parseFloat(product.price) : 0);
        let imagem = product.imagemUrl || product.image || '';

        // Se não houver imagem, usar placeholder
        if (!imagem || imagem.trim() === '') {
            imagem = `https://via.placeholder.com/400x300/0f1419/ffffff?text=${encodeURIComponent(nome)}`;
        }

        card.innerHTML = `
            <img src="${imagem}" alt="${nome}" class="product-image" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/0f1419/ffffff?text=${encodeURIComponent(nome)}'"
                 loading="lazy">
            <div class="product-card-content">
                <h3 class="product-name">${nome}</h3>
                <p class="product-description">${descricao}</p>
                <div class="product-price">${formatPrice(preco)}</div>
            </div>
        `;
        container.appendChild(card);
    });

    // Renderizar carrossel de recomendações
    renderRecommendationsCarousel();
}

// Função para renderizar carrossel de recomendações
let currentCarouselIndex = 0;
function renderRecommendationsCarousel() {
    const container = document.getElementById('carouselContainer');
    if (!container) return;

    // Pegar produtos favoritos ou os primeiros 6 produtos como recomendações
    const recommendations = products.filter(p => {
        const favorito = p.favorito !== undefined ? p.favorito : p.favorite;
        return favorito;
    }).slice(0, 6);
    const defaultRecommendations = recommendations.length < 3
        ? products.slice(0, 6)
        : recommendations;

    if (defaultRecommendations.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = '';
    currentCarouselIndex = 0;

    defaultRecommendations.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-item';
        card.style.display = index < 3 ? 'block' : 'none';
        const nome = product.nome || product.name || 'Produto sem nome';
        const descricao = product.descricao || product.description || '';
        const preco = product.preco ? parseFloat(product.preco) : (product.price ? parseFloat(product.price) : 0);
        let imagem = product.imagemUrl || product.image || '';

        // Se não houver imagem, usar placeholder
        if (!imagem || imagem.trim() === '') {
            imagem = `https://via.placeholder.com/300x200/0f1419/ffffff?text=${encodeURIComponent(nome)}`;
        }

        card.innerHTML = `
            <img src="${imagem}" alt="${nome}" class="carousel-image" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200/0f1419/ffffff?text=${encodeURIComponent(nome)}'"
                 loading="lazy">
            <div class="carousel-content">
                <h3 class="carousel-name">${nome}</h3>
                <p class="carousel-description">${descricao}</p>
                <div class="carousel-price">${formatPrice(preco)}</div>
            </div>
        `;
        container.appendChild(card);
    });

    updateCarouselButtons();
}

// Função para atualizar botões do carrossel
function updateCarouselButtons() {
    const container = document.getElementById('carouselContainer');
    if (!container) return;

    const items = container.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (items.length <= 3) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    if (prevBtn) prevBtn.style.display = 'flex';
    if (nextBtn) nextBtn.style.display = 'flex';

    if (prevBtn) prevBtn.disabled = currentCarouselIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCarouselIndex >= items.length - 3;
}

// Função para mover carrossel
function moveCarousel(direction) {
    const container = document.getElementById('carouselContainer');
    if (!container) return;

    const items = container.querySelectorAll('.carousel-item');
    const maxIndex = Math.max(0, items.length - 3);

    if (direction === 'next') {
        currentCarouselIndex = Math.min(currentCarouselIndex + 1, maxIndex);
    } else {
        currentCarouselIndex = Math.max(currentCarouselIndex - 1, 0);
    }

    items.forEach((item, index) => {
        if (index >= currentCarouselIndex && index < currentCarouselIndex + 3) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    updateCarouselButtons();
}

// Função para atualizar botões de filtro ativos
function updateActiveFilter(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Função para abrir modal de reserva
function openReservaModal() {
    const modal = document.getElementById('reservaModal');
    modal.classList.add('active');
    // Setar data mínima como hoje e valor padrão
    const hoje = new Date().toISOString().split('T')[0];
    const dataInput = document.getElementById('reservaData');
    dataInput.min = hoje;
    dataInput.value = hoje; // Definir data padrão como hoje
    dataInput.removeAttribute('readonly'); // Garantir que não está readonly
    dataInput.removeAttribute('disabled'); // Garantir que não está desabilitado
}

// Função para fechar modal de reserva
function closeReservaModal() {
    const modal = document.getElementById('reservaModal');
    modal.classList.remove('active');
    document.getElementById('reservaForm').reset();
}

// Função para mostrar confirmação de reserva
function showReservaConfirmation(reserva) {
    // Criar elemento da mensagem de confirmação
    const confirmationDiv = document.createElement('div');
    confirmationDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                to {
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
}

// Adicionar ao body
document.body.appendChild(confirmationDiv);

// Remover após 4 segundos
setTimeout(() => {
    confirmationDiv.style.animation = 'fadeOut 0.4s ease-out forwards';
    setTimeout(() => {
        confirmationDiv.remove();
    }, 400);
}, 4000);
}

// Função para abrir modal de login admin
function openAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    modal.classList.add('active');
    document.getElementById('adminPassword').focus();
}

// Função para fechar modal de login admin
function closeAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    modal.classList.remove('active');
    document.getElementById('adminLoginForm').reset();
}

// Função para abrir modal de reserva
function openReservaModal() {
    const modal = document.getElementById('reservaModal');
    modal.classList.add('active');
    document.getElementById('reservaNome').focus();
}

// Função para fechar modal de reserva
function closeReservaModal() {
    const modal = document.getElementById('reservaModal');
    modal.classList.remove('active');
    document.getElementById('reservaForm').reset();
}

// Função para abrir modal de admin
function openAdminModal() {
    const modal = document.getElementById('adminModal');
    modal.classList.add('active');
    renderAdminItems();
    renderFavorites();
    renderReservas();
}

// Função para fechar modal de admin
function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    modal.classList.remove('active');
}

// Função para renderizar itens no admin
async function renderAdminItems(searchTerm = '') {
    const container = document.getElementById('adminItemsList');
    container.innerHTML = '';

    // Buscar produtos na API se houver termo de busca
    let filteredProducts = products;
    if (searchTerm && searchTerm.trim()) {
        filteredProducts = await buscarProdutos(searchTerm);
    }

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.4); padding: 2rem;">Nenhum item encontrado.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'admin-item';
        const categoriaNome = product.categoria ? (product.categoria.descricao || product.categoria) : product.category;
        const preco = product.preco ? parseFloat(product.preco) : product.price;
        const favorito = product.favorito !== undefined ? product.favorito : product.favorite;
        item.innerHTML = `
            <div class="admin-item-info">
                <div class="admin-item-name">${product.nome || product.name}</div>
                <div class="admin-item-details">${categoriaNome} • ${formatPrice(preco)}</div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn favorite ${favorito ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    ${favorito ? '★' : '☆'}
                </button>
                <button class="admin-btn" onclick="editProduct(${product.id})">Editar</button>
                <button class="admin-btn delete" onclick="deleteProduct(${product.id})">Excluir</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Função para renderizar favoritos
function renderFavorites() {
    const container = document.getElementById('favoritesList');
    container.innerHTML = '';

    const favorites = products.filter(p => {
        const favorito = p.favorito !== undefined ? p.favorito : p.favorite;
        return favorito;
    });

    if (favorites.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.4); padding: 2rem;">Nenhum item favoritado ainda.</p>';
        return;
    }

    favorites.forEach(product => {
        const item = document.createElement('div');
        item.className = 'admin-item';
        const categoriaNome = product.categoria ? (product.categoria.descricao || product.categoria) : product.category;
        const preco = product.preco ? parseFloat(product.preco) : product.price;
        item.innerHTML = `
            <div class="admin-item-info">
                <div class="admin-item-name">${product.nome || product.name}</div>
                <div class="admin-item-details">${categoriaNome} • ${formatPrice(preco)}</div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn favorite active" onclick="toggleFavorite(${product.id})">★</button>
                <button class="admin-btn" onclick="editProduct(${product.id})">Editar</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Função para alternar favorito
async function toggleFavorite(id) {
    const sucesso = await toggleFavoritoAPI(id);
    if (sucesso) {
        // Recarregar produtos da API
        await carregarProdutos();
        renderAdminItems();
        renderFavorites();
    }
}

let editingProductId = null;

// Função para editar produto
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    editingProductId = id;

    // Preencher formulário
    document.getElementById('itemNome').value = product.nome || product.name;
    document.getElementById('itemDescricao').value = product.descricao || product.description;
    document.getElementById('itemPreco').value = product.preco || product.price;
    const categoria = product.categoria ? (product.categoria.descricao || product.categoria) : product.category;
    document.getElementById('itemCategoria').value = categoria ? categoria.toLowerCase() : 'pizzas';
    document.getElementById('itemImagem').value = product.imagemUrl || product.image;
    document.getElementById('itemFavorito').checked = product.favorito !== undefined ? product.favorito : (product.favorite || false);

    // Limpar preview e arquivo
    document.getElementById('itemImagemFile').value = '';
    document.getElementById('imagePreview').innerHTML = '';

    // Mostrar preview da imagem atual se houver
    const imagemAtual = product.imagemUrl || product.image;
    if (imagemAtual) {
        showImagePreview(imagemAtual);
    }

    // Mudar texto do botão
    const submitBtn = document.querySelector('#createItemForm .btn-submit');
    submitBtn.textContent = 'Salvar Alterações';

    // Mudar para aba de criação
    switchAdminTab('create');
}

// Função para mostrar preview da imagem
function showImagePreview(imageSrc) {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = `
        <img src="${imageSrc}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);">
    `;
}

// Função para fazer upload de imagem
async function uploadImagem(file) {
    try {
        // Tentar Supabase primeiro
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.uploadImagem(file);
        } else {
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
            } else {
                const error = await response.json();
                throw new Error(error.erro || 'Erro ao fazer upload');
            }
        }
    } catch (error) {
        console.error('Erro no upload:', error);
        throw error;
    }
}

// Função para salvar edição
async function saveProductEdit(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    let imagemUrl = document.getElementById('itemImagem').value;

    // Se houver arquivo selecionado, fazer upload
    const fileInput = document.getElementById('itemImagemFile');
    if (fileInput.files && fileInput.files.length > 0) {
        try {
            imagemUrl = await uploadImagem(fileInput.files[0]);
        } catch (error) {
            alert('Erro ao fazer upload da imagem: ' + error.message);
            return;
        }
    }

    // Se não houver imagem (nem URL nem arquivo), usar a atual
    if (!imagemUrl || imagemUrl.trim() === '') {
        imagemUrl = product.imagemUrl || product.image || '';
    }

    const produtoAtualizado = {
        id: id,
        nome: document.getElementById('itemNome').value,
        descricao: document.getElementById('itemDescricao').value,
        preco: parseFloat(document.getElementById('itemPreco').value),
        categoria: document.getElementById('itemCategoria').value.toUpperCase(),
        imagemUrl: imagemUrl,
        favorito: document.getElementById('itemFavorito').checked
    };

    const sucesso = await atualizarProduto(id, produtoAtualizado);
    if (sucesso) {
        await carregarProdutos();
        renderAdminItems();
        renderFavorites();
        editingProductId = null;
        document.getElementById('createItemForm').reset();
        document.getElementById('imagePreview').innerHTML = '';
        const submitBtn = document.querySelector('#createItemForm .btn-submit');
        submitBtn.textContent = 'Criar Item';
        alert('Produto atualizado com sucesso!');
        switchAdminTab('list');
    } else {
        alert('Erro ao atualizar produto. Tente novamente.');
    }
}

// Função para deletar produto
async function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
        const sucesso = await deletarProdutoAPI(id);
        if (sucesso) {
            // Recarregar produtos da API
            await carregarProdutos();
            renderAdminItems();
            renderFavorites();
        } else {
            alert('Erro ao excluir o item. Tente novamente.');
        }
    }
}

// Função para renderizar reservas no admin
async function renderReservas() {
    const container = document.getElementById('reservasList');
    container.innerHTML = '';

    // Recarregar reservas da API
    await carregarReservas();

    if (reservas.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.4); padding: 2rem;">Nenhuma reserva registrada ainda.</p>';
        return;
    }

    // Ordenar reservas por data e hora (mais recentes primeiro)
    const reservasOrdenadas = [...reservas].sort((a, b) => {
        const dataA = new Date(a.data + 'T' + a.hora);
        const dataB = new Date(b.data + 'T' + b.hora);
        return dataB - dataA;
    });

    reservasOrdenadas.forEach((reserva) => {
        const item = document.createElement('div');
        item.className = 'admin-item';
        const dataFormatada = new Date(reserva.data + 'T00:00:00').toLocaleDateString('pt-BR');
        item.innerHTML = `
            <div class="admin-item-info">
                <div class="admin-item-name">${reserva.nome}</div>
                <div class="admin-item-details">
                    📞 ${reserva.telefone} • 👥 ${reserva.pessoas} pessoa${reserva.pessoas > 1 ? 's' : ''}<br>
                    📅 ${dataFormatada} às ${reserva.hora}
                    ${reserva.obs ? '<br>💬 ' + reserva.obs : ''}
                </div>
            </div>
            <div class="admin-item-actions">
                <button class="admin-btn delete" onclick="deleteReserva(${reserva.id})">Excluir</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Função para deletar reserva
async function deleteReserva(id) {
    if (confirm('Tem certeza que deseja excluir esta reserva?')) {
        const sucesso = await deletarReservaAPI(id);
        if (sucesso) {
            await renderReservas();
        } else {
            alert('Erro ao excluir reserva. Tente novamente.');
        }
    }
}

// Função para alternar abas do admin
function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach(panel => panel.classList.add('hidden'));

    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    const tabName = tab.charAt(0).toUpperCase() + tab.slice(1);
    document.getElementById(`admin${tabName}`).classList.remove('hidden');

    // Se for a aba de reservas, atualizar a lista
    if (tab === 'reservas') {
        renderReservas();
    }
}

// Função para salvar no localStorage
function saveToLocalStorage() {
    localStorage.setItem('cardapio-products', JSON.stringify(products));
    localStorage.setItem('cardapio-nextId', nextId.toString());
}

// Função para carregar do localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('cardapio-products');
    const savedId = localStorage.getItem('cardapio-nextId');
    if (saved) {
        products = JSON.parse(saved);
    }
    if (savedId) {
        nextId = parseInt(savedId);
    }
}

// Função para salvar reservas no localStorage
function saveReservasToLocalStorage() {
    localStorage.setItem('cardapio-reservas', JSON.stringify(reservas));
}

// Função para salvar próximo ID de reserva
function saveReservaIdToLocalStorage() {
    localStorage.setItem('cardapio-nextReservaId', nextReservaId.toString());
}

// Função para carregar reservas do localStorage
function loadReservasFromLocalStorage() {
    const saved = localStorage.getItem('cardapio-reservas');
    const savedId = localStorage.getItem('cardapio-nextReservaId');
    if (saved) {
        reservas = JSON.parse(saved);
    }
    if (savedId) {
        nextReservaId = parseInt(savedId);
    }
}

// Funções para comunicação com API REST / Supabase
async function carregarProdutos() {
    try {
        // Tentar usar Supabase primeiro, depois API local
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            products = await supabaseService.listarProdutos();
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos`);
            if (response.ok) {
                products = await response.json();
            } else {
                throw new Error('API não disponível');
            }
        }

        // Converter formato se necessário (Supabase retorna campos diferentes)
        products = products.map(p => ({
            id: p.id,
            nome: p.nome || p.name,
            name: p.nome || p.name,
            descricao: p.descricao || p.description,
            description: p.descricao || p.description,
            preco: p.preco || p.price,
            price: p.preco || p.price,
            categoria: p.categoria || (p.categoria_obj ? p.categoria_obj.descricao : null),
            categoria_obj: p.categoria_obj || { descricao: p.categoria },
            imagemUrl: p.imagem_url || p.imagemUrl || p.image,
            image: p.imagem_url || p.imagemUrl || p.image,
            favorito: p.favorito !== undefined ? p.favorito : (p.favorite || false),
            favorite: p.favorito !== undefined ? p.favorito : (p.favorite || false)
        }));

        renderProducts(currentFilter);
        setTimeout(() => {
            renderRecommendationsCarousel();
        }, 100);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        // Fallback para dados locais
        loadFromLocalStorage();
        renderProducts(currentFilter);
    }
}

async function salvarProduto(produto) {
    try {
        // Converter para formato Supabase
        const produtoSupabase = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            categoria: produto.categoria,
            imagem_url: produto.imagemUrl,
            favorito: produto.favorito || false
        };

        let novoProduto;
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            novoProduto = await supabaseService.criarProduto(produtoSupabase);
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            if (response.ok) {
                novoProduto = await response.json();
            } else {
                return false;
            }
        }

        if (novoProduto) {
            products.push(novoProduto);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
        return false;
    }
}

async function atualizarProduto(id, produto) {
    try {
        // Converter para formato Supabase
        const produtoSupabase = {
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            categoria: produto.categoria,
            imagem_url: produto.imagemUrl,
            favorito: produto.favorito || false
        };

        if (typeof supabaseService !== 'undefined' && supabaseService) {
            const resultado = await supabaseService.atualizarProduto(id, produtoSupabase);
            return resultado !== null;
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produto)
            });
            return response.ok;
        }
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        return false;
    }
}

async function deletarProdutoAPI(id) {
    try {
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.deletarProduto(id);
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}`, {
                method: 'DELETE'
            });
            return response.ok;
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        return false;
    }
}

async function toggleFavoritoAPI(id) {
    try {
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.toggleFavorito(id);
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos/${id}/favorito`, {
                method: 'POST'
            });
            return response.ok;
        }
    } catch (error) {
        console.error('Erro ao alternar favorito:', error);
        return false;
    }
}

async function buscarProdutos(termo) {
    try {
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.buscarProdutos(termo);
        } else {
            const response = await fetch(`${API_BASE_URL}/produtos/buscar?termo=${encodeURIComponent(termo)}`);
            if (response.ok) {
                return await response.json();
            }
            return [];
        }
    } catch (error) {
        console.error('Erro na busca:', error);
        return [];
    }
}

async function criarReservaAPI(reserva) {
    try {
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.criarReserva(reserva);
        } else {
            const response = await fetch(`${API_BASE_URL}/reservas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: reserva.nome,
                    telefone: reserva.telefone,
                    data: reserva.data,
                    horario: reserva.hora,
                    numero_pessoas: parseInt(reserva.pessoas) || 1,
                    observacoes: reserva.obs || ''
                })
            });
            if (response.ok) {
                return await response.json();
            }
            return null;
        }
    } catch (error) {
        console.error('Erro ao criar reserva:', error);
        return null;
    }
}

async function carregarReservas() {
    try {
        let reservasAPI;
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            reservasAPI = await supabaseService.listarReservas();
        } else {
            const response = await fetch(`${API_BASE_URL}/reservas`);
            if (response.ok) {
                reservasAPI = await response.json();
            } else {
                return false;
            }
        }

        reservas = reservasAPI.map(r => ({
            id: r.id,
            nome: r.nome,
            telefone: r.telefone,
            data: r.data,
            hora: r.horario || r.hora,
            pessoas: (r.numero_pessoas || r.numeroPessoas || r.pessoas).toString(),
            obs: r.observacoes || r.obs || ''
        }));
        return true;
    } catch (error) {
        console.error('Erro ao carregar reservas:', error);
        return false;
    }
}

async function deletarReservaAPI(id) {
    try {
        if (typeof supabaseService !== 'undefined' && supabaseService) {
            return await supabaseService.deletarReserva(id);
        } else {
            const response = await fetch(`${API_BASE_URL}/reservas/${id}`, {
                method: 'DELETE'
            });
            return response.ok;
        }
    } catch (error) {
        console.error('Erro ao deletar reserva:', error);
        return false;
    }
}

async function validarSenhaAdmin(senha) {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ senha: senha })
        });
        if (response.ok) {
            const result = await response.json();
            return result.autenticado;
        }
        return false;
    } catch (error) {
        console.error('Erro na autenticação:', error);
        return false;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Carregar produtos da API
    carregarProdutos();

    // Carregar reservas da API
    carregarReservas();

    // Adicionar event listeners aos botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            currentFilter = category;
            updateActiveFilter(category);
            renderProducts(category);
        });
    });

    // Event listener para botão "Reservar Mesa" (segundo botão)
    const navButtons = document.querySelectorAll('.nav-btn');
    const reservarBtn = navButtons[1]; // Segundo botão é "Reservar Mesa"
    if (reservarBtn) {
        reservarBtn.addEventListener('click', openReservaModal);
    }

    // Event listener para botão "Cardápio"
    const cardapioBtn = document.querySelector('.nav-btn.active');
    if (cardapioBtn) {
        cardapioBtn.addEventListener('click', () => {
            closeReservaModal();
            closeAdminModal();
        });
    }

    // Event listeners para modais
    document.getElementById('closeReserva').addEventListener('click', closeReservaModal);
    document.getElementById('closeAdmin').addEventListener('click', closeAdminModal);
    document.getElementById('closeAdminLogin').addEventListener('click', closeAdminLoginModal);

    // Fechar modal ao clicar fora
    document.getElementById('reservaModal').addEventListener('click', (e) => {
        if (e.target.id === 'reservaModal') closeReservaModal();
    });

    document.getElementById('adminModal').addEventListener('click', (e) => {
        if (e.target.id === 'adminModal') closeAdminModal();
    });

    document.getElementById('adminLoginModal').addEventListener('click', (e) => {
        if (e.target.id === 'adminLoginModal') closeAdminLoginModal();
    });

    // Formulário de login admin
    document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const senha = document.getElementById('adminPassword').value;

        // Validar senha na API
        const autenticado = await validarSenhaAdmin(senha);
        if (autenticado) {
            closeAdminLoginModal();
            openAdminModal();
        } else {
            alert('Senha incorreta!');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminPassword').focus();
        }
    });
    document.getElementById('createItemForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        if (editingProductId) {
            await saveProductEdit(editingProductId);
            return;
        }

        let imagemUrl = document.getElementById('itemImagem').value;

        // Se houver arquivo selecionado, fazer upload
        const fileInput = document.getElementById('itemImagemFile');
        if (fileInput.files && fileInput.files.length > 0) {
            try {
                imagemUrl = await uploadImagem(fileInput.files[0]);
            } catch (error) {
                alert('Erro ao fazer upload da imagem: ' + error.message);
                return;
            }
        }

        // Validar se tem imagem (URL ou arquivo)
        if (!imagemUrl || imagemUrl.trim() === '') {
            alert('Por favor, forneça uma imagem (URL ou arquivo)');
            return;
        }

        const newProduct = {
            nome: document.getElementById('itemNome').value,
            descricao: document.getElementById('itemDescricao').value,
            preco: parseFloat(document.getElementById('itemPreco').value),
            categoria: document.getElementById('itemCategoria').value.toUpperCase(),
            imagemUrl: imagemUrl,
            favorito: document.getElementById('itemFavorito').checked
        };

        const sucesso = await salvarProduto(newProduct);
        if (sucesso) {
            await carregarProdutos();
            renderAdminItems();
            document.getElementById('createItemForm').reset();
            document.getElementById('imagePreview').innerHTML = '';
            const submitBtn = document.querySelector('#createItemForm .btn-submit');
            submitBtn.textContent = 'Criar Item';
            alert('Item criado com sucesso!');
            switchAdminTab('list');
        } else {
            alert('Erro ao criar item. Tente novamente.');
        }
    });

    // Event listener para preview de imagem ao selecionar arquivo
    const fileInput = document.getElementById('itemImagemFile');
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Validar tipo de arquivo
                if (!file.type.startsWith('image/')) {
                    alert('Por favor, selecione um arquivo de imagem');
                    e.target.value = '';
                    return;
                }

                // Validar tamanho (máximo 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('A imagem deve ter no máximo 5MB');
                    e.target.value = '';
                    return;
                }

                // Mostrar preview
                const reader = new FileReader();
                reader.onload = (event) => {
                    showImagePreview(event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Event listener para preview ao colar URL
    const urlInput = document.getElementById('itemImagem');
    if (urlInput) {
        urlInput.addEventListener('blur', (e) => {
            const url = e.target.value.trim();
            if (url && !urlInput.files) {
                showImagePreview(url);
            }
        });
    }

    // Admin tabs
    document.querySelectorAll('.admin-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            switchAdminTab(btn.dataset.tab);
        });
    });

    // Admin trigger button - abre modal de login
    const adminTriggerNav = document.getElementById('adminTriggerNav');
    if (adminTriggerNav) {
        adminTriggerNav.addEventListener('click', openAdminLoginModal);
    }

    // Busca no admin
    const adminSearchInput = document.getElementById('adminSearchInput');
    if (adminSearchInput) {
        let searchTimeout;
        adminSearchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                renderAdminItems(e.target.value);
            }, 300); // Debounce de 300ms
        });
    }


    // Carrossel de recomendações
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => moveCarousel('prev'));
    }
    if (carouselNext) {
        carouselNext.addEventListener('click', () => moveCarousel('next'));
    }

    // Event listener para formulário de reserva
    const reservaForm = document.getElementById('reservaForm');
    if (reservaForm) {
        reservaForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const reserva = {
                nome: document.getElementById('reservaNome').value,
                telefone: document.getElementById('reservaTelefone').value,
                data: document.getElementById('reservaData').value,
                hora: document.getElementById('reservaHora').value,
                pessoas: parseInt(document.getElementById('reservaPessoas').value),
                obs: document.getElementById('reservaObs').value || ''
            };

            try {
                const sucesso = await criarReservaAPI(reserva);
                if (sucesso) {
                    closeReservaModal();
                    showReservaConfirmation(reserva);
                } else {
                    alert('Erro ao criar reserva. Tente novamente.');
                }
            } catch (error) {
                console.error('Erro ao criar reserva:', error);
                alert('Erro ao criar reserva. Tente novamente.');
            }
        });
    }
});

// Exportar funções globais
window.deleteReserva = deleteReserva;
window.moveCarousel = moveCarousel;

// Exportar funções globais
window.toggleFavorite = toggleFavorite;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
