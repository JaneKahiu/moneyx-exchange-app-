import { useState } from 'react';
import { useTheme } from '../store/themeStore';
import DepositModal from './DepositModal';
import Dropdown from './ui/Dropdown';

function Header({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Transaction Completed',
      message: 'Your exchange of $100 was successful',
      time: '5 min ago',
      unread: true,
    },
    {
      id: 2,
      title: 'New Rate Available',
      message: 'Better exchange rate for USD to EUR',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Deposit Received',
      message: 'Your deposit of $500 has been credited',
      time: '2 hours ago',
      unread: false,
    },
  ];

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
            onClick={() => setIsDepositModalOpen(true)}
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

          {/* Notification Dropdown */}
          <Dropdown
            trigger={
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
            }
          >
            <div className="py-2">
              <div className="px-4 py-2 border-b border-[#2a2a2a] dark:border-gray-200">
                <h3 className="text-sm font-semibold text-white dark:text-gray-900">
                  Notifications
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors cursor-pointer ${
                      notification.unread ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notification.unread && (
                        <span className="w-2 h-2 bg-primary rounded-full mt-1.5"></span>
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white dark:text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-xs text-[#9ca3af] dark:text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-[#6b7280] dark:text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-[#2a2a2a] dark:border-gray-200">
                <button className="text-xs text-primary hover:text-primary-dark font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          </Dropdown>

          {/* User Profile Dropdown */}
          <Dropdown
            trigger={
              <button
                className="flex items-center gap-2 p-2 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
                aria-label="User profile"
              >
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff&size=128"
                  alt="User profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            }
          >
            <div className="py-2">
              {/* Profile Header */}
              <div className="px-4 py-3 border-b border-[#2a2a2a] dark:border-gray-200">
                <div className="flex items-center gap-3">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff&size=128"
                    alt="User profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white dark:text-gray-900">
                      John Doe
                    </p>
                    <p className="text-xs text-[#9ca3af] dark:text-gray-600">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Menu Items */}
              <div className="py-1">
                <a
                  href="#profile"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white dark:text-gray-900 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </a>
                <a
                  href="#settings"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white dark:text-gray-900 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
                <a
                  href="#transactions"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white dark:text-gray-900 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Transaction History
                </a>
                <a
                  href="#wallet"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white dark:text-gray-900 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  My Wallet
                </a>
              </div>

              {/* Logout */}
              <div className="border-t border-[#2a2a2a] dark:border-gray-200 py-1">
                <button
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-500 hover:bg-[#262626] dark:hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </Dropdown>

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
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-[#9ca3af] dark:text-gray-600 hover:text-white dark:hover:text-gray-900 hover:bg-[#1a1a1a] dark:hover:bg-gray-100 rounded-lg transition-all focus-visible-ring"
            aria-label="Change language"
          >
            <span className="text-xl">🇬🇧</span>
            <svg
              className="w-3.5 h-3.5"
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

      {/* Deposit Modal */}
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
      />
    </header>
  );
}

export default Header;
