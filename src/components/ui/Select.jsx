import { useState, useRef, useEffect } from 'react';

function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  icon,
  label,
  disabled = false,
  error = '',
  required = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Find selected option
  const selectedOption = options.find(opt => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = option => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`w-full ${className}`} ref={selectRef}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Select Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full bg-dark-lighter text-white rounded-lg px-4 py-3
          border border-gray-700
          flex items-center justify-between
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          hover:bg-dark-hover
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
        `}
      >
        <div className="flex items-center gap-3">
          {/* Icon/Image */}
          {selectedOption?.icon && (
            <div className="flex-shrink-0">{selectedOption.icon}</div>
          )}

          {/* Selected Value or Placeholder */}
          <span className={selectedOption ? 'text-white' : 'text-gray-500'}>
            {selectedOption?.label || placeholder}
          </span>
        </div>

        {/* Dropdown Arrow */}
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
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
        <div className="absolute z-50 w-full mt-2 bg-dark-card border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 text-sm">
              No options available
            </div>
          ) : (
            options.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  w-full px-4 py-3 text-left
                  flex items-center gap-3
                  hover:bg-dark-hover
                  transition-colors duration-150
                  ${
                    option.value === value
                      ? 'bg-dark-hover text-white'
                      : 'text-gray-300'
                  }
                `}
              >
                {/* Option Icon/Image */}
                {option.icon && (
                  <div className="flex-shrink-0">{option.icon}</div>
                )}

                {/* Option Label */}
                <span className="flex-1">{option.label}</span>

                {/* Check Mark for Selected */}
                {option.value === value && (
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

      {/* Error Message */}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Select;
