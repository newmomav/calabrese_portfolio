import Logo from './components/Logo';
import Gif from './pages/Gif';
import Navbar from './components/Navbar';
import LittleCopyright from './components/LittleCopyright';
import { useLocation } from 'react-router-dom';
import Archive from './components/Archive';
import Imprint from './pages/Imprint';
import Info from './pages/Info';
import Stockists from './pages/Stockists';
import Archivetext from './pages/Archivetext';
import DarkMode from './components/DarkMode';
import BurgerMenu from './components/BurgerMenu';
import ErrorPage from './pages/ErrorPage';

const Layout = ({ children }) => {
  const location = useLocation();
  const isArchivePage = location.pathname === '/archive';
  const isInfoPage = location.pathname === '/info';
  const isStockistsPage = location.pathname === '/stockist';
  const isImprintPage = location.pathname === '/imprint';
  const isHomePage = location.pathname === '/';
  const knownRoutes = ['/info', '/archive', '/stockist', '/imprint', '/'];
  const isErrorPage = !knownRoutes.includes(location.pathname);

  let mainContent;
  if (isArchivePage) {
    mainContent = <Archive archiveVisible={isArchivePage} />;
  } else if (isInfoPage) {
    mainContent = <Info infoVisible={isInfoPage} />;
  } else if (isStockistsPage) {
    mainContent = <Stockists />;
  } else if (isImprintPage) {
    mainContent = <Imprint />;
  } else if (isErrorPage) {
    mainContent = <ErrorPage />;
  } else {
    mainContent = '';
  }

  const backgroundItem = isHomePage
    ? null
    : {
        content: (
          <div className="absolute top-0 left-0 h-full w-full photo-bg" />
        ),
        classes: 'col-span-12 row-span-6 lg:row-span-5',
      };

  const gridItems = [
    {
      content: <Logo />,
      classes:
        'fixed top-5 w-full md:static md:col-span-10 md:row-span-1 md:flex md:justify-center z-50 md:z-0',
    },
    {
      content: '',
      classes: 'hidden md:block md:col-span-2 md:row-span-1',
    },
    {
      content: <LittleCopyright />,
      classes:
        'hidden md:block md:row-start-2 md:row-span-5 md:col-span-1 lg:row-span-4',
    },
    {
      // For mobile screens, this grid cell dynamically shows content
      content: mainContent,
      classes:
        // `${
        //   isHomePage ? 'pt-0' : 'pt-24'
        // } md:hidden col-span-12 row-span-6 overflow-y-auto max-h-screen z-10`,
        'pt-24 md:hidden col-span-12 row-span-6 overflow-y-auto max-h-screen z-10',
    },
    {
      // For tablet and larger screens
      content: isArchivePage ? <Archivetext /> : children,
      classes:
        'hidden md:block md:row-start-3 md:row-span-4 md:col-start-2 md:col-span-3  overflow-y-auto max-h-screen z-50',
    },
    {
      content: isArchivePage ? <Archive /> : <Gif infoVisible={isInfoPage} />,
      classes:
        'hidden md:block md:col-start-5 col-span-7 row-span-5  lg:row-span-4 lg:col-span-7 overflow-y-auto max-h-screen',
    },
    {
      content: <Navbar />,
      classes:
        'hidden md:block md:row-span-5  md:col-span-1 lg:row-span-4 flex flex-col justify-end',
    },
    {
      content: <BurgerMenu />,
      classes: 'md:hidden fixed bottom-5 right-5 z-50',
    },
    {
      content: <DarkMode />,
      classes: 'md:hidden fixed bottom-5 left-5 z-50',
    },
  ];

  const mainContainerClass = isHomePage ? 'video-bg' : 'photo-bg';

  return (
    <div className="relative h-screen w-screen">
      {/* Video background - always present */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 min-w-full min-h-full -z-50"
      >
        <source src="/landing-page.MOV" type="video/mp4" />
      </video>

      {/* Conditional background image */}
      <div className="grid grid-cols-12 grid-rows-6 lg:grid-rows-5 md:gap-2">
        {gridItems.map(
          (item, index) =>
            item && (
              <div key={index} className={item.classes}>
                {item.content}
              </div>
            )
        )}
      </div>
      {/* <div
        className={`grid grid-cols-12 grid-rows-6 lg:grid-rows-5 md:gap-2 h-screen w-screen ${
          isHomePage ? 'video-bg' : 'photo-bg'
        }`}
      >
        {gridItems.map((item, index) => (
          <div key={index} className={item.classes}>
            {item.content}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Layout;
