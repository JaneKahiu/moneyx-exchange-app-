import { useState, useEffect, useRef } from 'react';

function Dropdown({ trigger, children, align = 'right' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const alignmentClass = align === 'left' ? 'left-0' : 'right-0';

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div
          className={`absolute ${alignmentClass} mt-2 w-64 bg-[#1a1a1a] dark:bg-white border border-[#2a2a2a] dark:border-gray-200 rounded-xl shadow-2xl z-50 animate-slideIn overflow-hidden`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
