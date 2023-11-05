import Logo from './components/Logo';
import DarkMode from './components/DarkMode';
import Gif from './components/Gif';
import Navbar from './components/Navbar';
import LittleCopyright from './components/LittleCopyright';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const infoVisible = location.pathname === '/info';

  const gridItems = [
    {
      content: <Logo />,
      classes:
        'hidden md:block md:col-span-10 md:row-span-1 flex justify-center',
    },
    {
      content: <DarkMode />,
      classes: 'hidden md:block md:col-span-2 md:row-span-1',
    },
    {
      content: <LittleCopyright />,
      classes: 'hidden md:block md:row-span-5 md:col-span-1 lg:row-span-4',
    },
    {
      content: children,
      classes:
        'hidden md:block md:row-start-2 md:row-span-5 md:col-start-2 md:col-span-3 xl:row-start-3  xl:row-span-4 overflow-y-auto max-h-screen text-justify',
    },
    {
      content: <Gif infoVisible={infoVisible} />,
      classes:
        'row-span-6 col-span-12  md:col-span-6 lg:row-span-4 lg:col-span-6',
    },
    {
      content: <Navbar />,
      classes:
        'hidden md:block md:row-span-5  md:col-span-2 lg:row-span-4 flex flex-col justify-end',
    },
  ];

  return (
    <div className="grid grid-cols-12 grid-rows-6 lg:grid-rows-5 h-screen w-screen border-collapse">
      {gridItems.map((item, index) => (
        <div key={index} className={item.classes}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Layout;
