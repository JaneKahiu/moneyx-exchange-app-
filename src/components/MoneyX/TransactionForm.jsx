import { useState } from 'react';
import { useExchange } from '../../store/exchangeStore';
import CurrencyInput from './CurrencyInput';
import BankSelector from './BankSelector';
import SwapButton from './SwapButton';
import { Button } from '../ui';
import { validateAmount } from '../../utils/formatters';

// Mock bank data
const availableBanks = [
  { id: 1, name: 'Salam Bank', icon: '🏦' },
  { id: 2, name: 'Premier Bank', icon: '🏛️' },
  { id: 3, name: 'National Bank', icon: '🏢' },
  { id: 4, name: 'Metro Bank', icon: '🏪' },
  { id: 5, name: 'Trust Bank', icon: '🏦' },
];

function TransactionForm() {
  const {
    sendAmount,
    receiveAmount,
    sendBank,
    receiveBank,
    updateSendAmount,
    updateReceiveAmount,
    updateSendBank,
    updateReceiveBank,
    swapTransaction,
  } = useExchange();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle send amount change
  const handleSendAmountChange = (e) => {
    const value = e.target.value;
    updateSendAmount(value);
    // Clear errors on change
    if (errors.sendAmount) {
      setErrors(prev => ({ ...prev, sendAmount: null }));
    }
  };

  // Handle receive amount change
  const handleReceiveAmountChange = (e) => {
    const value = e.target.value;
    updateReceiveAmount(value);
    // Clear errors on change
    if (errors.receiveAmount) {
      setErrors(prev => ({ ...prev, receiveAmount: null }));
    }
  };

  // Handle swap button click
  const handleSwap = () => {
    swapTransaction();
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Validate send amount
    const sendValidation = validateAmount(sendAmount);
    if (!sendValidation.isValid) {
      newErrors.sendAmount = sendValidation.error;
    }

    // Validate receive amount
    const receiveValidation = validateAmount(receiveAmount);
    if (!receiveValidation.isValid) {
      newErrors.receiveAmount = receiveValidation.error;
    }

    // Validate banks selected
    if (!sendBank) {
      newErrors.sendBank = 'Please select a sending bank';
    }
    if (!receiveBank) {
      newErrors.receiveBank = 'Please select a receiving bank';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Transaction submitted:', {
        sendAmount,
        receiveAmount,
        sendBank,
        receiveBank,
      });

      setSubmitSuccess(true);
      // TODO: Implement actual transaction submission
    } catch (error) {
      setSubmitError('Failed to submit transaction. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* MoneyX Heading */}
      <h1 className="text-2xl font-semibold text-white dark:text-gray-900 mb-6">MoneyX</h1>
      
      {/* Transaction Info Card */}
      <div className="bg-[#1a1a1a] dark:bg-white rounded-2xl p-6 space-y-6 border border-[#2a2a2a] dark:border-gray-200 shadow-xl dark:shadow-lg transition-all duration-200">
        <h2 className="text-base font-normal text-gray-400 dark:text-gray-600">Transaction Info</h2>

        {/* Success Message */}
        {submitSuccess && (
          <div className="flex items-center gap-3 p-4 bg-emerald-500/10 dark:bg-emerald-50 border border-emerald-500/30 dark:border-emerald-200 rounded-xl animate-fadeIn" role="alert">
            <svg className="w-5 h-5 text-emerald-500 dark:text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-emerald-400 dark:text-emerald-700 font-medium">Transaction submitted successfully!</p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="flex items-center gap-3 p-4 bg-red-500/10 dark:bg-red-50 border border-red-500/30 dark:border-red-200 rounded-xl animate-fadeIn" role="alert">
            <svg className="w-5 h-5 text-red-500 dark:text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-red-400 dark:text-red-700 font-medium">{submitError}</p>
          </div>
        )}

        {/* Side-by-Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* You Send Section */}
          <div className="space-y-3">
            <div>
              <h3 className="text-white dark:text-gray-900 font-medium text-base mb-1">You Send</h3>
              <p className="text-gray-500 dark:text-gray-600 text-sm mb-3">I want to Recieve</p>
              
              <CurrencyInput
                value={sendAmount}
                onChange={handleSendAmountChange}
                currency="USD"
              />
              {errors.sendAmount && (
                <p className="mt-2 text-sm text-red-400 dark:text-red-600 animate-fadeIn" role="alert">{errors.sendAmount}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-400 dark:text-gray-600 text-sm font-medium mb-2">Asset</label>
              <BankSelector
                selectedBank={sendBank}
                banks={availableBanks}
                onSelect={updateSendBank}
              />
              {errors.sendBank && (
                <p className="mt-2 text-sm text-red-400 dark:text-red-600 animate-fadeIn" role="alert">{errors.sendBank}</p>
              )}
            </div>
          </div>

          {/* You Receive Section */}
          <div className="space-y-3">
            <div>
              <h3 className="text-white dark:text-gray-900 font-medium text-base mb-1">You Receive</h3>
              <p className="text-gray-500 dark:text-gray-600 text-sm mb-3">I want to Recieve</p>
              
              <CurrencyInput
                value={receiveAmount}
                onChange={handleReceiveAmountChange}
                currency="USD"
                hideLabel={true}
              />
              {errors.receiveAmount && (
                <p className="mt-2 text-sm text-red-400 dark:text-red-600 animate-fadeIn" role="alert">{errors.receiveAmount}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-400 dark:text-gray-600 text-sm font-medium mb-2">Asset</label>
              <BankSelector
                selectedBank={receiveBank}
                banks={availableBanks}
                onSelect={updateReceiveBank}
              />
              {errors.receiveBank && (
                <p className="mt-2 text-sm text-red-400 dark:text-red-600 animate-fadeIn" role="alert">{errors.receiveBank}</p>
              )}
            </div>
          </div>

          {/* Swap Button - Centered between columns */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <SwapButton onClick={handleSwap} />
          </div>
        </div>

        {/* Mobile Swap Button */}
        <div className="md:hidden flex justify-center -my-2">
          <SwapButton onClick={handleSwap} />
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-3 p-4 bg-red-500/10 dark:bg-red-50 border-l-4 border-red-500 rounded-lg">
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="w-5 h-5 text-red-500 dark:text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-700">
            This is only an estimated price based on current market rates. The
            final price will be confirmed when we receive the funds.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Submit transaction"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
