import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="p-2 text-right">
      <NavLink to="/" className="text-[#329404]">
        x
      </NavLink>
      <p>
        Anna Calabrese <br />
        Potsdamer Strasse 70 <br />
        10785 Berlin <br />
        <a href="mailto:calabrese@gmx.ch">calabrese@gmx.ch</a>
        <br />
        0049 17665802740
      </p>
      <a href="https://www.instagram.com/calabreseoffiziell/">INSTAGRAM</a>
    </div>
  );
};

export default Contact;
