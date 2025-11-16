/**
 * Progress Page - Timeline Filter and Management
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Timeline Filter
    // ============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            timelineItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                
                if (filter === 'all' || itemType === filter) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // ============================================
    // Streak Counter
    // ============================================
    function updateStreak() {
        const streakCount = TechStudio.Storage.get('streakCount') || 15;
        const lastVisit = TechStudio.Storage.get('lastVisit');
        const today = new Date().toDateString();
        
        if (lastVisit !== today) {
            // Check if it's consecutive day
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (lastVisit === yesterday.toDateString()) {
                // Increment streak
                TechStudio.Storage.set('streakCount', streakCount + 1);
            } else if (!lastVisit) {
                // First visit
                TechStudio.Storage.set('streakCount', 1);
            }
            // If gap > 1 day, streak resets to 1
            else {
                TechStudio.Storage.set('streakCount', 1);
            }
            
            TechStudio.Storage.set('lastVisit', today);
        }
        
        const currentStreak = TechStudio.Storage.get('streakCount') || 1;
        const streakElement = document.getElementById('streak-count');
        if (streakElement) {
            streakElement.textContent = currentStreak;
        }
    }
    
    updateStreak();
    
    // ============================================
    // Calculate Days Active
    // ============================================
    function calculateDaysActive() {
        const startDate = TechStudio.Storage.get('startDate');
        let days = 100; // Default
        
        if (startDate) {
            const start = new Date(startDate);
            const today = new Date();
            const diffTime = Math.abs(today - start);
            days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        } else {
            // Set start date if not exists
            TechStudio.Storage.set('startDate', new Date().toISOString());
        }
        
        const daysActiveElement = document.getElementById('days-active');
        if (daysActiveElement) {
            daysActiveElement.textContent = days + '+';
        }
    }
    
    calculateDaysActive();
    
    // ============================================
    // Add New Entry Modal (Placeholder)
    // ============================================
    window.openAddEntryModal = function() {
        TechStudio.showToast('Add entry feature coming soon! For now, edit the HTML directly.');
    };
    
    // ============================================
    // Export Timeline Data
    // ============================================
    function exportTimelineData() {
        const entries = [];
        
        timelineItems.forEach(item => {
            const date = item.querySelector('.timeline-date').textContent;
            const type = item.querySelector('.timeline-badge').textContent;
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent);
            
            entries.push({
                date,
                type,
                title,
                description,
                tags
            });
        });
        
        return entries;
    }
    
    // ============================================
    // Timeline Statistics
    // ============================================
    function calculateTimelineStats() {
        const stats = {
            total: timelineItems.length,
            projects: document.querySelectorAll('.timeline-item[data-type="project"]').length,
            learning: document.querySelectorAll('.timeline-item[data-type="learning"]').length,
            achievements: document.querySelectorAll('.timeline-item[data-type="achievement"]').length
        };
        
        return stats;
    }
    
    const timelineStats = calculateTimelineStats();
    console.log('Timeline Stats:', timelineStats);
    
    // ============================================
    // Timeline Search
    // ============================================
    function addTimelineSearch() {
        const timelineSection = document.querySelector('.progress-timeline .container');
        if (!timelineSection) return;
        
        const searchBox = document.createElement('div');
        searchBox.className = 'timeline-search';
        searchBox.style.cssText = `
            max-width: 600px;
            margin: 0 auto 2rem;
            position: relative;
        `;
        
        searchBox.innerHTML = `
            <i class="fas fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-light);"></i>
            <input type="text" 
                   id="timeline-search" 
                   placeholder="Search timeline..." 
                   style="width: 100%; padding: 0.875rem 1rem 0.875rem 3rem; border: 2px solid var(--border-color); border-radius: 0.75rem; font-size: 1rem; transition: all 0.25s ease;">
        `;
        
        const filterDiv = timelineSection.querySelector('.timeline-filter');
        if (filterDiv) {
            filterDiv.parentNode.insertBefore(searchBox, filterDiv);
        } else {
            timelineSection.insertBefore(searchBox, timelineSection.firstChild);
        }
        
        const searchInput = document.getElementById('timeline-search');
        searchInput.addEventListener('input', TechStudio.debounce(function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            timelineItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
                
                const matches = title.includes(searchTerm) || 
                              description.includes(searchTerm) || 
                              tags.some(tag => tag.includes(searchTerm));
                
                if (matches || searchTerm === '') {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Handle month headers
            document.querySelectorAll('.timeline-month').forEach(monthHeader => {
                let nextElement = monthHeader.nextElementSibling;
                let hasVisibleItems = false;
                
                while (nextElement && !nextElement.classList.contains('timeline-month')) {
                    if (nextElement.classList.contains('timeline-item') && nextElement.style.display === 'block') {
                        hasVisibleItems = true;
                        break;
                    }
                    nextElement = nextElement.nextElementSibling;
                }
                
                monthHeader.style.display = hasVisibleItems ? 'block' : 'none';
            });
        }, 300));
        
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
            this.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = 'var(--border-color)';
            this.style.boxShadow = 'none';
        });
    }
    
    addTimelineSearch();
    
    // ============================================
    // Timeline Item Actions
    // ============================================
    timelineItems.forEach(item => {
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-dot').style.transform = 'scale(1)';
        });
    });
    
    // ============================================
    // Progress Analytics
    // ============================================
    function generateProgressAnalytics() {
        const analytics = {
            totalEntries: timelineItems.length,
            byType: calculateTimelineStats(),
            recentActivity: [],
            tagFrequency: {}
        };
        
        // Calculate tag frequency
        timelineItems.forEach(item => {
            const tags = item.querySelectorAll('.tag');
            tags.forEach(tag => {
                const tagText = tag.textContent;
                analytics.tagFrequency[tagText] = (analytics.tagFrequency[tagText] || 0) + 1;
            });
        });
        
        // Get recent activity (last 7 entries)
        const recentItems = Array.from(timelineItems).slice(0, 7);
        analytics.recentActivity = recentItems.map(item => ({
            title: item.querySelector('h3').textContent,
            date: item.querySelector('.timeline-date').textContent,
            type: item.getAttribute('data-type')
        }));
        
        return analytics;
    }
    
    const analytics = generateProgressAnalytics();
    console.log('Progress Analytics:', analytics);
    
    // Save analytics to localStorage
    TechStudio.Storage.set('progressAnalytics', analytics);
    
    // ============================================
    // Auto-save Draft Entries
    // ============================================
    function saveDraft(entryData) {
        const drafts = TechStudio.Storage.get('progressDrafts') || [];
        drafts.push({
            ...entryData,
            savedAt: new Date().toISOString()
        });
        TechStudio.Storage.set('progressDrafts', drafts);
    }
    
    function loadDrafts() {
        return TechStudio.Storage.get('progressDrafts') || [];
    }
    
    // ============================================
    // Keyboard Shortcuts
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('timeline-search');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
    
    // ============================================
    // Export Functions
    // ============================================
    window.ProgressPage = {
        exportData: exportTimelineData,
        getStats: calculateTimelineStats,
        getAnalytics: generateProgressAnalytics,
        saveDraft,
        loadDrafts
    };
});

