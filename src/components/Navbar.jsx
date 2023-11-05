import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { to: '/info', id: '1', title: 'info' },
    { to: '/stockist', id: '2', title: 'stockist' },
    { to: '/contact', id: '3', title: 'contact' },
    { to: '/imprint', id: '4', title: 'imprint' },
  ];

  return (
    <nav className="flex justify-start text-base md:text-xl lg:text-1xl xl:text-1xl pl-2 absolute">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.to} className="arrow-active hover:text-[#329404]">
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
