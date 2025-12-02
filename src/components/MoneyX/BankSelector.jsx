import { useState, useRef, useEffect } from 'react';

function BankSelector({
  selectedBank,
  banks = [],
  onSelect,
  label = 'Asset',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = bank => {
    onSelect(bank);
    setIsOpen(false);
  };

  return (
    <div className="space-y-3" ref={selectorRef}>
      {/* Label */}
      <label className="block text-[#9ca3af] text-sm">{label}</label>

      {/* Selector Button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#1c1c1c] rounded-lg px-4 py-4 flex items-center justify-between hover:bg-[#262626] focus:outline-none transition-all duration-200 border border-[#2a2a2a]"
        >
          {/* Selected Bank */}
          <div className="flex items-center gap-3">
            {selectedBank?.icon && (
              <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                <span className="text-lg">{selectedBank.icon}</span>
              </div>
            )}
            <span className="text-[#ffffff] font-medium text-base">
              {selectedBank?.name || 'Select a bank'}
            </span>
          </div>

          {/* Dropdown Arrow */}
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
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
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg shadow-xl max-h-60 overflow-auto">
            {banks.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">
                No banks available
              </div>
            ) : (
              banks.map(bank => (
                <button
                  key={bank.id}
                  type="button"
                  onClick={() => handleSelect(bank)}
                  className={`
                    w-full px-4 py-3 text-left
                    flex items-center gap-3
                    hover:bg-[#262626]
                    transition-colors duration-150
                    ${
                      selectedBank?.id === bank.id
                        ? 'bg-[#262626]'
                        : ''
                    }
                  `}
                >
                  {/* Bank Icon */}
                  <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                    <span className="text-lg">{bank.icon}</span>
                  </div>

                  {/* Bank Name */}
                  <span className="flex-1 text-[#ffffff] font-medium">{bank.name}</span>

                  {/* Check Mark for Selected */}
                  {selectedBank?.id === bank.id && (
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BankSelector;
