import { useState } from 'react';

function Sidebar({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState('moneyx');
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'xchange', label: 'XCHANGE', icon: '💱' },
    { id: 'moneyx', label: 'MoneyX', icon: '💲' },
    { id: 'p2p', label: 'P2P Trading', icon: '👥' },
    { id: 'swap', label: 'Swap Crypto', icon: '🔄' },
  ];

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-[#111827] border-r border-gray-800 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
        aria-label="Close sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Sidebar Content */}
      <div className="flex-1 py-6">
        {/* Navigation Items */}
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 focus-visible-ring ${
                activeItem === item.id
                  ? 'bg-[#374151] text-white border-l-4 border-primary'
                  : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
              }`}
              aria-current={activeItem === item.id ? 'page' : undefined}
              aria-label={`Navigate to ${item.label}`}
            >
              <span className="text-xl" aria-hidden="true">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}

          {/* Account with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 focus-visible-ring ${
                isAccountOpen
                  ? 'bg-[#1F2937] text-white'
                  : 'text-gray-400 hover:bg-[#1F2937] hover:text-white'
              }`}
              aria-expanded={isAccountOpen}
              aria-label="Account menu"
            >
              <span className="text-xl">🔑</span>
              <span className="font-medium">Account</span>
              <svg
                className={`ml-auto w-4 h-4 transition-transform ${
                  isAccountOpen ? 'rotate-180' : ''
                }`}
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

            {/* Dropdown Menu */}
            {isAccountOpen && (
              <div className="mt-1 ml-4 space-y-1">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-lg">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-lg">
                  Security
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-lg">
                  Verification
                </button>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-400 hover:bg-[#1F2937] hover:text-white transition-all duration-200 focus-visible-ring"
            aria-label="Settings"
          >
            <span className="text-xl" aria-hidden="true">⚙️</span>
            <span className="font-medium">Settings</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
