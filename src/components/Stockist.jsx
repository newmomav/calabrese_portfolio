import { NavLink } from 'react-router-dom';

const Stockist = () => {
  return (
    <div
      className="pt-0 pl-12 p-2 text-right"
      style={{
        backgroundColor: 'var(--bg-blur)',
        wordBreak: 'break-word',
      }}
    >
      <NavLink to="/" className="text-[#329404]">
        x
      </NavLink>
      <div className="border-b-2 border-[var(--body_color)] pb-2 mb-4">
        <h2>VooStore</h2>
        <p>Oranienstrasse 24 10999 Berlin Germany</p>
        <a href="https://www.vooberlin.com/">https://www.vooberlin.com</a>
      </div>
      <div className="border-b-2 border-[var(--body_color)] border-opacity-50 pb-2 mb-4">
        <h2>The Good Store</h2>
        <p>Pannierstrasse 31 12047 Berlin Germany</p>
        <a href="https://thegoodstore.berlin/">https://thegoodstore.berlin</a>
      </div>
    </div>
  );
};

export default Stockist;
