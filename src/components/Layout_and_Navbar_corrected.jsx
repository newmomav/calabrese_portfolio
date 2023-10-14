
import Logo from '../components/Logo';
import DarkMode from '../components/DarkMode';
import Gif from '../components/Gif';
import Navbar from '../components/Navbar';
import LittleCopyright from '../components/LittleCopyright';
import Info from '../components/Info';
import Contact from '../components/Contact';
import Imprint from '../components/Imprint';

import { useState } from 'react';

const navItems = [
  { label: 'Info', href: '#info' },
  { label: 'Contact', href: '#contact' },
  { label: 'Imprint', href: '#imprint' },
];

const Layout = () => {
  const [activeItem, setActiveItem] = useState(null);

  const gridItems = [
    {
      content: <Logo />,
      classes:
        'border border-red-300 col-span-10 row-span-1 flex justify-center',
    },
    {
      content: <DarkMode />,
      classes:
        'border border-red-300 col-span-2 row-span-1 pl-2 flex justify-start items-end',
    },
    {
      content: <LittleCopyright />,
      classes:
        'border border-red-300 hidden row-span-5 lg:row-span-4 md:block md:col-span-1 lg:col-span-1 ',
    },
    {
      content:
        activeItem === 'Info' ? (
          <Info />
        ) : activeItem === 'Contact' ? (
          <Contact />
        ) : (
          <Imprint />
        ),
      classes:
        'border border-red-300 hidden row-span-5 lg:row-span-4 md:block md:col-span-3 lg:col-span-3',
    },
    {
      content: <Gif />,
      classes:
        'border border-red-300 row-span-5 lg:row-span-4 col-span-10 md:col-span-6 lg:col-span-6',
    },
    {
      content: (
        <Navbar
          items={navItems}
          onItemClick={(label) => setActiveItem(label)}
        />
      ),
      classes:
        'border border-red-300 row-span-5 lg:row-span-4 col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-end',
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-12 grid-rows-6 lg:grid-rows-5 h-screen w-screen border-collapse">
        {gridItems.map((item, index) => (
          <div key={index} className={item.classes}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Layout;
/* eslint-disable react/prop-types */
const Navbar = ({ items = [], onItemClick }) => {
  return (
    <nav className="flex justify-start text-base md:text-xl lg:text-1xl xl:text-1xl pl-2 absolute">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => onItemClick(item.label)}
              className="arrow-active hover:text-red-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
