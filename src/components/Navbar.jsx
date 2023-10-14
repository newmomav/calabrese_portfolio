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
