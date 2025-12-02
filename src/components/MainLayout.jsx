import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] dark:bg-gray-50 transition-colors duration-200">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header - Full Width */}
      <Header onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Below Header */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Page Content */}
        <main id="main-content" className="flex-1 overflow-auto" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
