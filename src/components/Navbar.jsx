import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = () => {
  const navLinks = [
    { to: '/info', id: '1', title: 'info' },
    { to: '/stockist', id: '2', title: 'stockist' },
    { to: '/archive', id: '3', title: 'archive' },
    { to: '/contact', id: '4', title: 'contact' },
    { to: '/imprint', id: '5', title: 'imprint' },
  ];

  return (
    <nav
      className="flex justify-start text-xs md:text-base lg:text-xl absolute"
      style={{
        wordBreak: 'break-word',
      }}
    >
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.to} className="arrow-active hover:text-[#329404]">
              {link.title}
            </NavLink>
          </li>
        ))}
        <li className="">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
