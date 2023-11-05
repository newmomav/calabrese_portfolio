// eslint-disable-next-line react/prop-types
const Gif = ({ infoVisible }) => {
  if (infoVisible) {
    console.log(infoVisible);
  }
  return (
    <div className="relative w-full h-full -z-20">
      <video
        className="h-full object-cover lg:w-full z-0 absolute top-0 left-0"
        autoPlay
        loop
        muted
        src="/landing-page.MOV"
        alt="Gif von einer Kralle aus Keramik"
      />
      {infoVisible && (
        <img
          className="absolute top-[20%] right-[10%] w-[40vh] object-cover z-50 blend-multiply"
          src="/public/annacalabrese.jpeg"
          alt="Portait of artist Calabrese"
        />
      )}
    </div>
  );
};

export default Gif;
