document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Dropdown Menu Toggle for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Filter Toggle
    const filterBtn = document.getElementById('filter-btn');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    
    filterBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
    });
    
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
    
    // Price Range Slider
    const priceRange = document.getElementById('price-range');
    const selectedPrice = document.getElementById('selected-price');
    
    priceRange.addEventListener('input', function() {
        const maxPrice = this.value;
        selectedPrice.textContent = `$0 - $${maxPrice}`;
    });
    
    // Color Filter
    const colorFilters = document.querySelectorAll('.color-filter');
    
    colorFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Size Filter
    const sizeFilters = document.querySelectorAll('.size-filter');
    
    sizeFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Sample product data for New Arrivals
    const newArrivals = [
        {
            id: 101,
            title: 'Floral Summer Dress',
            category: 'women',
            price: 59.99,
            oldPrice: 79.99,
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'new',
            color: 'red',
            size: ['S', 'M', 'L']
        },
        {
            id: 102,
            title: 'Denim Jacket',
            category: 'men',
            price: 89.99,
            oldPrice: 109.99,
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 5,
            badge: 'new',
            color: 'blue',
            size: ['M', 'L', 'XL']
        },
        {
            id: 103,
            title: 'Striped T-Shirt',
            category: 'men',
            price: 29.99,
            oldPrice: 39.99,
            image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 3,
            badge: null,
            color: 'black',
            size: ['S', 'M', 'L', 'XL']
        },
        {
            id: 104,
            title: 'Leather Crossbody Bag',
            category: 'accessories',
            price: 49.99,
            oldPrice: 69.99,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'new',
            color: 'black',
            size: ['One Size']
        },
        {
            id: 105,
            title: 'Linen Blouse',
            category: 'women',
            price: 39.99,
            oldPrice: 49.99,
            image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: null,
            color: 'white',
            size: ['XS', 'S', 'M']
        },
        {
            id: 106,
            title: 'Slim Fit Chinos',
            category: 'men',
            price: 49.99,
            oldPrice: 59.99,
            image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'new',
            color: 'green',
            size: ['30', '32', '34', '36']
        },
        {
            id: 107,
            title: 'Knit Sweater',
            category: 'women',
            price: 45.99,
            oldPrice: 65.99,
            image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 5,
            badge: 'new',
            color: 'yellow',
            size: ['S', 'M', 'L']
        },
        {
            id: 108,
            title: 'Canvas Sneakers',
            category: 'accessories',
            price: 59.99,
            oldPrice: 79.99,
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: null,
            color: 'white',
            size: ['7', '8', '9', '10']
        }
    ];
    
    // Display products
    function displayProducts(filter = 'all') {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        
        let filteredProducts = newArrivals;
        
        if (filter !== 'all') {
            filteredProducts = newArrivals.filter(product => product.category === filter);
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            productCard.dataset.color = product.color;
            productCard.dataset.price = product.price;
            
            let badgeHTML = '';
            if (product.badge) {
                badgeHTML = `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>`;
            }
            
            let ratingHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    ratingHTML += '<i class="fas fa-star"></i>';
                } else {
                    ratingHTML += '<i class="far fa-star"></i>';
                }
            }
            
            productCard.innerHTML = `
                ${badgeHTML}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                        <button class="add-to-wishlist" data-id="${product.id}"><i class="fas fa-heart"></i></button>
                        <button class="add-to-cart-btn" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                    </div>
                    <div class="product-rating">
                        ${ratingHTML}
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }
    
    // Initial display
    displayProducts();
    
    // Sort products
    const sortSelect = document.getElementById('sort');
    
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const productsGrid = document.querySelector('.products-grid');
        const products = Array.from(productsGrid.children);
        
        products.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            
            switch(sortValue) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'popular':
                    return Math.random() - 0.5;
                default:
                    return 0;
            }
        });
        
        products.forEach(product => productsGrid.appendChild(product));
    });
    
    // Apply filters
    const applyFiltersBtn = document.querySelector('.apply-filters');
    
    applyFiltersBtn.addEventListener('click', function() {
        const selectedColors = Array.from(document.querySelectorAll('.color-filter.active')).map(btn => btn.dataset.color);
        const selectedSizes = Array.from(document.querySelectorAll('.size-filter.active')).map(btn => btn.textContent);
        const maxPrice = parseFloat(priceRange.value);
        
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const productPrice = parseFloat(product.dataset.price);
            const productColor = product.dataset.color;
            const productSizes = product.dataset.size ? product.dataset.size.split(',') : [];
            
            let showProduct = true;
            
            // Price filter
            if (productPrice > maxPrice) {
                showProduct = false;
            }
            
            // Color filter
            if (selectedColors.length > 0 && !selectedColors.includes(productColor)) {
                showProduct = false;
            }
            
            // Size filter
            if (selectedSizes.length > 0) {
                const hasSize = selectedSizes.some(size => productSizes.includes(size));
                if (!hasSize) {
                    showProduct = false;
                }
            }
            
            if (showProduct) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
        
        sidebar.classList.remove('active');
    });
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || 
            e.target.classList.contains('add-to-cart-btn') ||
            e.target.parentElement.classList.contains('add-to-cart-btn')) {
            
            let btn;
            if (e.target.classList.contains('add-to-cart') || 
                e.target.classList.contains('add-to-cart-btn')) {
                btn = e.target;
            } else {
                btn = e.target.parentElement;
            }
            
            const productId = parseInt(btn.dataset.id);
            const product = newArrivals.find(p => p.id === productId);
            
            if (product) {
                addToCart(product);
            }
        }
    });
    
    // Cart functionality
    let cart = [];
    
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCart();
    }
    
    function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const cartSubtotal = document.querySelector('.subtotal');
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartSubtotal.textContent = '$0.00';
            cartCount.textContent = '0';
            return;
        }
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="decrease-qty" data-id="${item.id}">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button class="increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <p class="remove-item" data-id="${item.id}">Remove</p>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        cartSubtotal.textContent = `$${total.toFixed(2)}`;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === id);
                item.quantity += 1;
                updateCart();
            });
        });
        
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === id);
                
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== id);
                }
                
                updateCart();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                cart = cart.filter(item => item.id !== id);
                updateCart();
            });
        });
    }
    
    // Toggle cart
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    function toggleCart() {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
    }
    
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Quick view modal
    const quickViewModal = document.querySelector('.quick-view-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.quick-view-modal .close-modal');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quick-view') || 
            e.target.parentElement.classList.contains('quick-view')) {
            
            let btn;
            if (e.target.classList.contains('quick-view')) {
                btn = e.target;
            } else {
                btn = e.target.parentElement;
            }
            
            const productId = parseInt(btn.dataset.id);
            const product = newArrivals.find(p => p.id === productId);
            
            if (product) {
                showQuickView(product);
            }
        }
    });
    
    function showQuickView(product) {
        const quickViewContent = document.querySelector('.product-quick-view');
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>`;
        }
        
        let ratingHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= product.rating) {
                ratingHTML += '<i class="fas fa-star"></i>';
            } else {
                ratingHTML += '<i class="far fa-star"></i>';
            }
        }
        
        let sizesHTML = '';
        product.size.forEach(size => {
            sizesHTML += `<button class="size-option">${size}</button>`;
        });
        
        quickViewContent.innerHTML = `
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.title}">
                ${badgeHTML}
            </div>
            <div class="quick-view-details">
                <h3>${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                </div>
                <div class="product-rating">
                    ${ratingHTML}
                    <span class="review-count">(12 reviews)</span>
                </div>
                <p class="product-description">This stylish ${product.title.toLowerCase()} is perfect for any occasion. Made with high-quality materials for maximum comfort and durability.</p>
                
                <div class="size-selection">
                    <h4>Size:</h4>
                    <div class="size-options">
                        ${sizesHTML}
                    </div>
                </div>
                
                <div class="quantity-selection">
                    <h4>Quantity:</h4>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus">-</button>
                        <input type="text" value="1" class="quantity-input">
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                
                <button class="add-to-cart btn" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        quickViewModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Size selection
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', function() {
                sizeOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Quantity controls
        const minusBtn = document.querySelector('.quantity-btn.minus');
        const plusBtn = document.querySelector('.quantity-btn.plus');
        const quantityInput = document.querySelector('.quantity-input');
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
        
        // Add to cart from quick view
        const addToCartBtn = document.querySelector('.quick-view-details .add-to-cart');
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            const selectedSize = document.querySelector('.size-option.active');
            
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }
            
            for (let i = 0; i < quantity; i++) {
                addToCart(product);
            }
            
            closeQuickView();
        });
    }
    
    function closeQuickView() {
        quickViewModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeQuickView);
    modalOverlay.addEventListener('click', closeQuickView);
});
