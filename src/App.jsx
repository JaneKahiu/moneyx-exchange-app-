import MainLayout from './components/MainLayout';

function App() {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">MoneyX</h1>
        <p className="text-gray-400">
          Welcome to your exchange dashboard
        </p>
      </div>
    </MainLayout>
  );
}

export default App;
