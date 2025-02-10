import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar = () => {
  const navLinks = [
    // {
    //   to: 'https://ht2yyz-cn.myshopify.com',
    //   id: '1',
    //   title: 'Shop',
    //   external: true,
    // },
    { to: '/info', id: '2', title: 'Info' },
    { to: '/stockists', id: '3', title: 'Stockists' },
    { to: '/archive', id: '4', title: 'Archive' },
    { to: '/imprint', id: '5', title: 'Contact' },
  ];

  return (
    <nav
      className="flex justify-start text-xs md:text-sm lg:text-xl absolute "
      style={{
        wordBreak: 'break-word',
      }}
    >
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              className="
              over:text-[#329404] hover:font-paranoia hover:font-bold"
            >
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
