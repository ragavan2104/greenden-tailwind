# Greenden - Plant & Garden Store

A beautiful, responsive plant and garden store website built with HTML, JavaScript, and Tailwind CSS.

## 🌱 About

Greenden is a modern e-commerce website for plant enthusiasts, featuring a clean design and intuitive user experience. Browse through our collection of beautiful plants including roses, lilies, hibiscus, lotus, and more.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Product Catalog**: Browse through various plant categories with high-quality images
- **Search Functionality**: Search for specific plants using the search bar
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth animations
- **Modern UI**: Clean and modern design using Tailwind CSS
- **Contact Form**: Easy way for customers to get in touch

## 🚀 Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **JavaScript**: Interactive functionality and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 📁 Project Structure

```
greenden/
├── index.html          # Homepage
├── product.html        # Products page
├── contact.html        # Contact page
├── index.js           # Homepage JavaScript
├── product.js         # Products page JavaScript
├── contact.js         # Contact page JavaScript
├── tailwind.config.js # Tailwind configuration
├── img/               # Image assets
│   ├── bestselelr_1.png
│   ├── bs2.jpeg
│   ├── bs3.png
│   └── bs4.png
└── README.md          # Project documentation
```

## 🛠️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd greenden
   ```

2. **Open in browser**:
   Simply open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **Access the website**:
   Open your browser and navigate to `http://localhost:8000`

## 📱 Pages

### Home Page (`index.html`)
- Hero section with featured plants
- Navigation menu with mobile responsive design
- Footer with company information

### Products Page (`product.html`)
- Grid layout showcasing all available plants
- Search functionality to filter products
- Hover effects for better user interaction

### Contact Page (`contact.html`)
- Contact form for customer inquiries
- Company contact information
- Responsive design for all devices

## 🎨 Design Features

- **Color Scheme**: Green-themed palette reflecting nature
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Mobile-First**: Designed with mobile users in mind

## 🔧 Customization

### Tailwind CSS Configuration
The project uses a custom Tailwind configuration (`tailwind.config.js`). You can modify colors, fonts, and other design tokens by editing this file.

### Adding New Products
To add new products, edit the `product.html` file and add new product cards following the existing structure:

```html
<div>
    <img src="./img/your-image.png" class="inline hover:shadow-xl transform hover:-translate-y-2" alt="">
    <h1>Plant Name</h1>
    <p>$Price</p>
</div>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions, please feel free to reach out through the contact page on the website.

---

Built with ❤️ for plant lovers everywhere 🌿