import Home from '../pages/Home';
import Info from '../pages/Info';
import Archivetext from '../components/Archivetext';
import Stockists from '../pages/Stockists';
import Imprint from '../pages/Imprint';
import ErrorPage from '../pages/ErrorPage';

const routes = [
  { path: '/', element: <Home />, id: 1, title: 'Home' },
  { path: '/info', element: <Info />, id: 2, title: 'Info' },
  { path: '/stockists', element: <Stockists />, id: 3, title: 'Stockists' },
  { path: '/archive', element: <div />, id: 4, title: 'Archive' },
  { path: '/archive', element: <Archivetext />, id: 5, title: 'Archivetext' },
  { path: '/imprint', element: <Imprint />, id: 6, title: 'Imprint' },
  { path: '/*', element: <ErrorPage />, id: 7, title: 'Error' },
];
export default routes;
