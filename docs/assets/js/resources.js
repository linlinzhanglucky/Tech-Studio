/**
 * Resources Page - Search and Filter Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Search Functionality
    // ============================================
    const searchInput = document.getElementById('search-input');
    const resourceCards = document.querySelectorAll('.resource-card');
    const resourceSections = document.querySelectorAll('.resource-section');
    
    if (searchInput) {
        searchInput.addEventListener('input', TechStudio.debounce(function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            resourceCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                
                const matches = title.includes(searchTerm) || 
                              description.includes(searchTerm) || 
                              tags.some(tag => tag.includes(searchTerm));
                
                if (matches) {
                    card.style.display = 'flex';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Hide sections with no visible cards
            resourceSections.forEach(section => {
                const visibleCards = section.querySelectorAll('.resource-card[style="display: flex;"]');
                if (visibleCards.length === 0 && searchTerm !== '') {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
            
            // Show message if no results
            showNoResultsMessage(searchTerm);
        }, 300));
    }
    
    // ============================================
    // Filter Functionality
    // ============================================
    const filterTags = document.querySelectorAll('.filter-tag');
    
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Update active state
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Clear search
            if (searchInput) {
                searchInput.value = '';
            }
            
            // Filter sections and cards
            if (filter === 'all') {
                resourceSections.forEach(section => {
                    section.style.display = 'block';
                    const cards = section.querySelectorAll('.resource-card');
                    cards.forEach(card => {
                        card.style.display = 'flex';
                        card.classList.add('fade-in');
                    });
                });
            } else {
                resourceSections.forEach(section => {
                    if (section.getAttribute('data-category') === filter) {
                        section.style.display = 'block';
                        const cards = section.querySelectorAll('.resource-card');
                        cards.forEach(card => {
                            card.style.display = 'flex';
                            card.classList.add('fade-in');
                        });
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
            
            // Scroll to first visible section
            const firstVisible = document.querySelector('.resource-section[style="display: block;"]');
            if (firstVisible && filter !== 'all') {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ============================================
    // No Results Message
    // ============================================
    function showNoResultsMessage(searchTerm) {
        const existingMessage = document.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const visibleCards = document.querySelectorAll('.resource-card[style="display: flex;"]');
        
        if (visibleCards.length === 0 && searchTerm !== '') {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3 style="margin-bottom: 0.5rem;">No results found</h3>
                    <p>Try searching with different keywords</p>
                </div>
            `;
            
            const container = document.querySelector('.resources-content .container');
            container.appendChild(message);
        }
    }
    
    // ============================================
    // Copy Resource Link
    // ============================================
    resourceCards.forEach(card => {
        const link = card.querySelector('.resource-link');
        if (link) {
            const copyBtn = document.createElement('button');
            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            copyBtn.className = 'copy-link-btn';
            copyBtn.style.cssText = `
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: var(--bg-tertiary);
                border: none;
                cursor: pointer;
                opacity: 0;
                transition: all 0.2s ease;
                color: var(--text-secondary);
            `;
            
            copyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const url = link.href;
                TechStudio.copyToClipboard(url);
            });
            
            card.style.position = 'relative';
            card.appendChild(copyBtn);
            
            card.addEventListener('mouseenter', function() {
                copyBtn.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', function() {
                copyBtn.style.opacity = '0';
            });
        }
    });
    
    // ============================================
    // Bookmark Resources (Save to LocalStorage)
    // ============================================
    function initializeBookmarks() {
        const bookmarks = TechStudio.Storage.get('bookmarks') || [];
        
        resourceCards.forEach((card, index) => {
            const resourceTitle = card.querySelector('h3').textContent;
            const bookmarkBtn = document.createElement('button');
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
            bookmarkBtn.className = 'bookmark-btn';
            bookmarkBtn.setAttribute('data-index', index);
            bookmarkBtn.style.cssText = `
                position: absolute;
                top: 1rem;
                right: 3.5rem;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: var(--bg-tertiary);
                border: none;
                cursor: pointer;
                opacity: 0;
                transition: all 0.2s ease;
                color: var(--text-secondary);
            `;
            
            // Check if already bookmarked
            if (bookmarks.includes(resourceTitle)) {
                bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
                bookmarkBtn.style.color = 'var(--warning-color)';
            }
            
            bookmarkBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleBookmark(resourceTitle, bookmarkBtn);
            });
            
            card.appendChild(bookmarkBtn);
            
            card.addEventListener('mouseenter', function() {
                bookmarkBtn.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', function() {
                bookmarkBtn.style.opacity = '0';
            });
        });
    }
    
    function toggleBookmark(title, button) {
        let bookmarks = TechStudio.Storage.get('bookmarks') || [];
        
        if (bookmarks.includes(title)) {
            bookmarks = bookmarks.filter(b => b !== title);
            button.innerHTML = '<i class="far fa-bookmark"></i>';
            button.style.color = 'var(--text-secondary)';
            TechStudio.showToast('Removed from bookmarks');
        } else {
            bookmarks.push(title);
            button.innerHTML = '<i class="fas fa-bookmark"></i>';
            button.style.color = 'var(--warning-color)';
            TechStudio.showToast('Added to bookmarks');
        }
        
        TechStudio.Storage.set('bookmarks', bookmarks);
    }
    
    // Initialize bookmarks
    initializeBookmarks();
    
    // ============================================
    // Sort Resources
    // ============================================
    function addSortControls() {
        const searchSection = document.querySelector('.search-section .container');
        if (!searchSection) return;
        
        const sortContainer = document.createElement('div');
        sortContainer.className = 'sort-controls';
        sortContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        `;
        
        const sortLabel = document.createElement('span');
        sortLabel.textContent = 'Sort by:';
        sortLabel.style.cssText = `
            color: var(--text-secondary);
            font-weight: 600;
            align-self: center;
        `;
        
        const sortOptions = ['Name', 'Relevance'];
        const sortButtons = sortOptions.map(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.className = 'sort-btn';
            btn.style.cssText = `
                padding: 0.5rem 1rem;
                border: 2px solid var(--border-color);
                background-color: white;
                border-radius: 0.5rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.15s ease;
                font-size: 0.875rem;
            `;
            
            btn.addEventListener('click', function() {
                sortButtons.forEach(b => {
                    b.style.borderColor = 'var(--border-color)';
                    b.style.backgroundColor = 'white';
                    b.style.color = 'var(--text-primary)';
                });
                this.style.borderColor = 'var(--primary-color)';
                this.style.backgroundColor = 'var(--primary-color)';
                this.style.color = 'white';
                
                sortResources(option.toLowerCase());
            });
            
            return btn;
        });
        
        sortContainer.appendChild(sortLabel);
        sortButtons.forEach(btn => sortContainer.appendChild(btn));
        searchSection.appendChild(sortContainer);
    }
    
    function sortResources(sortBy) {
        resourceSections.forEach(section => {
            const grid = section.querySelector('.resource-grid');
            const cards = Array.from(grid.querySelectorAll('.resource-card'));
            
            if (sortBy === 'name') {
                cards.sort((a, b) => {
                    const titleA = a.querySelector('h3').textContent.toLowerCase();
                    const titleB = b.querySelector('h3').textContent.toLowerCase();
                    return titleA.localeCompare(titleB);
                });
            }
            
            // Re-append sorted cards
            cards.forEach(card => grid.appendChild(card));
        });
    }
    
    // Add sort controls
    // addSortControls();
    
    // ============================================
    // Resource Stats
    // ============================================
    function updateResourceCount() {
        const totalResources = resourceCards.length;
        const resourceCountEl = document.getElementById('resource-count');
        
        if (resourceCountEl) {
            resourceCountEl.textContent = totalResources + '+';
        }
    }
    
    updateResourceCount();
    
    // ============================================
    // Hash Navigation
    // ============================================
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
});

