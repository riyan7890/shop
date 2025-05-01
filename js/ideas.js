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
    
    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const endDate = new Date();
        endDate.setDate(now.getDate() + 3); // Sale ends in 3 days
        
        const diff = endDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Sample deals data
    const deals = [
        {
            id: 201,
            title: 'Summer Dress',
            category: 'women',
            price: 39.99,
            oldPrice: 59.99,
            discount: '30% OFF',
            image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 202,
            title: 'Casual Shirt',
            category: 'men',
            price: 29.99,
            oldPrice: 39.99,
            discount: '25% OFF',
            image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 3,
            badge: 'sale'
        },
        {
            id: 203,
            title: 'Leather Handbag',
            category: 'accessories',
            price: 49.99,
            oldPrice: 79.99,
            discount: '40% OFF',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 5,
            badge: 'sale'
        },
        {
            id: 204,
            title: 'Slim Fit Jeans',
            category: 'men',
            price: 44.99,
            oldPrice: 59.99,
            discount: '25% OFF',
            image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 205,
            title: 'Knit Sweater',
            category: 'women',
            price: 35.99,
            oldPrice: 49.99,
            discount: '30% OFF',
            image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 206,
            title: 'Canvas Sneakers',
            category: 'accessories',
            price: 49.99,
            oldPrice: 69.99,
            discount: '30% OFF',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 207,
            title: 'Denim Jacket',
            category: 'men',
            price: 59.99,
            oldPrice: 89.99,
            discount: '35% OFF',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 5,
            badge: 'sale'
        },
        {
            id: 208,
            title: 'Silk Blouse',
            category: 'women',
            price: 34.99,
            oldPrice: 49.99,
            discount: '30% OFF',
            image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            rating: 4,
            badge: 'sale'
        }
    ];
    
    // Display deals
    function displayDeals(filter = 'all') {
        const allDealsGrid = document.getElementById('all-deals').querySelector('.deals-grid');
        const womenDealsGrid = document.getElementById('women-deals').querySelector('.deals-grid');
        const menDealsGrid = document.getElementById('men-deals').querySelector('.deals-grid');
        const accessoriesDealsGrid = document.getElementById('accessories-deals').querySelector('.deals-grid');
        
        allDealsGrid.innerHTML = '';
        womenDealsGrid.innerHTML = '';
        menDealsGrid.innerHTML = '';
        accessoriesDealsGrid.innerHTML = '';
        
        deals.forEach(deal => {
            const dealCard = document.createElement('div');
            dealCard.className = 'deal-card';
            
            let ratingHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= deal.rating) {
                    ratingHTML += '<i class="fas fa-star"></i>';
                } else {
                    ratingHTML += '<i class="far fa-star"></i>';
                }
            }
            
            dealCard.innerHTML = `
                <span class="deal-badge">${deal.discount}</span>
                <div class="deal-image">
                    <img src="${deal.image}" alt="${deal.title}">
                    <div class="product-actions">
                        <button class="quick-view" data-id="${deal.id}"><i class="fas fa-eye"></i></button>
                        <button class="add-to-wishlist" data-id="${deal.id}"><i class="fas fa-heart"></i></button>
                        <button class="add-to-cart-btn" data-id="${deal.id}"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <div class="deal-info">
                    <h3 class="deal-title">${deal.title}</h3>
                    <div class="deal-price">
                        <span class="current-price">$${deal.price.toFixed(2)}</span>
                        <span class="old-price">$${deal.oldPrice.toFixed(2)}</span>
                    </div>
                    <div class="product-rating">
                        ${ratingHTML}
                    </div>
                    <button class="add-to-cart" data-id="${deal.id}">Add to Cart</button>
                </div>
            `;
            
            allDealsGrid.appendChild(dealCard.cloneNode(true));
            
            if (deal.category === 'women') {
                womenDealsGrid.appendChild(dealCard.cloneNode(true));
            } else if (deal.category === 'men') {
                menDealsGrid.appendChild(dealCard.cloneNode(true));
            } else if (deal.category === 'accessories') {
                accessoriesDealsGrid.appendChild(dealCard.cloneNode(true));
            }
        });
    }
    
    // Initial display
    displayDeals();
    
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
            
            const dealId = parseInt(btn.dataset.id);
            const deal = deals.find(d => d.id === dealId);
            
            if (deal) {
                addToCart(deal);
            }
        }
    });
    
    // Cart functionality
    let cart = [];
    
    function addToCart(deal) {
        const existingItem = cart.find(item => item.id === deal.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: deal.id,
                title: deal.title,
                price: deal.price,
                image: deal.image,
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
            
            const dealId = parseInt(btn.dataset.id);
            const deal = deals.find(d => d.id === dealId);
            
            if (deal) {
                showQuickView(deal);
            }
        }
    });
    
    function showQuickView(deal) {
        const quickViewContent = document.querySelector('.product-quick-view');
        
        let ratingHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= deal.rating) {
                ratingHTML += '<i class="fas fa-star"></i>';
            } else {
                ratingHTML += '<i class="far fa-star"></i>';
            }
        }
        
        quickViewContent.innerHTML = `
            <div class="quick-view-image">
                <img src="${deal.image}" alt="${deal.title}">
                <span class="product-badge sale">SALE</span>
            </div>
            <div class="quick-view-details">
                <h3>${deal.title}</h3>
                <div class="product-price">
                    <span class="current-price">$${deal.price.toFixed(2)}</span>
                    <span class="old-price">$${deal.oldPrice.toFixed(2)}</span>
                    <span class="discount">${deal.discount}</span>
                </div>
                <div class="product-rating">
                    ${ratingHTML}
                    <span class="review-count">(8 reviews)</span>
                </div>
                <p class="product-description">This ${deal.title.toLowerCase()} is on sale for a limited time only! Don't miss this amazing deal on a high-quality fashion item.</p>
                
                <div class="size-selection">
                    <h4>Size:</h4>
                    <div class="size-options">
                        <button class="size-option">XS</button>
                        <button class="size-option">S</button>
                        <button class="size-option active">M</button>
                        <button class="size-option">L</button>
                        <button class="size-option">XL</button>
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
                
                <button class="add-to-cart btn" data-id="${deal.id}">Add to Cart</button>
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
                addToCart(deal);
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