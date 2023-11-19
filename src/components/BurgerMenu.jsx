import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: '/info', id: '1', title: 'info' },
    { to: '/stockist', id: '2', title: 'stockist' },
    { to: '/archive', id: '3', title: 'archive' },
    { to: '/imprint', id: '4', title: 'imprint' },
  ];

  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="md:hidden fixed bottom-5 right-5 text-2xl md:text-base"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col text-2xl mb-12 text-right`}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                className=" active:text-[#329404] focus:text-[#329404] font-paranoia font-bold"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
