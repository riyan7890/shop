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
    
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    // Show slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next/previous controls
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Go to specific slide
    function goToSlide(n) {
        showSlide(n);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Product Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productGrid = document.querySelector('.product-grid');
    
    // Sample product data
    const products = [
        {
            id: 1,
            title: 'Wireless Headphones',
            category: 'electronics',
            price: 99.99,
            oldPrice: 129.99,
            image: 'https://kcomputerspk.com/cdn/shop/files/1309341284395377_6c368ccb-981f-4633-a678-6900ad0d13b4_300x300.jpg?v=1716841275',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 2,
            title: 'Smart Watch',
            category: 'electronics',
            price: 199.99,
            oldPrice: 249.99,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/042/382/154/small/smart-watch-device-with-black-belt-png.png',
            rating: 5,
            badge: 'new'
        },
        {
            id: 3,
            title: 'Men\'s T-Shirt',
            category: 'fashion',
            price: 24.99,
            oldPrice: 29.99,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/036/594/211/small/ai-generated-black-and-white-men-s-t-shirts-isolated-on-a-white-background-free-photo.jpeg',
            rating: 3,
            badge: 'hot'
        },
        {
            id: 4,
            title: 'Women\'s Dress',
            category: 'fashion',
            price: 49.99,
            oldPrice: 59.99,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/036/105/765/small/ai-generated-portrait-of-a-beautiful-young-woman-smiling-on-isolated-background-generative-ai-photo.jpg',
            rating: 4,
            badge: null
        },
        {
            id: 5,
            title: 'Coffee Maker',
            category: 'home',
            price: 79.99,
            oldPrice: 99.99,
            image: 'https://img.freepik.com/premium-photo/new-coffee-maker-isolated-white-background_1120563-2054.jpg',
            rating: 4,
            badge: 'sale'
        },
        {
            id: 6,
            title: 'Blender',
            category: 'home',
            price: 59.99,
            oldPrice: 69.99,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/048/511/756/small/a-white-electric-blender-isolated-on-a-white-background-photo.jpg',
            rating: 3,
            badge: null
        },
        {
            id: 7,
            title: 'Laptop',
            category: 'electronics',
            price: 899.99,
            oldPrice: 999.99,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/016/655/846/small/laptop-computer-with-blank-screen-isolated-on-white-background-photo.jpg',
            rating: 5,
            badge: 'new'
        },
        {
            id: 8,
            title: 'Running Shoes',
            category: 'fashion',
            price: 89.99,
            oldPrice: 109.99,
            image: 'https://t3.ftcdn.net/jpg/00/82/88/66/360_F_82886619_a4xje5obM5bAajAjnx6ZzWb0Is70kSQA.jpg',
            rating: 4,
            badge: 'sale'
        }
    ];
    
    // Display products
    function displayProducts(filter = 'all') {
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            
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
            
            productGrid.appendChild(productCard);
        });
    }
    
    // Initial display
    displayProducts();
    
    // Filter products
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            displayProducts(filter);
        });
    });
    
    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartSubtotal = document.querySelector('.subtotal');
    let cart = [];
    
    // Toggle cart
    function toggleCart() {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
    }
    
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Add to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);
        
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
        toggleCart();
    }
    
    // Update cart
    function updateCart() {
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
    
    // Add to cart event delegation
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
            addToCart(productId);
        }
    });
    
    // Login/Register Modal
    const loginModal = document.querySelector('.login-modal');
    const registerModal = document.querySelector('.register-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const userIcon = document.querySelector('.user-icon');
    const closeModals = document.querySelectorAll('.close-modal');
    const switchToRegister = document.querySelector('.switch-to-register');
    const switchToLogin = document.querySelector('.switch-to-login');
    
    // Toggle modal
    function toggleModal(modal) {
        modal.classList.toggle('active');
        modalOverlay.classList.toggle('active');
        document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : 'auto';
    }
    
    userIcon.addEventListener('click', function(e) {
        e.preventDefault();
        toggleModal(loginModal);
    });
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.login-modal, .register-modal');
            toggleModal(modal);
        });
    });
    
    modalOverlay.addEventListener('click', function() {
        document.querySelectorAll('.login-modal, .register-modal').forEach(modal => {
            if (modal.classList.contains('active')) {
                toggleModal(modal);
            }
        });
    });
    
    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        toggleModal(loginModal);
        toggleModal(registerModal);
    });
    
    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        toggleModal(registerModal);
        toggleModal(loginModal);
    });
    
    // Form submission
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality will be implemented later!');
        toggleModal(loginModal);
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration functionality will be implemented later!');
        toggleModal(registerModal);
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        this.querySelector('input').value = '';
    });
    
    // Chatbot
    const chatbot = document.querySelector('.chatbot');
    const chatbotIcon = document.querySelector('.chatbot-icon');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const closeChat = document.querySelector('.close-chat');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    
    chatbotIcon.addEventListener('click', function() {
        chatbot.classList.toggle('active');
    });
    
    closeChat.addEventListener('click', function() {
        chatbot.classList.remove('active');
    });
    
    // Sample chatbot responses
    const botResponses = [
        "How can I help you today?",
        "Our customer service team is available 24/7.",
        "You can track your order in your account page.",
        "We offer free shipping for orders over $50.",
        "Returns are accepted within 30 days of purchase."
    ];
    
    function addMessage(text, isUser = false) {
        const message = document.createElement('div');
        message.className = `message ${isUser ? 'user' : 'bot'}`;
        message.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    chatSendBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulate bot response after a delay
            setTimeout(() => {
                const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
                addMessage(randomResponse);
            }, 1000);
        }
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            chatSendBtn.click();
        }
    });
    
    // Initialize with a welcome message
    addMessage("Hello! How can I help you today?");
});