import Logo from './components/Logo';
import Gif from './pages/Gif';
import Navbar from './components/Navbar';
import LittleCopyright from './components/LittleCopyright';
import { useLocation } from 'react-router-dom';
import Archive from './pages/Archive';
import Imprint from './pages/Imprint';
import Info from './pages/Info';
import Stockists from './pages/Stockists';
import Archivetext from './components/Archivetext';
import DarkMode from './components/DarkMode';
import BurgerMenu from './components/BurgerMenu';
import ErrorPage from './pages/ErrorPage';
import { useEffect, useState } from 'react';

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
  // if (isHomePage) {
  //   mainContent = <Gif />;
  // } else

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoStyle = {
    position: 'fixed', // Use 'fixed' to position it in the background
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%',
    zIndex: '-1', // Ensure video is behind other content
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
      classes: `${
        isHomePage ? 'pt-0' : 'pt-24'
      } md:hidden col-span-12 row-span-6 overflow-y-auto max-h-screen z-10`,
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

  return (
    // <div
    //   className={`grid grid-cols-12 grid-rows-6 lg:grid-rows-5 md:gap-2 h-screen w-screen z-10`}
    // >

    <div
      className={`grid grid-cols-12 grid-rows-6 lg:grid-rows-5 md:gap-2 h-screen w-screen ${
        isHomePage && isMobile ? '' : 'photo-bg'
      } z-10`}
    >
      {isHomePage && isMobile && (
        <img
          src="landing-page.gif"
          alt="table full of ceramic"
          style={videoStyle}
        />
        // <video
        //   autoPlay
        //   loop
        //   muted
        //   playsInline
        //   style={videoStyle}
        //   src="/landing-page.mp4"
        //   type="video/mp4"
        //   alt="table full of ceramic table ware"
        // />
      )}
      {gridItems.map((item, index) => (
        <div key={index} className={item.classes}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Layout;
