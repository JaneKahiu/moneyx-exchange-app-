function Header() {
  return (
    <header className="bg-dark-darker border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-8">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-white font-medium hover:text-primary transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Market
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Rates
            </a>
            <a
              href="#"
              className="text-gray-400 font-medium hover:text-white transition-colors"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-4">
          {/* Deposit Button */}
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
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
          <button className="relative p-2 text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg transition-all">
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
          <button className="flex items-center gap-2 p-2 hover:bg-dark-lighter rounded-lg transition-all">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          </button>

          {/* Language Selector */}
          <button className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg transition-all">
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
