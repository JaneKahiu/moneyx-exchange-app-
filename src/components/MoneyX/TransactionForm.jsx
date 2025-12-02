import { useExchange } from '../../store/exchangeStore';
import CurrencyInput from './CurrencyInput';
import BankSelector from './BankSelector';
import SwapButton from './SwapButton';
import { Button } from '../ui';

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

  // Handle send amount change
  const handleSendAmountChange = (e) => {
    const value = e.target.value;
    updateSendAmount(value);
  };

  // Handle receive amount change
  const handleReceiveAmountChange = (e) => {
    const value = e.target.value;
    updateReceiveAmount(value);
  };

  // Handle swap button click
  const handleSwap = () => {
    swapTransaction();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Transaction submitted:', {
      sendAmount,
      receiveAmount,
      sendBank,
      receiveBank,
    });
    // TODO: Implement actual transaction submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      {/* Transaction Info Card */}
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold text-white">Transaction Info</h2>

        {/* You Send Section */}
        <div className="space-y-4">
          <CurrencyInput
            label="You Send"
            subtitle="I want to Recieve"
            value={sendAmount}
            onChange={handleSendAmountChange}
            currency="USD"
          />

          <BankSelector
            label="Asset"
            selectedBank={sendBank}
            banks={availableBanks}
            onSelect={updateSendBank}
          />
        </div>

        {/* Swap Button */}
        <SwapButton onClick={handleSwap} />

        {/* You Receive Section */}
        <div className="space-y-4">
          <CurrencyInput
            label="You Receive"
            subtitle="I want to Recieve"
            value={receiveAmount}
            onChange={handleReceiveAmountChange}
            currency="USD"
          />

          <BankSelector
            label="Asset"
            selectedBank={receiveBank}
            banks={availableBanks}
            onSelect={updateReceiveBank}
          />
        </div>

        {/* Warning Message */}
        <div className="flex items-start gap-3 p-4 bg-dark-darker rounded-lg border border-yellow-900/30">
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="w-5 h-5 text-yellow-500"
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
          <p className="text-sm text-gray-300">
            This is only an estimated price based on current market rates. The
            final price will be confirmed when we receive the funds.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          className="mt-6"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default TransactionForm;
