const navItems = [
  { label: 'Info', href: '#info' },
  { label: 'Contact', href: '#contact' },
  { label: 'Imprint', href: '#imprint' },
];

const Navbar = () => {
  return (
    <nav className="flex justify-start text-base md:text-xl lg:text-1xl xl:text-1xl pl-2 absolute">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="arrow-active hover:text-red-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
