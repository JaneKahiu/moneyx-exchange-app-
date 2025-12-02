/**
 * Format a number as currency with specified decimal places
 * @param {number|string} amount - The amount to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} - Formatted currency string
 * @example
 * formatCurrency(1234.5678) // "1,234.57"
 * formatCurrency(0.001, 8) // "0.001"
 */
export function formatCurrency(amount, decimals = 2) {
  const num = parseFloat(amount);

  if (isNaN(num)) {
    return '0.00';
  }

  // Format with specified decimals and remove trailing zeros
  const formatted = num.toFixed(decimals);
  const withoutTrailingZeros = formatted.replace(/\.?0+$/, '');

  // Add thousand separators
  const parts = withoutTrailingZeros.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

/**
 * Format exchange rate for display
 * @param {number} rate - The exchange rate value
 * @param {number} decimals - Number of decimal places (default: 6)
 * @returns {string} - Formatted exchange rate
 * @example
 * formatExchangeRate(22.10446) // "22.10446"
 * formatExchangeRate(0.045123456) // "0.045123"
 */
export function formatExchangeRate(rate, decimals = 6) {
  const num = parseFloat(rate);

  if (isNaN(num)) {
    return '0.00';
  }

  // Format with specified decimals and remove trailing zeros
  const formatted = num.toFixed(decimals);
  return formatted.replace(/\.?0+$/, '');
}

/**
 * Validate if a value is a valid amount (positive number)
 * @param {any} value - The value to validate
 * @returns {object} - { isValid: boolean, error: string|null, parsedValue: number|null }
 * @example
 * validateAmount("123.45") // { isValid: true, error: null, parsedValue: 123.45 }
 * validateAmount("-10") // { isValid: false, error: "Amount must be positive", parsedValue: null }
 * validateAmount("abc") // { isValid: false, error: "Invalid amount", parsedValue: null }
 */
export function validateAmount(value) {
  // Handle empty or null values
  if (value === '' || value === null || value === undefined) {
    return {
      isValid: false,
      error: 'Amount is required',
      parsedValue: null,
    };
  }

  // Parse the value
  const parsed = parseFloat(value);

  // Check if it's a valid number
  if (isNaN(parsed)) {
    return {
      isValid: false,
      error: 'Invalid amount',
      parsedValue: null,
    };
  }

  // Check if it's positive
  if (parsed <= 0) {
    return {
      isValid: false,
      error: 'Amount must be positive',
      parsedValue: null,
    };
  }

  // Check if it's not infinity
  if (!isFinite(parsed)) {
    return {
      isValid: false,
      error: 'Amount is too large',
      parsedValue: null,
    };
  }

  return {
    isValid: true,
    error: null,
    parsedValue: parsed,
  };
}

/**
 * Clean and parse currency input string
 * @param {string} input - The input string to clean
 * @returns {string} - Cleaned numeric string
 * @example
 * cleanCurrencyInput("1,234.56") // "1234.56"
 * cleanCurrencyInput("$123.45") // "123.45"
 * cleanCurrencyInput("12.34.56") // "12.3456"
 */
export function cleanCurrencyInput(input) {
  if (typeof input !== 'string') {
    return String(input);
  }

  // Remove all non-numeric characters except decimal point
  let cleaned = input.replace(/[^\d.]/g, '');

  // Handle multiple decimal points (keep only the first one)
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = `${parts[0]}.${parts.slice(1).join('')}`;
  }

  return cleaned;
}

/**
 * Calculate percentage change between two values
 * @param {number} oldValue - The original value
 * @param {number} newValue - The new value
 * @returns {string} - Formatted percentage change with sign
 * @example
 * calculatePercentageChange(100, 110) // "+10.00%"
 * calculatePercentageChange(100, 95) // "-5.00%"
 */
export function calculatePercentageChange(oldValue, newValue) {
  const old = parseFloat(oldValue);
  const newVal = parseFloat(newValue);

  if (isNaN(old) || isNaN(newVal) || old === 0) {
    return '0.00%';
  }

  const change = ((newVal - old) / old) * 100;
  const sign = change >= 0 ? '+' : '';

  return `${sign}${change.toFixed(2)}%`;
}
