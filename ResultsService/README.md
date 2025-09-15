# PAIO 2025 Results - Independent Results Display System

This is a completely independent Next.js application for displaying the official results of the Pan African Informatics Olympiad (PAIO) 2025. This system is designed to be hosted on `results.pafricanoi.com` and is completely separate from the main PAIO website.

## 🏆 Features

- **Complete Independence**: Zero dependencies on the main PAIO system
- **Preserved Data**: Exact table structure, colors, and contestant order from the original results
- **Modern Design**: Beautiful, responsive interface with animations
- **Interactive Filtering**: Filter by day, country, and other criteria
- **Mobile Responsive**: Optimized for all device sizes
- **Static Export**: Can be deployed as static files

## 🛠 Technology Stack

- **Framework**: Next.js 15.2.0
- **Styling**: TailwindCSS 3.4.1
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: For type safety
- **Deployment**: Static export ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or bun package manager

### Installation

1. Navigate to the ResultsService directory:
```bash
cd ResultsService
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

4. Open [http://localhost:3001](http://localhost:3001) to view the results.

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## 📊 Data Structure

The results data is stored in `src/data/results.ts` and includes:

- Complete contestant information
- Individual problem scores
- Day totals and global totals
- Medal classifications
- Special awards and honorable mentions
- Competition statistics

## 🎨 Design Features

- **Unique Header**: Custom design different from the main PAIO site
- **Color-Coded Rankings**: Visual hierarchy based on performance
- **Glass Effects**: Modern glassmorphism design elements
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Table**: Horizontal scrolling on mobile devices

## 🌐 Deployment

This application is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

The build output will be in the `out` directory after running `npm run build`.

## 📁 Project Structure

```
ResultsService/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── data/
│       └── results.ts
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔧 Configuration

- **Port**: Runs on port 3001 by default (different from main system)
- **Export**: Configured for static export
- **Styling**: Independent Tailwind configuration
- **TypeScript**: Strict type checking enabled

## 📝 Data Preservation

All original data from the HTML file has been preserved including:

- Exact contestant rankings and order
- Original color coding (gold, silver, bronze)
- All scoring data and calculations
- Medal classifications
- Special awards and honorable mentions
- Unofficial participant markings

## 🎯 Independence Features

This system is completely independent with:

- Separate package.json and dependencies
- Unique styling system
- Different port configuration
- Independent build process
- No references to the main PAIO system
- Can be deployed separately to results.pafricanoi.com

## 📞 Support

For issues related to the results display system, please contact the PAIO organizing committee.
