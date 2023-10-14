// eslint-disable-next-line react/prop-types
const Imprint = ({ handlerReset }) => {
  console.log('Imprint component rendered');
  return (
    <div id="imprint" className="z-60">
      <h3> I M P R I N T</h3>
      <button
        className="cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          console.log('Close button clicked');
          handlerReset();
        }}
      >
        Close
      </button>
      <p>
        <strong>Verantwortlich für den Inhalt: Anna Calabrese </strong>
        Haftungsausschluss: Die bereitgestellten Informationen auf dieser
        Website wurden sorgfältig geprüft und werden regelmäßig aktualisiert.
        Jedoch kann keine Haftung oder Garantie dafür übernommen werden, dass
        alle Angaben zu jeder Zeit vollständig, richtig und in letzter
        Aktualität dargestellt sind. Dies gilt insbesondere für alle Links zu
        anderen Websites, auf die direkt oder indirekt verwiesen wird, sowie für
        die Rechtmäßigkeit der Website calabrese-ceramics.com. Alle Angaben
        können ohne vorherige Ankündigung geändert, entfernt oder ergänzt
        werden. Der Inhalt, sowie die Gestaltung von calabrese-ceramics.com sind
        urheberrechtlich geschützt. Die Vervielfältigung, Änderung, Darstellung,
        Verbreitung, Übermittlung, Veröffentlichung, Verkauf, Lizenzierung,
        Bearbeitung, Verfremdung oder Nutzung von Informationen oder Daten für
        welche Zwecke auch immer, insbesondere die Verwendung von Bildmaterial,
        Grafiken, Videos, Texten oder Textteilen, ist nicht gestattet und bedarf
        der vorherigen schriftlichen Zustimmung von Studio Calabrese.
        <small> ❥Calabrese Ceramics 2023 ·:*¨༺ ♱✮♱ ༻¨*:·</small>
      </p>
    </div>
  );
};

export default Imprint;
