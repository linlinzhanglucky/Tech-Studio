# 🚀 Quick Start Guide - Tech Studio

Get your AI/ML resource hub up and running in 5 minutes!

## ✅ What You Get

A beautiful, fully functional website with:
- ✨ Modern, responsive design
- 📚 50+ curated AI/ML resources
- 📊 Progress tracking timeline
- 🔍 Real-time search & filtering
- 💾 Local bookmarking
- 📱 Mobile-optimized

## 🏃 5-Minute Setup

### Step 1: Deploy to GitHub Pages (2 min)

```bash
# Already in your repository!
git add .
git commit -m "🚀 Launch Tech Studio website"
git push origin main
```

### Step 2: Enable GitHub Pages (1 min)

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**

### Step 3: Access Your Site (30 sec)

Your site will be live at:
```
https://YOUR-USERNAME.github.io/Tech-Studio/
```

### Step 4: Customize (2 min)

Update these files with your information:

**1. Update Social Links** (in all HTML files):
```html
<!-- Find and replace in: index.html, resources.html, progress.html, about.html -->
<a href="https://github.com/YOUR-USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE">LinkedIn</a>
```

**2. Update Sitemap**:
```xml
<!-- docs/sitemap.xml -->
Replace "yourusername" with your GitHub username
```

**3. Update README**:
```markdown
<!-- README.md -->
Replace "yourusername" with your GitHub username
```

### Step 5: Test Locally (30 sec)

```bash
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

## 🎨 Personalization Ideas

### Change Colors (Optional)

Edit `docs/assets/css/style.css`:

```css
:root {
    --primary-color: #6366f1;     /* Change to your favorite color */
    --secondary-color: #8b5cf6;   /* Accent color */
}
```

### Add Your First Resource

Edit `docs/resources.html` - find any `resource-grid` and add:

```html
<div class="resource-card">
    <div class="resource-icon ml">
        <i class="fas fa-star"></i>
    </div>
    <h3>Your Favorite Resource</h3>
    <p>Why you love it</p>
    <div class="resource-tags">
        <span class="tag">Your Tag</span>
    </div>
    <a href="URL" target="_blank" class="resource-link">
        Visit <i class="fas fa-external-link-alt"></i>
    </a>
</div>
```

### Add Your First Progress Entry

Edit `docs/progress.html` - add to the timeline:

```html
<div class="timeline-item" data-type="learning">
    <div class="timeline-dot learning"></div>
    <div class="timeline-content">
        <span class="timeline-date">Today</span>
        <div class="timeline-badge learning">
            <i class="fas fa-book"></i> Learning
        </div>
        <h3>Started Using Tech Studio!</h3>
        <p>Set up my personal AI/ML resource hub</p>
        <div class="timeline-tags">
            <span class="tag">Web Development</span>
        </div>
    </div>
</div>
```

## 📱 Features Overview

### Homepage (`index.html`)
- Hero section with call-to-action
- Quick stats display
- Resource categories overview
- Recent updates timeline

### Resources Page (`resources.html`)
- 6 categories: ML, DL, CV, NLP, Tools, Papers
- Search functionality
- Category filtering
- Bookmark resources

### Progress Page (`progress.html`)
- Timeline view of learning journey
- Filter by type (Project/Learning/Achievement)
- Search timeline entries
- Auto-tracking stats

### About Page (`about.html`)
- Mission & vision
- How to contribute
- Tech stack
- Contact info

## 🔧 Common Customizations

### Add a Custom Domain

1. Create `docs/CNAME` file:
   ```
   techstudio.yourdomain.com
   ```

2. Add DNS record:
   - Type: CNAME
   - Name: techstudio
   - Value: YOUR-USERNAME.github.io

3. Enable HTTPS in GitHub Pages settings

### Add Google Analytics

Add to `<head>` in all HTML files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📚 Documentation

- **[README.md](README.md)** - Full project overview
- **[USAGE_GUIDE.md](docs/USAGE_GUIDE.md)** - Detailed usage instructions
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Advanced deployment options

## ✨ Pro Tips

1. **Regular Updates**
   ```bash
   # Make changes, then:
   git add .
   git commit -m "Add new resources"
   git push
   # Site auto-updates in ~1 minute!
   ```

2. **Use Search**
   - Resources page: Ctrl+F or search box
   - Progress page: Ctrl+K to focus search

3. **Bookmark Resources**
   - Hover over any resource card
   - Click bookmark icon
   - Saves to browser localStorage

4. **Export Data**
   - Open browser console (F12)
   - Run: `ProgressPage.exportData()`
   - Get all your progress entries as JSON

## 🆘 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check Settings → Pages for deployment status
- Look for errors in Actions tab

### Broken Links?
- All paths should be relative
- No leading slashes for same-directory files
- Check browser console (F12) for errors

### CSS Not Working?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check if file paths are correct

## 🎯 Next Steps

1. ✅ Deploy to GitHub Pages
2. 📝 Add your first 5 favorite resources
3. 📊 Log your first progress entry
4. 🎨 Customize colors to match your style
5. 🔗 Share with friends!

## 💡 Ideas for Advanced Users

- Add a blog section using Jekyll posts
- Integrate with Notion API for dynamic content
- Add dark mode toggle
- Create automated weekly summaries
- Add RSS feed for updates
- Integrate with GitHub API to show repos

## 🌟 Show Your Support

If you find this useful:
- ⭐ Star the repository
- 🍴 Fork it for your own use
- 📢 Share with others
- 🤝 Contribute improvements

## 📞 Need Help?

- 📖 Read the [USAGE_GUIDE.md](docs/USAGE_GUIDE.md)
- 🐛 [Open an issue](https://github.com/yourusername/Tech-Studio/issues)
- 💬 Check existing issues for solutions

---

**You're all set! Happy learning and tracking! 🚀**

Visit your new site and start building your AI/ML knowledge base!

