import { NavLink } from 'react-router-dom';

const Stockists = () => {
  return (
    <div className="pl-12 pr-12 text-justify md:pl-6 lg:pl-18 xl:pl-20 2xl:pl-28 md:p-2 md:text-right">
      <NavLink
        to="/"
        className="text-4xl text-[#329404] font-schnorkelei  focus:font-paranoia md:hover:font-paranoia"
      >
        x
      </NavLink>
      <div
        className="space-y-2 md:space-y-6"
        style={{
          wordBreak: 'break-word',
        }}
      >
        <h2 className="text-4xl font-paranoia">Stockists</h2>
        <div className="border-b border-opacity-80 border-color pb-2 ">
          <h3>SLINA Store</h3>
          <p>Flughafenstraße 32, 12053 Berlin </p>
          <p>
            Instagram: <br />
            <a
              target="_blank"
              href="https://www.instagram.com/slina.store/"
              className="active:font-paranoia md:hover:font-paranoia"
              rel="noreferrer"
            >
              https://www.instagram.com/slina.store/
            </a>
          </p>
        </div>
        <div className="border-b border-opacity-80 border-color pb-2">
          <h3>The Good Store</h3>
          <p>Pannierstraße 31, 12047 Berlin </p>
          <a
            target="_blank"
            href="https://thegoodstore.berlin/"
            className="active:font-paranoia md:hover:font-paranoia"
            rel="noreferrer"
          >
            https://thegoodstore.berlin/
          </a>
        </div>

        <h2 className="text-4xl font-paranoia">Collaborations</h2>
        <div className="border-b border-opacity-80 border-color pb-2 mb-6">
          <h4>NOMAD X COLLECTIVE</h4>
          <a
            target="_blank"
            className="active:font-paranoia md:hover:font-paranoia"
            href="https://www.nomadxcollective.com/"
            rel="noreferrer"
          >
            https://www.nomadxcollective.com/
          </a>
        </div>
        <div className="border-b border-opacity-80 border-color pb-2 mb-12">
          <h4>VooStore</h4>
          <a
            target="_blank"
            className="active:font-paranoia md:hover:font-paranoia"
            href="https://www.vooberlin.com/"
            rel="noreferrer"
          >
            https://www.vooberlin.com/
          </a>
        </div>
        <div className="pb-2 mb-6">
          <h4>Bikini Berlin</h4>
          <a
            target="_blank"
            className="active:font-paranoia md:hover:font-paranoia"
            href="https://www.bikiniberlin.de/en/"
            rel="noreferrer"
          >
            https://www.bikiniberlin.de/en/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stockists;
