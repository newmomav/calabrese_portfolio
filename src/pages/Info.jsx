import { NavLink } from 'react-router-dom';

const Info = ({ infoVisible }) => {
  return (
    <div className="pl-12 pr-12 text-justify md:p-2 md:text-right blend-multiply">
      <NavLink
        to="/"
        className="text-4xl text-[#329404] font-schnorkelei  focus:font-paranoia md:hover:font-paranoia"
      >
        x
      </NavLink>
      {infoVisible && (
        <img
          className="h-[60vh] w-full object-cover  blend-multiply"
          src="/annacalabrese.jpeg"
          alt="Portait of artist Calabrese"
        />
      )}
      <div
        className="space-y-2"
        style={{
          wordBreak: 'break-word',
        }}
      >
        <h2 className="text-4xl font-paranoia">Anna Calabrese</h2>
        <p>
          studied Philosophy, Social Sciences and "Theorie und Geschichte der
          Wissenschaft und Technik" in Basel, Berlin and Leipzig. Her practice
          comprises text, textile, ceramics, painting and care-work.
        </p>
        <p>Instagram:</p>
        <a
          target="_blank"
          href="https://www.instagram.com/calabreseoffiziell/"
          className="active:font-paranoia md:hover:font-paranoia"
        >
          calabreseoffiziell
        </a>
        <p>Academia:</p>
        <a
          target="_blank"
          href="https://tu-berlin.academia.edu/AnnaCalabrese"
          className="active:font-paranoia md:hover:font-paranoia"
        >
          https://tu-berlin.academia.edu/AnnaCalabrese
        </a>
      </div>
    </div>
  );
};

export default Info;
