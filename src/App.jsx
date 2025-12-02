import { ExchangeProvider } from './store/exchangeStore';
import MainLayout from './components/MainLayout';
import TransactionForm from './components/MoneyX/TransactionForm';

function App() {
  return (
    <ExchangeProvider>
      <MainLayout>
        <div className="px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-white mb-2">MoneyX</h1>
          </div>
          
          <TransactionForm />
        </div>
      </MainLayout>
    </ExchangeProvider>
  );
}

export default App;
