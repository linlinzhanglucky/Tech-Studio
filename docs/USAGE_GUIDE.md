# Tech Studio Usage Guide

Complete guide on how to use and customize your Tech Studio website.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Adding Resources](#adding-resources)
- [Managing Progress](#managing-progress)
- [Search & Filter](#search--filter)
- [Customization](#customization)
- [Best Practices](#best-practices)

## 🚀 Getting Started

### First Time Setup

1. **Clone and setup**
   ```bash
   git clone https://github.com/yourusername/Tech-Studio.git
   cd Tech-Studio/docs
   ```

2. **Test locally**
   ```bash
   python -m http.server 8000
   ```
   Open http://localhost:8000

3. **Customize**
   - Update personal info in all HTML files
   - Add your social media links
   - Change color scheme if desired

## 📚 Adding Resources

### 1. Choose the Category

Resources are organized into sections:
- **Machine Learning** (`#ml`)
- **Deep Learning** (`#dl`)
- **Computer Vision** (`#cv`)
- **NLP & LLMs** (`#nlp`)
- **Tools & Frameworks** (`#tools`)
- **Research Papers** (`#papers`)

### 2. Add Resource Card

Open `resources.html` and find the appropriate section (e.g., `<div id="ml" class="resource-section">`).

Add a new card inside the `resource-grid`:

```html
<div class="resource-card">
    <!-- Icon with category color -->
    <div class="resource-icon ml">
        <i class="fas fa-graduation-cap"></i>
    </div>
    
    <!-- Title -->
    <h3>Resource Name</h3>
    
    <!-- Description -->
    <p>Brief description of what this resource offers</p>
    
    <!-- Tags -->
    <div class="resource-tags">
        <span class="tag">Python</span>
        <span class="tag">Beginner</span>
    </div>
    
    <!-- Link -->
    <a href="https://example.com" target="_blank" class="resource-link">
        Visit <i class="fas fa-external-link-alt"></i>
    </a>
</div>
```

### 3. Icon Colors

Use the appropriate class for the icon:
- `ml` - Green (#10b981)
- `dl` - Blue (#6366f1)
- `cv` - Orange (#f59e0b)
- `nlp` - Pink (#ec4899)
- `tools` - Purple (#8b5cf6)
- `papers` - Blue (#3b82f6)

### 4. Font Awesome Icons

Browse icons at [Font Awesome](https://fontawesome.com/icons). Common ones:

- `fa-graduation-cap` - Education
- `fa-book` - Documentation
- `fa-code` - Programming
- `fa-robot` - AI/ML
- `fa-brain` - Neural Networks
- `fa-database` - Data
- `fa-fire` - Popular/Trending
- `fa-tools` - Tools

## 📊 Managing Progress

### 1. Add Timeline Entry

Open `progress.html` and add inside the `<div class="timeline">`:

```html
<div class="timeline-item" data-type="project">
    <div class="timeline-dot project"></div>
    <div class="timeline-content">
        <span class="timeline-date">Nov 16, 2025</span>
        
        <div class="timeline-badge project">
            <i class="fas fa-code"></i> Project
        </div>
        
        <h3>Project Title</h3>
        <p>Detailed description of what you accomplished</p>
        
        <div class="timeline-tags">
            <span class="tag">PyTorch</span>
            <span class="tag">Computer Vision</span>
        </div>
        
        <div class="timeline-links">
            <a href="#" class="timeline-link">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    </div>
</div>
```

### 2. Entry Types

Three types available:

**Project** (Green):
```html
data-type="project"
<div class="timeline-badge project">
    <i class="fas fa-code"></i> Project
</div>
```

**Learning** (Blue):
```html
data-type="learning"
<div class="timeline-badge learning">
    <i class="fas fa-book"></i> Learning
</div>
```

**Achievement** (Orange):
```html
data-type="achievement"
<div class="timeline-badge achievement">
    <i class="fas fa-trophy"></i> Achievement
</div>
```

### 3. Organizing by Month

Add month headers between entries:

```html
<div class="timeline-month">
    <h2><i class="fas fa-calendar"></i> December 2025</h2>
</div>
```

## 🔍 Search & Filter

### Resources Page

**Search**: Type in the search box to filter resources by:
- Title
- Description
- Tags

**Filter by Category**: Click category buttons to show only:
- All
- Machine Learning
- Deep Learning
- Computer Vision
- NLP
- Tools
- Papers

### Progress Page

**Filter by Type**: Click to show:
- All entries
- Projects only
- Learning only
- Achievements only

**Search Timeline**: Use search box (if enabled) to find specific entries

## 🎨 Customization

### 1. Change Color Scheme

Edit `assets/css/style.css`:

```css
:root {
    /* Main brand colors */
    --primary-color: #6366f1;      /* Your main color */
    --secondary-color: #8b5cf6;    /* Accent color */
    --accent-color: #ec4899;       /* Highlight color */
    
    /* Category colors */
    --ml-color: #10b981;           /* ML green */
    --dl-color: #6366f1;           /* DL blue */
    --cv-color: #f59e0b;           /* CV orange */
    --nlp-color: #ec4899;          /* NLP pink */
    --tools-color: #8b5cf6;        /* Tools purple */
    --papers-color: #3b82f6;       /* Papers blue */
}
```

### 2. Update Personal Info

**Navigation Brand** (all pages):
```html
<div class="nav-brand">
    <i class="fas fa-brain"></i>
    <span>Your Name</span>
</div>
```

**Footer** (all pages):
```html
<div class="social-links">
    <a href="https://github.com/yourusername" aria-label="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

### 3. Update Stats

**Homepage** (`index.html`):
```html
<div class="stat-card">
    <i class="fas fa-bookmark"></i>
    <h3 id="resource-count">50+</h3>  <!-- Update number -->
    <p>Resources</p>
</div>
```

**Progress Page** (`progress.html`):
```html
<div class="stat-card">
    <i class="fas fa-calendar-check"></i>
    <h3 id="streak-count">15</h3>  <!-- Auto-updates -->
    <p>Day Streak</p>
</div>
```

## 🎯 Best Practices

### Resource Management

1. **Keep it Current**
   - Review links monthly
   - Remove outdated resources
   - Update descriptions

2. **Quality over Quantity**
   - Add only high-quality resources
   - Write clear descriptions
   - Use relevant tags

3. **Organize Logically**
   - Group similar resources
   - Use consistent naming
   - Add helpful tags

### Progress Tracking

1. **Be Consistent**
   - Log regularly (daily/weekly)
   - Use clear titles
   - Include details

2. **Use All Types**
   - Projects for implementations
   - Learning for courses/tutorials
   - Achievements for milestones

3. **Add Context**
   - Include what you learned
   - Link to code/resources
   - Use relevant tags

### Performance

1. **Optimize Images**
   - Compress before uploading
   - Use appropriate formats
   - Consider lazy loading

2. **Minimize Custom Code**
   - The site is already optimized
   - Test changes locally
   - Keep JavaScript minimal

3. **Regular Backups**
   - Commit to Git regularly
   - Push to GitHub
   - Keep local copies

## 🛠️ Advanced Features

### Bookmarking

Resources can be bookmarked (saved to browser localStorage):
- Hover over resource card
- Click bookmark icon
- View in browser console: `TechStudio.Storage.get('bookmarks')`

### Export Data

From browser console:

```javascript
// Export all bookmarks
TechStudio.Storage.get('bookmarks')

// Export progress analytics
ProgressPage.getAnalytics()

// Export timeline data
ProgressPage.exportData()
```

### Keyboard Shortcuts

- **Ctrl/Cmd + K**: Focus search (on progress page)
- **Escape**: Close mobile menu

## 🔧 Troubleshooting

### Search Not Working

1. Clear browser cache
2. Check JavaScript console for errors
3. Ensure `main.js` is loaded

### Styles Not Applying

1. Hard refresh (Ctrl+Shift+R)
2. Check CSS file path
3. Verify no syntax errors

### Timeline Filter Not Working

1. Ensure `data-type` attribute is set correctly
2. Check `progress.js` is loaded
3. Clear localStorage: `TechStudio.Storage.clear()`

## 📱 Mobile Optimization

The site is fully responsive. Test on:
- iPhone (375px, 414px)
- iPad (768px, 1024px)
- Desktop (1366px, 1920px)

## 🎓 Tips for Success

1. **Start Simple**
   - Begin with a few resources
   - Add more over time
   - Don't overwhelm yourself

2. **Stay Organized**
   - Use consistent formatting
   - Keep categories balanced
   - Update regularly

3. **Make it Personal**
   - Customize colors to your taste
   - Add resources YOU find useful
   - Share your unique journey

4. **Share Knowledge**
   - Make your repo public
   - Share with others
   - Accept contributions

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [HTML Color Codes](https://htmlcolorcodes.com/)

## 🆘 Need Help?

- Check [DEPLOYMENT.md](DEPLOYMENT.md) for hosting issues
- Open an issue on GitHub
- Review browser console for errors

---

Happy learning and building! 🚀

