import { createContext, useContext, useState } from 'react';

// Default bank data
const defaultSendBank = {
  id: 1,
  name: 'Salam Bank',
  icon: '🏦',
};

const defaultReceiveBank = {
  id: 2,
  name: 'Premier Bank',
  icon: '🏛️',
};

// Create Context
const ExchangeContext = createContext();

// Custom hook to use the exchange context
export const useExchange = () => {
  const context = useContext(ExchangeContext);
  if (!context) {
    throw new Error('useExchange must be used within ExchangeProvider');
  }
  return context;
};

// Exchange Provider Component
export function ExchangeProvider({ children }) {
  const [sendAmount, setSendAmount] = useState(0.01);
  const [receiveAmount, setReceiveAmount] = useState(0.2210446);
  const [sendBank, setSendBank] = useState(defaultSendBank);
  const [receiveBank, setReceiveBank] = useState(defaultReceiveBank);
  const [exchangeRate, setExchangeRate] = useState(22.10446);

  // Update send amount (and calculate receive amount based on rate)
  const updateSendAmount = (amount) => {
    const numAmount = parseFloat(amount) || 0;
    setSendAmount(numAmount);
    setReceiveAmount(numAmount * exchangeRate);
  };

  // Update receive amount (and calculate send amount based on rate)
  const updateReceiveAmount = (amount) => {
    const numAmount = parseFloat(amount) || 0;
    setReceiveAmount(numAmount);
    setSendAmount(numAmount / exchangeRate);
  };

  // Update send bank
  const updateSendBank = (bank) => {
    setSendBank(bank);
    // Here you would typically fetch new exchange rates based on the bank
  };

  // Update receive bank
  const updateReceiveBank = (bank) => {
    setReceiveBank(bank);
    // Here you would typically fetch new exchange rates based on the bank
  };

  // Swap transaction (swap send and receive values)
  const swapTransaction = () => {
    // Swap amounts
    const tempAmount = sendAmount;
    setSendAmount(receiveAmount);
    setReceiveAmount(tempAmount);

    // Swap banks
    const tempBank = sendBank;
    setSendBank(receiveBank);
    setReceiveBank(tempBank);

    // Invert exchange rate
    setExchangeRate(1 / exchangeRate);
  };

  const value = {
    // State
    sendAmount,
    receiveAmount,
    sendBank,
    receiveBank,
    exchangeRate,
    // Actions
    updateSendAmount,
    updateReceiveAmount,
    updateSendBank,
    updateReceiveBank,
    swapTransaction,
  };

  return (
    <ExchangeContext.Provider value={value}>
      {children}
    </ExchangeContext.Provider>
  );
}

export default ExchangeContext;
