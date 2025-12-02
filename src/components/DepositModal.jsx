import { useState } from 'react';
import Modal from './ui/Modal';

function DepositModal({ isOpen, onClose }) {
  const [selectedMethod, setSelectedMethod] = useState('bank');
  const [amount, setAmount] = useState('');

  const methods = [
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', fee: 'Free' },
    { id: 'card', name: 'Debit/Credit Card', icon: '💳', fee: '2.5%' },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿', fee: '1%' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Deposit Funds">
      <div className="space-y-6">
        {/* Payment Methods */}
        <div>
          <label className="block text-sm font-medium text-[#9ca3af] dark:text-gray-600 mb-3">
            Select Payment Method
          </label>
          <div className="space-y-2">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  selectedMethod === method.id
                    ? 'border-primary bg-primary/10'
                    : 'border-[#2a2a2a] dark:border-gray-200 hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-white dark:text-gray-900 font-medium">
                    {method.name}
                  </span>
                </div>
                <span className="text-sm text-[#9ca3af] dark:text-gray-600">
                  Fee: {method.fee}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-[#9ca3af] dark:text-gray-600 mb-2">
            Amount (USD)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] dark:text-gray-600 text-lg">
              $
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-10 pr-4 py-3 bg-[#0d0d0d] dark:bg-gray-50 border border-[#2a2a2a] dark:border-gray-300 rounded-xl text-white dark:text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {[50, 100, 500, 1000].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset.toString())}
                className="px-2 sm:px-3 py-2 bg-[#262626] dark:bg-gray-100 text-[#9ca3af] dark:text-gray-700 rounded-lg hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all text-xs sm:text-sm"
              >
                ${preset}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-[#0d0d0d] dark:bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#9ca3af] dark:text-gray-600">Amount</span>
            <span className="text-white dark:text-gray-900 font-medium">
              ${amount || '0.00'}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#9ca3af] dark:text-gray-600">Fee</span>
            <span className="text-white dark:text-gray-900 font-medium">
              {methods.find(m => m.id === selectedMethod)?.fee}
            </span>
          </div>
          <div className="border-t border-[#2a2a2a] dark:border-gray-200 pt-2 flex justify-between">
            <span className="text-white dark:text-gray-900 font-semibold">Total</span>
            <span className="text-primary font-semibold text-lg">
              ${amount || '0.00'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-[#262626] dark:bg-gray-200 text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-[#2a2a2a] dark:hover:bg-gray-300 transition-all order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
            disabled={!amount || parseFloat(amount) <= 0}
          >
            Continue
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DepositModal;
