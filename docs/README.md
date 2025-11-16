# Tech Studio - AI/ML Resource Hub

Welcome to **Tech Studio**, a comprehensive, open-source knowledge hub for AI engineers, researchers, and enthusiasts!

## 🌟 Features

- **Curated Resources**: Handpicked tutorials, courses, and documentation for ML/DL/CV/NLP
- **Research Papers**: Latest papers with implementations and summaries
- **Tools & Frameworks**: Essential tools for every stage of the ML pipeline
- **Progress Tracking**: Daily logs of learning, projects, and achievements
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Interactive Search**: Real-time search and filtering across all resources
- **Bookmarking**: Save your favorite resources locally
- **Mobile Responsive**: Works perfectly on all devices

## 📂 Project Structure

```
docs/
├── index.html              # Homepage
├── resources.html          # Resource library
├── progress.html           # Progress log/timeline
├── about.html             # About page
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       ├── main.js        # Core functionality
│       ├── resources.js   # Resource page scripts
│       └── progress.js    # Progress page scripts
├── _config.yml            # Jekyll configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Viewing Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Tech-Studio.git
   cd Tech-Studio/docs
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. Visit `http://localhost:8000`

### Deploying to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to `main` branch and `/docs` folder
4. Your site will be available at `https://yourusername.github.io/Tech-Studio/`

## 🎨 Customization

### Adding Resources

Edit `resources.html` and add new resource cards:

```html
<div class="resource-card">
    <div class="resource-icon ml">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Resource Title</h3>
    <p>Description of the resource</p>
    <div class="resource-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
    <a href="URL" target="_blank" class="resource-link">
        Visit <i class="fas fa-external-link-alt"></i>
    </a>
</div>
```

### Adding Progress Entries

Edit `progress.html` and add timeline items:

```html
<div class="timeline-item" data-type="project">
    <div class="timeline-dot project"></div>
    <div class="timeline-content">
        <span class="timeline-date">Date</span>
        <div class="timeline-badge project">
            <i class="fas fa-code"></i> Project
        </div>
        <h3>Project Title</h3>
        <p>Description</p>
        <div class="timeline-tags">
            <span class="tag">Tag</span>
        </div>
    </div>
</div>
```

### Color Scheme

Modify CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more variables */
}
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **GitHub Pages**: Hosting
- **Jekyll** (optional): Static site generation

## 📚 Resource Categories

- **Machine Learning**: Scikit-learn, ML fundamentals, algorithms
- **Deep Learning**: PyTorch, TensorFlow, neural networks
- **Computer Vision**: OpenCV, YOLO, Detectron2, image processing
- **NLP & LLMs**: Hugging Face, Transformers, LangChain, GPT
- **Tools**: MLOps, experiment tracking, deployment
- **Papers**: arXiv, Papers with Code, research repositories

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add Resources**: Submit PRs with new resources
2. **Fix Issues**: Report or fix bugs
3. **Improve Design**: Enhance UI/UX
4. **Documentation**: Improve this README or add tutorials

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-resource`)
3. Commit your changes (`git commit -m 'Add amazing resource'`)
4. Push to the branch (`git push origin feature/amazing-resource`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🌐 Connect

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 📊 Stats

- 50+ curated resources
- 20+ research papers
- 6 major categories
- Regular updates

## 🙏 Acknowledgments

- Inspired by the amazing AI/ML community
- Icons by [Font Awesome](https://fontawesome.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

## 📧 Contact

Questions or suggestions? Feel free to [open an issue](https://github.com/yourusername/Tech-Studio/issues) or reach out directly!

---

**Made with ❤️ for the AI/ML community**

