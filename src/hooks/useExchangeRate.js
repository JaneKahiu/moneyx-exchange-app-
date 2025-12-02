import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate exchange rates
 * @param {number} sendAmount - The amount to send
 * @param {object} sendBank - The sending bank
 * @param {object} receiveBank - The receiving bank
 * @returns {object} - { receiveAmount, exchangeRate, isLoading, error }
 */
function useExchangeRate(sendAmount, sendBank, receiveBank) {
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(22.10446); // Mock rate
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call delay
    setIsLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      try {
        // Mock exchange rate calculation
        // In production, this would be an API call based on sendBank and receiveBank
        const mockRate = 22.10446;
        setExchangeRate(mockRate);

        // Calculate receive amount
        const calculated = sendAmount * mockRate;
        setReceiveAmount(calculated);

        setIsLoading(false);
      } catch (err) {
        setError('Failed to calculate exchange rate');
        setIsLoading(false);
      }
    }, 300); // Simulate network delay

    return () => clearTimeout(timer);
  }, [sendAmount, sendBank, receiveBank]);

  return {
    receiveAmount,
    exchangeRate,
    isLoading,
    error,
  };
}

export default useExchangeRate;
