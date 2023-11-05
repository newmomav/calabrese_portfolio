import Home from '../components/Home';
import Info from '../components/Info';
import Contact from '../components/Contact';
import Stockist from '../components/Stockist';
import Imprint from '../components/Imprint';
import ErrorPage from '../components/ErrorPage';

const routes = [
  { path: '/', element: <Home />, id: 1, title: 'Home' },
  { path: '/info', element: <Info />, id: 2, title: 'Info' },
  { path: '/stockist', element: <Stockist />, id: 3, title: 'Stockist' },

  { path: '/contact', element: <Contact />, id: 4, title: 'Contact' },
  { path: '/imprint', element: <Imprint />, id: 5, title: 'Imprint' },
  { path: '/*', element: <ErrorPage />, id: 6, title: 'Error' },
];
export default routes;
