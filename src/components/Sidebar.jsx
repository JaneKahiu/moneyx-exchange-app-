import { useState } from 'react';

function Sidebar() {
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
    <aside className="w-64 bg-dark-darker border-r border-gray-800 flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1 py-6">
        {/* Navigation Items */}
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                activeItem === item.id
                  ? 'bg-dark-card text-white border-l-4 border-primary'
                  : 'text-gray-400 hover:bg-dark-lighter hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}

          {/* Account with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                isAccountOpen
                  ? 'bg-dark-lighter text-white'
                  : 'text-gray-400 hover:bg-dark-lighter hover:text-white'
              }`}
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
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg">
                  Security
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-dark-lighter rounded-lg">
                  Verification
                </button>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-400 hover:bg-dark-lighter hover:text-white transition-all duration-200">
            <span className="text-xl">⚙️</span>
            <span className="font-medium">Settings</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
