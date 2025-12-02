# MoneyX Dashboard

A modern, accessible cryptocurrency exchange dashboard built with React, Vite, and Tailwind CSS.

![MoneyX Dashboard](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.3-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 🎨 **Modern Dark UI** - Sleek dark theme with green accent colors
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- 🔄 **Real-time Exchange** - Live currency conversion with swap functionality
- 🎭 **Smooth Animations** - Micro-interactions and transitions throughout
- 🔐 **Form Validation** - Client-side validation with helpful error messages
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development
- 📦 **Component Library** - Reusable UI components (Button, Input, Select)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/JaneKahiu/moneyx-exchange-app-.git
cd dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Select.jsx
│   ├── MoneyX/          # MoneyX feature components
│   │   ├── TransactionForm.jsx
│   │   ├── CurrencyInput.jsx
│   │   ├── BankSelector.jsx
│   │   └── SwapButton.jsx
│   ├── MainLayout.jsx   # Main app layout
│   ├── Sidebar.jsx      # Navigation sidebar
│   └── Header.jsx       # Top navigation bar
├── hooks/               # Custom React hooks
│   ├── useExchangeRate.js
│   └── useCurrencyConverter.js
├── store/               # State management
│   └── exchangeStore.jsx
├── utils/               # Utility functions
│   └── formatters.js
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles & Tailwind
```

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library
- **Vite 5.3** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework

### State Management
- **React Context API** - Global state management
- **Zustand 4.5** - Lightweight state management (future integration)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Component Usage

### Button Component
```jsx
import { Button } from './components/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Submit
</Button>
```

**Props:** `variant` (primary/secondary/outline/danger), `size` (sm/md/lg), `disabled`, `fullWidth`

### Input Component
```jsx
import { Input } from './components/ui';

<Input 
  label="Amount" 
  value={amount} 
  onChange={handleChange}
  placeholder="0.00"
  error={errors.amount}
/>
```

**Props:** `label`, `value`, `onChange`, `placeholder`, `type`, `error`, `icon`, `rightElement`

### Select Component
```jsx
import { Select } from './components/ui';

<Select
  label="Select Bank"
  options={banks}
  value={selectedBank}
  onChange={setSelectedBank}
/>
```

**Props:** `options`, `value`, `onChange`, `placeholder`, `label`, `error`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🎯 Key Features Breakdown

### Exchange Form
- Dual currency input fields (Send/Receive)
- Bank selection dropdowns with icons
- Swap button to reverse transaction
- Real-time exchange rate calculation
- Form validation with error messages
- Loading states during submission

### Responsive Design
- Mobile hamburger menu
- Collapsible sidebar on small screens
- Touch-friendly tap targets
- Responsive typography and spacing

### Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- Skip to main content link

### Animations
- Fade-in effects for alerts
- Slide animations for sidebar
- Hover transitions on buttons
- Loading spinners
- Smooth swap button rotation

## 🌈 Color Palette

```css
/* Primary Green */
#10B981 - Main accent color
#059669 - Dark variant
#34D399 - Light variant

/* Dark Theme */
#0F172A - Background
#1E293B - Card background
#334155 - Hover state
#111827 - Sidebar background
```

## 📝 Code Quality

- **ESLint** configuration for React best practices
- **Prettier** for consistent code formatting
- **Component-driven** architecture
- **Custom hooks** for business logic separation
- **Utility functions** for reusable logic

## 🚧 Future Enhancements

- [ ] Real API integration for exchange rates
- [ ] User authentication
- [ ] Transaction history
- [ ] Multi-currency support
- [ ] Chart visualizations
- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)
- [ ] Unit and integration tests



Built with  using React + Vite + Tailwind CSS
