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
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      {/* Transaction Info Card */}
      <div className="bg-[#1A2332] rounded-2xl p-8 space-y-6">
        <h2 className="text-xl font-semibold text-gray-400">Transaction Info</h2>

        {/* Success Message */}
        {submitSuccess && (
          <div className="flex items-center gap-3 p-4 bg-green-900/20 border border-green-500/30 rounded-lg animate-fadeIn" role="alert">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-green-400">Transaction submitted successfully!</p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg animate-fadeIn" role="alert">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-red-400">{submitError}</p>
          </div>
        )}

        {/* You Send Section */}
        <div className="space-y-4">
          <div>
            <CurrencyInput
              label="You Send"
              subtitle="I want to Recieve"
              value={sendAmount}
              onChange={handleSendAmountChange}
              currency="USD"
            />
            {errors.sendAmount && (
              <p className="mt-2 text-sm text-red-400 animate-fadeIn" role="alert">{errors.sendAmount}</p>
            )}
          </div>

          <div>
            <BankSelector
              label="Asset"
              selectedBank={sendBank}
              banks={availableBanks}
              onSelect={updateSendBank}
            />
            {errors.sendBank && (
              <p className="mt-2 text-sm text-red-400 animate-fadeIn" role="alert">{errors.sendBank}</p>
            )}
          </div>
        </div>

        {/* Swap Button */}
        <SwapButton onClick={handleSwap} />

        {/* You Receive Section */}
        <div className="space-y-4">
          <div>
            <CurrencyInput
              label="You Receive"
              subtitle="I want to Recieve"
              value={receiveAmount}
              onChange={handleReceiveAmountChange}
              currency="USD"
            />
            {errors.receiveAmount && (
              <p className="mt-2 text-sm text-red-400 animate-fadeIn" role="alert">{errors.receiveAmount}</p>
            )}
          </div>

          <div>
            <BankSelector
              label="Asset"
              selectedBank={receiveBank}
              banks={availableBanks}
              onSelect={updateReceiveBank}
            />
            {errors.receiveBank && (
              <p className="mt-2 text-sm text-red-400 animate-fadeIn" role="alert">{errors.receiveBank}</p>
            )}
          </div>
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-3 p-4 bg-transparent rounded-lg">
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400">
            This is only an estimated price based on current market rates. The
            final price will be confirmed when we receive the funds.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 mt-2"
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
