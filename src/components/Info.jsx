import { NavLink } from 'react-router-dom';

const Info = () => {
  return (
    <div className="p-2 text-right">
      <NavLink to="/" className="text-[#329404]">
        x
      </NavLink>
      <h1>Anna Calabrese</h1>
      <p>
        studierte Philosophie, Gesellschafts- wissenschaften und Theorie und
        Geschichte der Wissenschaft und Technik in Basel, Berlin und Leipzig.
        Ihre Praxis umfasst Text, Textil, Keramik, Malerei und Care-Arbeit.
      </p>
    </div>
  );
};

export default Info;
