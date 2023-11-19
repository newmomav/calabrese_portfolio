import { NavLink } from 'react-router-dom';

const Imprint = () => {
  return (
    <div className="pl-12 pr-12 text-justify md:text-right md:pr-2 md:pl-6">
      <NavLink
        to="/"
        className="text-4xl text-[#329404] font-schnorkelei active:text-[#329404] focus:font-bold md:hover:font-semibold"
      >
        x
      </NavLink>
      <div
        className="space-y-2"
        style={{
          wordBreak: 'break-word',
        }}
      >
        <h2 className="text-4xl font-paranoia">Imprint</h2>

        <p className="font-semibold ">Legal Notice</p>
        <p>
          Anna Calabrese
          <br />
          Koloniestr. 29
          <br />
          13359 Berlin
        </p>
        <p>
          <a
            href="mailto:calabrese@gmx.ch"
            className="cursor-pointer hover:text-[#329404]"
          >
            calabrese@gmx.ch
          </a>
          <br />
          +49 176 658 027 40
        </p>
        <p>Responsible for Content: Anna Calabrese</p>
        <p className="border-b border-opacity-80 border-[var(--body_color)] pb-2 mb-8">
          This Legal Notice complies with the German laws under § 5 TMG and §
          55.
        </p>
        <p className="font-semibold pb-2">Liability for Content</p>
        <p className="pb-2">
          The contents of our website have been created with the greatest
          possible care. However, we cannot guarantee the contents' accuracy,
          completeness, or topicality. According to Section 7, paragraph 1 of
          the TMG (Telemediengesetz - German Telemedia Act), we as service
          providers are liable for our content on these pages by general laws.
          However, obligations to remove or block the use of information under
          general laws remain unaffected. Upon notification of such violations,
          we will remove the content immediately.
        </p>
        <p className="font-semibold pb-2">Liability for Links</p>
        <p className="border-b border-opacity-80 border-[var(--body_color)] pb-2">
          Our website contains links to external websites, over whose contents
          we have no control. Therefore, we cannot accept any liability for
          these external contents. Upon notification of violations, we will
          remove such links immediately.
        </p>
        <p className="font-semibold pb-2">Copyright</p>
        <p className="border-b border-opacity-80 border-[var(--body_color)] pb-2">
          The contents and works on these pages created by the site operator are
          subject to German copyright law. Should you become aware of a
          copyright infringement, please inform us accordingly. Upon
          notification of violations, we will remove such contents immediately.
        </p>
      </div>
      <small className="block mt-4">
        Last Updated: November 2023 ❥ :*¨༺ ♱✮♱ ༻¨*:·
      </small>
    </div>
  );
};

export default Imprint;
