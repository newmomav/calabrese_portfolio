import Logo from '../components/Logo';
import DarkMode from '../components/DarkMode';
import Gif from '../components/Gif';
// import Navbar from '../components/Navbar';
import LittleCopyright from '../components/LittleCopyright';
import Info from '../components/Info';
import Contact from '../components/Contact';
import Imprint from '../components/Imprint';

import { useState } from 'react';

const Layout = () => {
  const [activeItem, setActiveItem] = useState('');
  function activeItemHandler(item) {
    setActiveItem(item);
  }
  function activeResetter() {
    console.log('Resetting active item');
    setActiveItem('');
  }

  const gridItems = [
    {
      content: <Logo />,
      classes:
        'border border-red-50 col-span-10 row-span-1 flex justify-center',
    },
    {
      content: <DarkMode />,
      classes:
        'border border-red-50 col-span-2 row-span-1 pl-2 flex justify-start items-end',
    },
    {
      content: <LittleCopyright />,
      classes:
        'border border-red-50 hidden row-span-5 lg:row-span-4 md:block md:col-span-1 lg:col-span-1 ',
    },
    {
      content:
        activeItem === 'Info' ? (
          <Info handlerReset={activeResetter} />
        ) : activeItem === 'Contact' ? (
          <Contact handlerReset={activeResetter} />
        ) : (
          <Imprint handlerReset={activeResetter} />
        ),
      classes:
        'border border-red-50 hidden row-span-5 pt-8 lg:row-span-4 md:block md:col-span-3 lg:col-span-3 overflow-y-auto max-h-screen',
    },
    {
      content: <Gif activeItem={activeItem} />,
      classes:
        'border border-red-50 row-span-5 lg:row-span-4 col-span-10 md:col-span-6 lg:col-span-6',
    },
    {
      content: (
        <Navbar activeItem={activeItem} onItemClick={activeItemHandler} />
      ),
      classes:
        'border border-red-50 row-span-5 lg:row-span-4 col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-end',
    },
  ];

  return (
    <div className=" grid grid-cols-12 grid-rows-6 lg:grid-rows-5 h-screen w-screen border border-red-50  border-collapse">
      {gridItems.map((item, index) => (
        <div key={index} className={item.classes}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Layout;

// eslint-disable-next-line react/prop-types
const Navbar = ({ onItemClick }) => {
  const items = [
    { item: 'Info', href: '#info' },
    { item: 'Contact', href: '#contact' },
    { item: 'Imprint', href: '#imprint' },
  ];

  return (
    <nav className="flex justify-start text-base md:text-xl lg:text-1xl xl:text-1xl pl-2 absolute">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onItemClick(item.item);
              }}
              className="arrow-active hover:text-red-200"
            >
              {item.item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
