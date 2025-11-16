# Tech Studio - AI/ML Resource Hub 🚀

A comprehensive, open-source knowledge hub for AI engineers, researchers, and enthusiasts. This repository contains a beautifully designed website to track AI/ML resources, progress logs, and research papers.

## 🌟 Features

- **📚 Curated Resources**: 50+ handpicked tutorials, courses, papers, and tools
- **🎯 Category Organization**: ML, DL, CV, NLP, Tools, and Papers
- **📊 Progress Tracking**: Timeline-based learning journal with filtering
- **🔍 Smart Search**: Real-time search across all resources
- **💾 Bookmarking**: Save favorite resources locally
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Fast & Modern**: Vanilla JavaScript, no heavy frameworks
- **🎨 Beautiful UI**: Gradient designs, smooth animations

## 🚀 Quick Start

### View the Website

Visit the live site: `https://yourusername.github.io/Tech-Studio/`

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Tech-Studio.git
   cd Tech-Studio
   ```

2. **Run a local server**
   ```bash
   cd docs
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

## 📂 Project Structure

```
Tech-Studio/
├── docs/                       # GitHub Pages website
│   ├── index.html             # Homepage
│   ├── resources.html         # Resource library
│   ├── progress.html          # Progress timeline
│   ├── about.html             # About page
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css      # Main stylesheet
│   │   └── js/
│   │       ├── main.js        # Core functionality
│   │       ├── resources.js   # Resource page scripts
│   │       └── progress.js    # Progress tracking
│   ├── _config.yml            # Jekyll config
│   ├── README.md              # Website docs
│   └── DEPLOYMENT.md          # Deployment guide
├── cu_dlcv_course_hw/         # Course homework
├── AI/                        # AI resources
├── CV/                        # Computer Vision
├── ML/                        # Machine Learning
├── Paper/                     # Research papers
└── README.md                  # This file
```

## 📚 Resource Categories

### Machine Learning
- Scikit-learn, Kaggle, Google ML Crash Course

### Deep Learning  
- PyTorch, TensorFlow, Fast.ai, Deep Learning Specialization

### Computer Vision
- [Deep Learning for Computer Vision (Columbia)](https://www.deeplearningforcomputervision.com/)
- OpenCV, Detectron2, YOLO

### NLP & LLMs
- Hugging Face Transformers, LangChain, OpenAI API, PEFT/LoRA

### Tools & Frameworks
- Weights & Biases, MLflow, Ray, Docker, DVC

### Research Papers
- arXiv, Papers with Code, Semantic Scholar

## 🎨 Customization

### Adding Resources

Edit `docs/resources.html` to add new resources in the appropriate category section.

### Adding Progress Entries

Edit `docs/progress.html` to add new timeline items with your learning journey.

### Changing Colors

Modify CSS variables in `docs/assets/css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Settings → Pages
   - Source: `main` branch, `/docs` folder
   - Save

3. Visit: `https://yourusername.github.io/Tech-Studio/`

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

Contributions welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-resource`)
3. Commit changes (`git commit -m 'Add new resource'`)
4. Push to branch (`git push origin feature/new-resource`)
5. Open a Pull Request

## 🛠️ Technologies

- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome icons
- GitHub Pages hosting
- Jekyll (optional)

## 📖 Course Resources

This repo also contains homework and projects from:

- **Deep Learning for Computer Vision** (Columbia University)
  - [Syllabus](https://www.deeplearningforcomputervision.com/syllabus.html)
  - [Assignments](https://www.deeplearningforcomputervision.com/assignments-and-resources.html)

## 📝 License

MIT License - feel free to use this project for your own learning!

## 🙏 Acknowledgments

- Inspired by the amazing AI/ML community
- Icons by [Font Awesome](https://fontawesome.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

## 📧 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Issues: [Create an issue](https://github.com/yourusername/Tech-Studio/issues)

---

**Made with ❤️ for the AI/ML community**
