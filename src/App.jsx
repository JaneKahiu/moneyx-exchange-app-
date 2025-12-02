import { ExchangeProvider } from './store/exchangeStore';
import { ThemeProvider } from './store/themeStore';
import MainLayout from './components/MainLayout';
import TransactionForm from './components/MoneyX/TransactionForm';

function App() {
  return (
    <ThemeProvider>
      <ExchangeProvider>
        <MainLayout>
        <div className="px-6 py-8 max-w-[1400px]">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white light:text-gray-900 mb-2">MoneyX</h1>
          </div>            <TransactionForm />
          </div>
        </MainLayout>
      </ExchangeProvider>
    </ThemeProvider>
  );
}

export default App;
