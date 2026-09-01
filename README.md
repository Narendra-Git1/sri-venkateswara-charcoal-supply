Sri Venkateswara Charcoal Supply

A modern, responsive business website for Sri Venkateswara Charcoal Supply, built to showcase charcoal products, explain wholesale and retail supply options, provide product details, answer common questions, and make customer enquiries easy.

📌 Project Status

Version: 1.0
Status: ✅ Version 1 Development Complete
Build: ✅ Production build successful
Responsive: ✅ Mobile / Tablet / Desktop tested
SEO: ✅ Basic SEO implemented
Performance: ✅ Product images optimized
GitHub: ✅ Version controlled

🎯 Project Overview

Sri Venkateswara Charcoal Supply provides charcoal products for different customer and business requirements.

The website is designed to provide:

Product information
Product-specific details
Retail supply information
Wholesale supply information
Product gallery
Frequently Asked Questions
Contact and enquiry options
Responsive experience across devices
Basic SEO readiness
Optimized website images

The project follows a structured development process using multiple sprints, with each major feature being tested before moving forward.

✨ Features
🏠 Home Page

The home page provides the main introduction to the business.

Includes:

Business introduction
Hero section
Call-to-action
Why Choose Us
About Us
Products
Wholesale & Retail
Gallery
FAQ
Contact section
🔥 Products

The website currently supports four charcoal products:

Iron Charcoal
Grounding Charcoal
Tandoor Charcoal
BBQ Charcoal

Each product contains:

Product name
Short description
Product image
Availability status
Product details page
Enquiry option
📦 Product Details

Each product has its own dynamic route.

Example:

/products/iron-charcoal
/products/grounding-charcoal
/products/tandoor-charcoal
/products/bbq-charcoal

Product detail pages provide:

Product image
Product name
Description
Availability
Contact actions
Product enquiry button
Back to Products navigation
🏢 Wholesale & Retail

The website separates supply requirements into:

Retail Supply

Suitable for:

Household requirements
Cooking requirements
BBQ requirements
Wholesale Supply

Suitable for:

Bulk requirements
Commercial requirements
Business enquiries

Both enquiry buttons navigate to the Contact page.

🖼️ Gallery

The gallery showcases the available charcoal products.

Includes:

Product images
Product names
Responsive grid
Accessible image alt text
Optimized image loading
❓ FAQ

The FAQ section uses native HTML <details> and <summary> elements.

Current topics include:

Types of charcoal supplied
Wholesale quantities
Household purchases
Product enquiries
Delivery availability

The FAQ works without additional JavaScript.

📞 Contact

The Contact page provides:

Phone information
WhatsApp information
Location
Business hours
Contact actions
Enquiry form

The enquiry form contains:

Name
Phone Number
Requirement

Basic browser-side required-field validation is implemented.

Business information is centralized in:

src/data/business.js

Currently, business contact values can be configured there.

📱 Responsive Design

The website has been tested at:

Desktop
1440 × 900

Tablet
768 × 1024

Mobile
375 × 667

Responsive behavior includes:

Responsive Navbar
Mobile hamburger menu
Responsive product grid
Responsive gallery
Responsive wholesale/retail sections
Responsive contact layout
Mobile sticky contact bar
Responsive product detail pages
🔎 SEO

Basic SEO has been implemented in index.html.

Includes:

HTML language declaration
Responsive viewport
Page title
Meta description
Robots metadata
Theme color

Current page title:

Sri Venkateswara Charcoal Supply | Charcoal Supplier
⚡ Performance

Product images were optimized as part of Sprint 6.

Optimized image sizes:

bbq-charcoal.jpg        ~268 KB
grounding-charcoal.jpg  ~363 KB
iron-charcoal.jpg       ~302 KB
tandoor-charcoal.jpg    ~266 KB

The four images were reduced from approximately 11 MB total to approximately 1.17 MB total.

Gallery images use browser-native lazy loading where appropriate.

🛠️ Technology Stack
Frontend
React
JavaScript
JSX
Tailwind CSS
React Router
Build Tool
Vite
Version Control
Git
GitHub
📁 Project Structure
sri-venkateswara-charcoal-supply/
│
├── public/
│   ├── images/
│   │   ├── bbq-charcoal.jpg
│   │   ├── grounding-charcoal.jpg
│   │   ├── iron-charcoal.jpg
│   │   └── tandoor-charcoal.jpg
│   │
│   └── ...
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── SectionHeading.jsx
│   │   │   └── WhyChooseUs.jsx
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactActions.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── StickyContactBar.jsx
│   │   │
│   │   ├── faq/
│   │   │   └── FAQSection.jsx
│   │   │
│   │   ├── gallery/
│   │   │   └── GallerySection.jsx
│   │   │
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductsSection.jsx
│   │   │
│   │   └── wholesale/
│   │       └── WholesaleSection.jsx
│   │
│   ├── data/
│   │   ├── business.js
│   │   └── products.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   │
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── FAQ/
│   │   │   └── FAQ.jsx
│   │   │
│   │   ├── Gallery/
│   │   │   └── Gallery.jsx
│   │   │
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── ProductDetails/
│   │   │   └── ProductDetails.jsx
│   │   │
│   │   ├── Products/
│   │   │   └── Products.jsx
│   │   │
│   │   └── WholesaleRetail/
│   │       └── WholesaleRetail.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
🚦 Application Routes

The application currently supports:

Route	Page
/	Home
/products	Products
/products/:productId	Product Details
/about	About Us
/wholesale-retail	Wholesale & Retail
/gallery	Gallery
/faq	FAQ
/contact	Contact
🧭 Navigation Flow
                    HOME
                      │
        ┌─────────────┼──────────────┐
        ↓             ↓              ↓
    PRODUCTS        ABOUT       WHOLESALE
        │                           │
        ↓                           ↓
 PRODUCT DETAILS                 ENQUIRY
        │                           │
        └─────────────┬─────────────┘
                      ↓
                   CONTACT

Additional navigation:

Home
 ├── Gallery
 ├── FAQ
 └── Contact
💻 Installation

Clone the repository:

git clone https://github.com/Narendra-Git1/sri-venkateswara-charcoal-supply.git

Navigate into the project:

cd sri-venkateswara-charcoal-supply

Install dependencies:

npm install
▶️ Development

Start the development server:

npm run dev

Vite will provide a local development URL, normally:

http://localhost:5173/
🏗️ Production Build

Create a production build:

npm run build

Successful build example:

✓ 48 modules transformed.
✓ built successfully

The production files are generated inside:

dist/
🔍 Production Preview

To preview the production build locally:

npm run preview

Vite normally provides:

http://localhost:4173/

The production preview was tested successfully.

🧪 Testing

The following areas were tested:

Functional
Home page
Products
Product details
About
Wholesale & Retail
Gallery
FAQ
Contact
Navigation
Navbar links
Product links
Product enquiry
Retail enquiry
Wholesale enquiry
Back to Products
Responsive
Desktop
Tablet
Mobile
Forms
Required-field validation
Contact form layout
Production
npm run build
npm run preview
Direct route access
Image loading
🔐 Business Configuration

Business information is centralized in:

src/data/business.js

Example:

export const business = {
  name: "Sri Venkateswara Charcoal Supply",

  phone: "",
  whatsapp: "",
  address: "",
  directionsUrl: "",

  businessHours: "",
}

Before production launch, replace the empty values with the verified business information.

📦 Product Configuration

Products are maintained in:

src/data/products.js

Example structure:

{
  id: "iron-charcoal",
  name: "Iron Charcoal",
  shortDescription:
    "Charcoal suitable for iron and metal-related heating requirements.",
  image: "/images/iron-charcoal.jpg",
  status: "available",
}

This makes it possible to add or update products without rewriting the product components.

🌿 Git Workflow

The project was developed using sprint-based Git checkpoints.

Current major commits:

Sprint 6
f517d53 feat: complete sprint 6 performance and seo

Sprint 5
96c01f9 feat: complete sprint 5 contact conversion

Sprint 4
f0ca8e9 feat: complete sprint 4 business pages

Sprint 3
2d1e13c feat: complete sprint 3 product experience

Earlier project foundation and home-page work were also maintained as separate checkpoints.

🏁 Sprint Completion
Sprint 1  ✅ Project Foundation
Sprint 2  ✅ Home Page
Sprint 3  ✅ Product Experience
Sprint 4  ✅ Business Pages
Sprint 5  ✅ Contact Conversion
Sprint 6  ✅ Performance + SEO
Sprint 7  ✅ Testing
🚀 Deployment

The project is production-ready for deployment to a Vite-compatible static hosting platform.

General deployment process:

Local Development
       ↓
npm run build
       ↓
dist/
       ↓
Deploy dist/
       ↓
Production Website

Before final public launch:

Add verified phone number
Add verified WhatsApp number
Add verified business address
Add verified directions URL
Add verified business hours
Configure production domain
Test the deployed website
Test all direct routes
Verify mobile experience
🔮 Future Improvements

Potential future versions can include:

Real enquiry submission backend
Database integration
WhatsApp enquiry automation
Online order system
Product quantity selection
Pricing management
Admin dashboard
Customer enquiry management
Delivery-area management
Product search/filtering
Advanced SEO
Sitemap
Analytics
Google Business integration
Customer reviews
Image gallery expansion

These are future enhancements and are not required for the current Version 1.

👨‍💻 Development Philosophy

The project follows:

Plan
 ↓
Design
 ↓
Build
 ↓
Test
 ↓
Fix
 ↓
Verify
 ↓
Commit
 ↓
Push

Each sprint is kept as a Git checkpoint so the project can be safely restored to a previous working version if required.

📄 License

This project is currently intended for the business use of:

Sri Venkateswara Charcoal Supply

License and redistribution terms can be added when the project is formally published.

📞 Contact

Sri Venkateswara Charcoal Supply

For product enquiries, wholesale requirements, retail requirements, and commercial charcoal requirements, use the Contact section of the website.

🎉 Version 1 Complete
Sri Venkateswara Charcoal Supply
          │
          ├── React
          ├── Vite
          ├── Tailwind CSS
          ├── React Router
          ├── Responsive UI
          ├── SEO
          ├── Optimized Images
          └── Production Tested

Version 1 development is complete and the project is ready for deployment.