# Arul Digitals
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/sreenadh2000/arul-digitals)

This repository contains the source code for the official website of Arul Digitals, a premier printing and stickering shop located in Chittoor, Andhra Pradesh. The website is a modern, responsive Single Page Application (SPA) built with React and Vite. It serves as a digital storefront, showcasing the company's products, services, and commitment to quality.

## ✨ Features

*   **Responsive Design:** Fully responsive layout for optimal viewing on desktops, tablets, and mobile devices.
*   **Modern UI/UX:** Clean, professional design with smooth animations and a user-friendly interface.
*   **Dynamic Carousels:** Interactive carousels built with Swiper.js to showcase products, client brands, and machinery.
*   **Product Showcase:** A dedicated "Printing & Branding" page with a comprehensive grid of all available products.
*   **WhatsApp Integration:** "Get It Now" buttons on product cards directly open WhatsApp for easy inquiries.
*   **Interactive Map:** An embedded Leaflet map on the Contact page to easily locate the shop.
*   **Functional Contact Form:** A secure contact form that sends messages directly to the business email using EmailJS, complete with client-side validation.
*   **SEO Optimized:** Built with a strong focus on Search Engine Optimization, including rich meta tags, a JSON-LD schema for local business, a `sitemap.xml`, and a `robots.txt`.
*   **Performance Focused:** Utilizes lazy loading for pages and components to ensure fast initial load times.

## 🛠️ Tech Stack

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Routing:** React Router
*   **Styling:** Sass (SCSS) & Bootstrap
*   **Icons:** Lucide React
*   **Carousels:** Swiper.js
*   **Maps:** Leaflet & React-Leaflet
*   **Email Service:** EmailJS
*   **Deployment:** Netlify

## 📁 Project Structure

The project follows a standard React application structure, organized for clarity and scalability.

```
/
├── public/                 # Static assets (images, sitemap, robots.txt)
├── src/
│   ├── components/         # Reusable UI components (HeroSection, Loader, etc.)
│   ├── layouts/            # Structural components (NavBar, Footer)
│   ├── pages/              # Page-level components (Home, About, Contact, Shop)
│   ├── routes/             # Application routing configuration
│   ├── styles/             # Global and component-specific Sass files
│   ├── utils/              # JSON data for products
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Main entry point
├── .env.example            # Example environment variables
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/sreenadh2000/arul-digitals.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd arul-digitals
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your EmailJS credentials. You can get these from your EmailJS account dashboard.

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

5.  **Start the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

This project comes with several useful scripts defined in `package.json`:

*   `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
*   `npm run build`: Compiles the application for production into the `dist` directory.
*   `npm run lint`: Runs ESLint to check for code quality and style issues.
*   `npm run preview`: Starts a local server to preview the production build.