// eslint-disable-next-line react/prop-types
const Gif = ({ activeItem }) => {
  return (
    <div className="relative w-full h-full ">
      <img
        className="h-full object-cover lg:w-full z-0 absolute top-0 left-0"
        src="/Kralle-gif.gif"
        alt="Gif von einer Kralle aus Keramik"
      />
      {activeItem === 'Info' && (
        <img
          className="relative top-[20%] left-[20%] w-[40vh] object-cover z-10 blend-multiply"
          src="/annacalabrese.jpeg"
          alt="Portait of artist Calabrese"
        />
      )}
    </div>
  );
};

export default Gif;
