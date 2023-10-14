import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Layout from './pages/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed top-0 left-0 h-screen w-screen z-50 `}>
          <Loader />
        </div>
      )}

      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Layout />
      </div>
    </>
  );
}

export default App;
