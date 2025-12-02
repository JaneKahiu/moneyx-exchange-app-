import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for currency conversion with debouncing and formatting
 * @param {number} initialValue - Initial currency value
 * @param {number} debounceDelay - Delay in milliseconds for debouncing (default: 500ms)
 * @returns {object} - { value, debouncedValue, setValue, formattedValue, isDebouncing }
 */
function useCurrencyConverter(initialValue = 0, debounceDelay = 500) {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const [isDebouncing, setIsDebouncing] = useState(false);

  // Debounce the input value
  useEffect(() => {
    setIsDebouncing(true);
    
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceDelay]);

  // Format currency value for display
  const formatCurrency = useCallback((amount) => {
    if (isNaN(amount) || amount === null || amount === undefined) {
      return '0.00';
    }

    // Format with up to 8 decimal places, removing trailing zeros
    return parseFloat(amount).toFixed(8).replace(/\.?0+$/, '');
  }, []);

  // Parse input value (remove non-numeric characters except decimal point)
  const parseInput = useCallback((input) => {
    if (typeof input !== 'string') {
      return parseFloat(input) || 0;
    }

    // Remove all characters except digits and decimal point
    const cleaned = input.replace(/[^\d.]/g, '');
    
    // Handle multiple decimal points (keep only the first one)
    const parts = cleaned.split('.');
    const parsed = parts.length > 1 
      ? `${parts[0]}.${parts.slice(1).join('')}`
      : cleaned;

    return parseFloat(parsed) || 0;
  }, []);

  // Handle input change with validation
  const handleChange = useCallback((input) => {
    const parsed = parseInput(input);
    setValue(parsed);
  }, [parseInput]);

  // Format the current value for display
  const formattedValue = formatCurrency(value);

  // Format the debounced value for display
  const formattedDebouncedValue = formatCurrency(debouncedValue);

  return {
    value,
    debouncedValue,
    setValue: handleChange,
    formattedValue,
    formattedDebouncedValue,
    isDebouncing,
    formatCurrency,
    parseInput,
  };
}

export default useCurrencyConverter;
