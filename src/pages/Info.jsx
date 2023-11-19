import { NavLink } from 'react-router-dom';

const Info = ({ infoVisible }) => {
  return (
    <div className="pl-12 pr-12 text-justify md:p-2 md:text-right blend-multiply">
      <NavLink
        to="/"
        className="text-4xl text-[#329404] font-schnorkelei active:text-[#329404] focus:font-bold md:hover:font-semibold"
      >
        x
      </NavLink>
      {infoVisible && (
        <img
          className="h-[60vh] w-full object-cover  blend-multiply"
          src="/public/annacalabrese.jpeg"
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
          comprises text, textile, ceramics,painting and care-work.
        </p>
        <p>Instagram:</p>
        <a
          href="https://www.instagram.com/calabreseoffiziell/"
          className="focus:font-vold active:tex-[#329404] md:hover:text-[#329404]"
        >
          calabreseoffiziell
        </a>
        <p>Academia:</p>
        <a
          href="https://tu-berlin.academia.edu/AnnaCalabrese"
          className="focus:font-vold active:tex-[#329404] md:hover:text-[#329404]"
        >
          https://tu-berlin.academia.edu/AnnaCalabrese
        </a>
      </div>
    </div>
  );
};

export default Info;
