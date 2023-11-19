import { NavLink } from 'react-router-dom';

const Archivetext = () => {
  return (
    <div className="pt-0 p-2 pl-6 text-right">
      <NavLink
        to="/"
        className="text-[2rem] text-[#329404] font-schnorkelei hover:font-semibold"
      >
        x
      </NavLink>
      {/* <div
        className="space-y-2"
        style={{
          wordBreak: 'break-word',
        }}
      >
        <h3 className="text-4xl ">Archive</h3>
        <p>
          Ceramic works,
          <br />
          created from 2021 to 2023
        </p>
      </div> */}
    </div>
  );
};

export default Archivetext;
