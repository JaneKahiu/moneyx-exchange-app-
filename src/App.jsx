import { ExchangeProvider } from './store/exchangeStore';
import { ThemeProvider } from './store/themeStore';
import MainLayout from './components/MainLayout';
import MoneyXPage from './pages/MoneyXPage';

function App() {
  return (
    <ThemeProvider>
      <ExchangeProvider>
        <MainLayout>
          <MoneyXPage />
        </MainLayout>
      </ExchangeProvider>
    </ThemeProvider>
  );
}

export default App;
