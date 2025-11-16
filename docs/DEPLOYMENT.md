# Deployment Guide for Tech Studio

This guide will help you deploy your Tech Studio website to GitHub Pages or other hosting platforms.

## 🚀 GitHub Pages Deployment

### Option 1: Using the /docs Folder (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Tech Studio website"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/docs`
   - Click "Save"

3. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/Tech-Studio/`
   - It may take a few minutes to build

### Option 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

## 🌐 Custom Domain Setup

1. **Add CNAME file**
   - Edit `docs/CNAME` and add your domain:
     ```
     techstudio.yourdomain.com
     ```

2. **Configure DNS**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or use A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable HTTPS**
   - In GitHub Pages settings, check "Enforce HTTPS"

## 📦 Alternative Hosting Options

### Netlify

1. **Connect repository**
   - Sign up at [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure build settings**
   - Build command: (leave empty for static site)
   - Publish directory: `docs`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live with a Netlify subdomain

### Vercel

1. **Import project**
   - Sign up at [Vercel](https://vercel.com/)
   - Click "Import Project"
   - Connect your GitHub repository

2. **Configure**
   - Framework Preset: Other
   - Root Directory: `docs`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

3. **Deploy**
   - Click "Deploy"

### Cloudflare Pages

1. **Create project**
   - Sign up at [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account

2. **Configure**
   - Build command: (leave empty)
   - Build output directory: `docs`

3. **Deploy**
   - Click "Save and Deploy"

## 🔧 Local Development Server

### Python HTTP Server

```bash
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

### Node.js HTTP Server

```bash
npx http-server docs -p 8000
# Visit http://localhost:8000
```

### VS Code Live Server

1. Install "Live Server" extension
2. Right-click on `docs/index.html`
3. Select "Open with Live Server"

## ⚙️ Jekyll Setup (Optional)

If you want to use Jekyll for advanced features:

1. **Install Ruby and Jekyll**
   ```bash
   gem install bundler jekyll
   ```

2. **Install dependencies**
   ```bash
   cd docs
   bundle install
   ```

3. **Run local server**
   ```bash
   bundle exec jekyll serve
   # Visit http://localhost:4000
   ```

4. **Remove .nojekyll**
   ```bash
   rm docs/.nojekyll
   ```

## 📱 Testing Before Deployment

### 1. Validate HTML

Use [W3C Validator](https://validator.w3.org/)

### 2. Check Responsiveness

Test on different screen sizes:
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024
- Mobile: 375x667, 414x896

### 3. Performance Testing

Use [Google PageSpeed Insights](https://pagespeed.web.dev/)

### 4. Cross-browser Testing

Test on:
- Chrome
- Firefox
- Safari
- Edge

## 🐛 Troubleshooting

### Site Not Loading

1. Check if GitHub Pages is enabled in settings
2. Verify branch and folder are correct
3. Wait 5-10 minutes after first deployment
4. Check for build errors in Actions tab

### CSS/JS Not Loading

1. Check file paths are relative
2. Ensure file names match exactly (case-sensitive)
3. Clear browser cache
4. Check browser console for errors

### Custom Domain Not Working

1. Verify CNAME file exists with correct domain
2. Check DNS settings (use `dig` or `nslookup`)
3. Wait for DNS propagation (can take 24-48 hours)
4. Ensure "Enforce HTTPS" is enabled

### 404 Errors

1. Check that all file paths are lowercase
2. Verify index.html exists in root
3. Check .htaccess or _config.yml redirects

## 🔒 Security Best Practices

1. **Enable HTTPS**
   - Always enforce HTTPS in GitHub Pages settings

2. **Content Security Policy**
   - Add CSP headers if using custom hosting

3. **Update Dependencies**
   - Keep Font Awesome and other CDN links updated

4. **API Keys**
   - Never commit API keys or secrets
   - Use environment variables

## 📊 Analytics Setup (Optional)

### Google Analytics

Add to `<head>` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🚀 Continuous Deployment

Your site will automatically redeploy when you push to the main branch!

```bash
# Make changes
git add .
git commit -m "Update resources"
git push origin main

# GitHub Pages will automatically rebuild
```

## 📝 Pre-deployment Checklist

- [ ] All resources tested and accessible
- [ ] Links checked for 404s
- [ ] Images optimized
- [ ] Responsive design verified
- [ ] SEO meta tags added
- [ ] Favicon added
- [ ] Analytics configured
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] README updated

## 🎉 You're All Set!

Your Tech Studio website is now live and accessible to the world. Happy sharing! 🚀

