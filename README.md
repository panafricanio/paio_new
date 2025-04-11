# Pan African Informatics Olympiad (PAIO) Website

![PAIO Website](https://img.shields.io/badge/PAIO-2025-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

Official website for the Pan African Informatics Olympiad (PAIO) 2025, a prestigious informatics competition that brings together talented young programmers from across the African continent.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Modern Design**: Fully responsive design with fluid animations powered by Framer Motion
- **Multi-language Support**: Support for different languages
- **Official Documents**: Access to competition regulations and documents in multiple languages
- **Competition Information**: Details about eligibility, team composition, and competition format
- **Key Dates**: Timeline of important dates related to the competition
- **Frequently Asked Questions**: Comprehensive FAQ section
- **Contact Information**: Multiple ways to get in touch with the organizers

## 🛠 Technologies Used

- **Framework**: Next.js 15.2.0
- **Styling**: TailwindCSS 3.4.1
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components and shadcn/ui
- **TypeScript**: For type safety and better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd PAIOWebsite
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
PAIOWebsite/
├── src/                    # Source files
│   ├── app/                # Next.js App Router
│   │   ├── regulations/    # Regulations page
│   │   ├── important-dates/# Important dates page
│   │   ├── sponsors/       # Sponsors page
│   │   ├── faqs/           # FAQs page
│   │   ├── contact/        # Contact page
│   │   ├── media/          # Media page
│   │   ├── visiting-south-africa/ # Visiting info page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── LanguageSelector.tsx # Language selector
│   │   └── ui/             # UI components
│   └── lib/                # Utility functions and libraries
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
│   └── AOA.svg             # African Olympiad Academy logo
├── build/                  # Build output
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 📚 Documentation

### Pages

- **Home**: Introduction to PAIO with key information and registration links
- **Regulations**: Official competition rules and guidelines
- **Important Dates**: Timeline of registration deadlines and competition dates
- **Sponsors**: Information about sponsors and supporting organizations
- **FAQs**: Answers to frequently asked questions about the competition
- **Contact**: Ways to get in touch with the organization team
- **Visiting South Africa**: Information for participants visiting South Africa
- **Media**: Press releases and news about the competition

### Adding Content

#### Adding New Regulations Documents

1. Update the document links in `src/app/regulations/page.tsx`:

```jsx
<motion.a
  href="http://example.com/path/to/document.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all shadow-sm"
>
  <Download className="mr-2 h-4 w-4" />
  Download
</motion.a>
```

#### Updating Important Dates

1. Modify the dates in `src/app/important-dates/page.tsx`:

```jsx
<tr className="transition-colors hover:bg-blue-50/30">
  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">
    Sat, Sep 13
  </td>
  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
    —
  </td>
  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-700 font-medium">
    Contest Start
  </td>
</tr>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created and maintained by the Pan African Informatics Olympiad committee © 2025
