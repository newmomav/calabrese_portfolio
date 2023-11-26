import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import routes from './routes/root';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={` fixed top-0 left-0 h-screen w-screen z-50 `}>
          <Loader />
        </div>
      )}

      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
