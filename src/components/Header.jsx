import { useTheme } from '../store/themeStore';

function Header({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#141414] dark:bg-white border-b border-[#2a2a2a] dark:border-gray-200 px-4 sm:px-6 py-4 transition-colors duration-200" role="banner">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-all focus-visible-ring"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-white dark:text-gray-900 font-medium hover:text-primary transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-[#9ca3af] dark:text-gray-600 font-medium hover:text-white dark:hover:text-gray-900 transition-colors"
          >
            Market
          </a>
          <a
            href="#rates"
            className="text-[#9ca3af] dark:text-gray-600 font-medium hover:text-white dark:hover:text-gray-900 transition-colors"
          >
            Rates
          </a>
          <a
            href="#blog"
            className="text-[#9ca3af] dark:text-gray-600 font-medium hover:text-white dark:hover:text-gray-900 transition-colors"
          >
            Blog
          </a>
        </nav>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3">
          {/* Deposit Button */}
          <button
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 focus-visible-ring"
            aria-label="Deposit funds"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Deposit
          </button>

          {/* Notification Icon with Badge */}
          <button
            className="relative p-2 text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
            aria-label="Notifications"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button
            className="flex items-center gap-2 p-2 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
            aria-label="User profile"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          </button>

          {/* Theme Toggle */}
          <button
            className="p-2 text-[#9ca3af] dark:text-gray-600 hover:text-white dark:hover:text-gray-900 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              // Moon icon for dark mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* Language Selector */}
          <button
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-[#9ca3af] dark:text-gray-600 hover:text-white dark:hover:text-gray-900 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
            aria-label="Change language"
          >
            <span className="text-lg">🇬🇧</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
