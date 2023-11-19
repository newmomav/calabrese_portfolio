import { NavLink } from 'react-router-dom';

const Stockists = () => {
  return (
    <div className="pl-12 pr-12 text-justify md:pl-6 lg:pl-18 xl:pl-20 2xl:pl-28 md:p-2 md:text-right">
      <NavLink
        to="/"
        className="text-4xl text-[#329404] font-schnorkelei active:text-[#329404] focus:font-bold md:hover:font-semibold"
      >
        x
      </NavLink>
      <div
        className="space-y-2 md:space-y-6"
        style={{
          wordBreak: 'break-word',
        }}
      >
        <h2 className="text-4xl mb-2 mt-2 font-paranoia">Stockists</h2>
        <div className="border-b-2 border- pb-2">
          <h3>SLINA Store</h3>
          <p>Flughafenstraße 32, 12053 Berlin </p>
          <p>
            Instagram: <br />
            <a
              href="https://www.instagram.com/slina.store/"
              className="md:hover:text-[#329404]"
            >
              https://www.instagram.com/slina.store/
            </a>
          </p>
        </div>
        <div className="border-b-2  pb-2">
          <h3>The Good Store</h3>
          <p>Pannierstraße 31, 12047 Berlin </p>
          <a
            href="https://thegoodstore.berlin/"
            className="md:hover:font-paranoia"
          >
            https://thegoodstore.berlin/
          </a>
        </div>

        <h2 className="text-4xl mb-2 font-paranoia">Collaborations</h2>
        <div className="border-b-2 border-[var(--body_color)] pb-2 mb-12">
          <h3>VooStore</h3>
          <a
            className="md:hover:text-[#329404]"
            href="https://www.vooberlin.com/"
          >
            https://www.vooberlin.com/
          </a>
        </div>
        <div className="border-b-2 border-[var(--body_color)] pb-2 mb-6">
          <h3>Bikini Berlin</h3>
          <a
            className="md:hover:text-[#329404]"
            href="https://www.bikiniberlin.de/en/"
          >
            https://www.bikiniberlin.de/en/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stockists;
